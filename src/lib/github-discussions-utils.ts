/**
 * GitHub Discussions Utilities
 * Helper functions for common operations
 */

import { GitHubDiscussionsClient } from './github-discussions';
import { GitHubDiscussionsREST } from './github-discussions-rest';

/**
 * Get the GitHub token from environment variables
 * Works in Next.js server and client components
 */
export function getGitHubToken(): string {
  // Try NEXT_PUBLIC_ first (for client-side)
  if (typeof window !== 'undefined') {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (!token) {
      throw new Error('NEXT_PUBLIC_GITHUB_TOKEN environment variable not set');
    }
    return token;
  }

  // Try secret token (for server-side)
  const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN or NEXT_PUBLIC_GITHUB_TOKEN environment variable not set');
  }
  return token;
}

/**
 * Create a GraphQL client instance
 */
export function createGraphQLClient(): GitHubDiscussionsClient {
  return new GitHubDiscussionsClient(getGitHubToken());
}

/**
 * Create a REST client instance
 */
export function createRESTClient(): GitHubDiscussionsREST {
  return new GitHubDiscussionsREST(getGitHubToken());
}

/**
 * Fetch discussions with error handling
 */
export async function fetchDiscussions(
  owner: string,
  repo: string,
  useREST: boolean = false
) {
  try {
    const client = useREST ? createRESTClient() : createGraphQLClient();

    if (useREST) {
      const discussions = await (client as GitHubDiscussionsREST).getDiscussions(owner, repo);
      return discussions.map(d => ({
        id: d.id.toString(),
        number: d.number,
        title: d.title,
        body: d.body,
        author: {
          login: d.user.login,
          avatarUrl: d.user.avatar_url,
        },
        category: d.category,
        createdAt: d.created_at,
        updatedAt: d.updated_at,
        url: d.html_url,
        commentCount: d.comments,
      }));
    } else {
      return (client as GitHubDiscussionsClient).getDiscussions(owner, repo);
    }
  } catch (error) {
    console.error('Error fetching discussions:', error);
    throw error;
  }
}

/**
 * Format discussion body - truncate and add ellipsis
 */
export function truncateBody(body: string, maxLength: number = 150): string {
  if (body.length <= maxLength) return body;
  return body.substring(0, maxLength).trim() + '...';
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return diffHours <= 1 ? 'just now' : `${diffHours} hours ago`;
  }
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Validate GitHub token format
 */
export function isValidTokenFormat(token: string): boolean {
  return token.length > 0 && !token.includes(' ');
}

/**
 * Create markdown link from discussion
 */
export function createDiscussionLink(
  owner: string,
  repo: string,
  number: number,
  title?: string
): string {
  const url = `https://github.com/${owner}/${repo}/discussions/${number}`;
  return title ? `[${title}](${url})` : url;
}

/**
 * Parse discussion number from URL
 */
export function parseDiscussionNumber(url: string): number | null {
  const match = url.match(/\/discussions\/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Format discussion for export/display
 */
export function formatDiscussionAsMarkdown(discussion: any): string {
  return `# ${discussion.title}

**Author:** [@${discussion.author.login}](https://github.com/${discussion.author.login})
**Category:** ${discussion.category.emoji} ${discussion.category.name}
**Created:** ${formatDate(discussion.createdAt)}
**Comments:** ${discussion.commentCount || 0}
**Upvotes:** ${discussion.upvotes || 0}

---

${discussion.body}

---

[View on GitHub](${discussion.url})
`;
}

/**
 * Batch fetch multiple discussions
 */
export async function batchFetchDiscussions(
  owner: string,
  repo: string,
  numbers: number[],
  useREST: boolean = false
) {
  const client = useREST ? createRESTClient() : createGraphQLClient();

  const discussions = await Promise.all(
    numbers.map((number) =>
      useREST
        ? (client as GitHubDiscussionsREST).getDiscussionByNumber(owner, repo, number)
        : (client as GitHubDiscussionsClient).getDiscussionByNumber(owner, repo, number)
    )
  );

  return discussions.filter(Boolean);
}

/**
 * Search discussions with retry
 */
export async function searchDiscussionsWithRetry(
  owner: string,
  repo: string,
  query: string,
  maxRetries: number = 3,
  useREST: boolean = false
): Promise<any[]> {
  const client = useREST ? createRESTClient() : createGraphQLClient();

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      if (useREST) {
        return await (client as GitHubDiscussionsREST).searchDiscussions(owner, repo, query);
      } else {
        return await (client as GitHubDiscussionsClient).searchDiscussions(owner, repo, query);
      }
    } catch (error) {
      if (attempt === maxRetries) throw error;
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }

  return [];
}

/**
 * Type definitions for exported types
 */
export interface Discussion {
  id: string;
  number?: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  author: {
    login: string;
    avatarUrl: string;
  };
  category: {
    name: string;
    emoji: string;
  };
  commentCount: number;
  upvotes?: number;
}

export interface Comment {
  id: string;
  body: string;
  createdAt: string;
  author: {
    login: string;
    avatarUrl: string;
  };
}

/**
 * Cache management for discussions
 */
export class DiscussionsCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl: number;

  constructor(ttlMinutes: number = 10) {
    this.ttl = ttlMinutes * 60 * 1000;
  }

  set(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }
}
