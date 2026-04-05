/**
 * GitHub Discussions REST API Client
 * Simpler alternative to GraphQL - works great for basic operations
 * 
 * Usage:
 * const discussions = new GitHubDiscussionsREST('token');
 * const results = await discussions.getDiscussions('owner', 'repo');
 */

interface RestDiscussion {
  number: number;
  id: number;
  title: string;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
  category: {
    name: string;
    emoji: string;
  };
  created_at: string;
  updated_at: string;
  comments: number;
  repository_url: string;
  html_url: string;
}

interface RestComment {
  id: number;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
}

export class GitHubDiscussionsREST {
  private token: string;
  private endpoint = 'https://api.github.com';

  constructor(token: string) {
    if (!token) {
      throw new Error('GitHub token is required');
    }
    this.token = token;
  }

  private async fetch(path: string, options: RequestInit = {}): Promise<any> {
    const url = `${this.endpoint}${path}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = (await response.json().catch(() => ({}))) as { message?: string };
      throw new Error(`GitHub API error: ${response.status} - ${error.message || response.statusText}`);
    }

    return response.json();
  }

  async getDiscussions(
    owner: string,
    repo: string,
    options: {
      page?: number;
      per_page?: number;
      sort?: 'created' | 'updated';
      direction?: 'asc' | 'desc';
    } = {}
  ): Promise<RestDiscussion[]> {
    const {
      page = 1,
      per_page = 10,
      sort = 'created',
      direction = 'desc',
    } = options;

    return this.fetch(
      `/repos/${owner}/${repo}/discussions?page=${page}&per_page=${per_page}&sort=${sort}&direction=${direction}`
    );
  }

  async getDiscussionByNumber(
    owner: string,
    repo: string,
    number: number
  ): Promise<RestDiscussion> {
    return this.fetch(`/repos/${owner}/${repo}/discussions/${number}`);
  }

  async getDiscussionComments(
    owner: string,
    repo: string,
    number: number,
    options: { page?: number; per_page?: number } = {}
  ): Promise<RestComment[]> {
    const { page = 1, per_page = 20 } = options;

    return this.fetch(
      `/repos/${owner}/${repo}/discussions/${number}/comments?page=${page}&per_page=${per_page}`
    );
  }

  async createDiscussion(
    owner: string,
    repo: string,
    input: {
      category_id: string;
      title: string;
      body: string;
    }
  ): Promise<RestDiscussion> {
    return this.fetch(`/repos/${owner}/${repo}/discussions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
  }

  async addComment(
    owner: string,
    repo: string,
    discussion_number: number,
    body: string
  ): Promise<RestComment> {
    return this.fetch(
      `/repos/${owner}/${repo}/discussions/${discussion_number}/comments`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      }
    );
  }

  async updateDiscussion(
    owner: string,
    repo: string,
    number: number,
    updates: {
      title?: string;
      body?: string;
      category_id?: string;
    }
  ): Promise<RestDiscussion> {
    return this.fetch(`/repos/${owner}/${repo}/discussions/${number}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
  }

  async closeDiscussion(
    owner: string,
    repo: string,
    number: number,
    reason?: string
  ): Promise<RestDiscussion> {
    return this.fetch(`/repos/${owner}/${repo}/discussions/${number}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        state: 'closed',
        state_reason: reason || 'resolved',
      }),
    });
  }

  async searchDiscussions(
    owner: string,
    repo: string,
    query: string,
    options: { page?: number; per_page?: number } = {}
  ): Promise<RestDiscussion[]> {
    const { page = 1, per_page = 10 } = options;

    const searchUrl = `/search/discussions?q=${encodeURIComponent(
      `${query} repo:${owner}/${repo}`
    )}&page=${page}&per_page=${per_page}`;

    const data = await this.fetch(searchUrl);
    return data.items;
  }

  async getCategories(owner: string, repo: string): Promise<Array<{
    id: string;
    name: string;
    emoji: string;
    description: string;
    created_at: string;
    updated_at: string;
    repository_id: number;
  }>> {
    return this.fetch(`/repos/${owner}/${repo}/discussion-categories`);
  }

  async lockDiscussion(
    owner: string,
    repo: string,
    number: number
  ): Promise<void> {
    await this.fetch(`/repos/${owner}/${repo}/discussions/${number}/lock`, {
      method: 'PUT',
    });
  }

  async unlockDiscussion(
    owner: string,
    repo: string,
    number: number
  ): Promise<void> {
    await this.fetch(`/repos/${owner}/${repo}/discussions/${number}/lock`, {
      method: 'DELETE',
    });
  }

  async pinDiscussion(
    owner: string,
    repo: string,
    number: number
  ): Promise<RestDiscussion> {
    return this.fetch(`/repos/${owner}/${repo}/discussions/${number}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pinned: true }),
    });
  }

  async unpinDiscussion(
    owner: string,
    repo: string,
    number: number
  ): Promise<RestDiscussion> {
    return this.fetch(`/repos/${owner}/${repo}/discussions/${number}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pinned: false }),
    });
  }
}
