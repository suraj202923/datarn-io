/**
 * GitHub Discussions GraphQL Client
 * Works on Cloudflare Pages and Next.js
 * 
 * Usage:
 * const discussions = new GitHubDiscussionsClient('token');
 * const results = await discussions.getDiscussions('owner', 'repo');
 */

interface DiscussionNode {
  id: string;
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
  comments: {
    totalCount: number;
  };
  upvoteCount: number;
}

interface Discussion {
  id: string;
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
  upvotes: number;
}

interface Comment {
  id: string;
  body: string;
  createdAt: string;
  author: {
    login: string;
    avatarUrl: string;
  };
}

interface CreateDiscussionInput {
  categoryId: string;
  title: string;
  body: string;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export class GitHubDiscussionsClient {
  private token: string;
  private endpoint = 'https://api.github.com/graphql';

  constructor(token: string) {
    if (!token) {
      throw new Error('GitHub token is required');
    }
    this.token = token;
  }

  private async query<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const result: GraphQLResponse<T> = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL error: ${result.errors[0].message}`);
    }

    return result.data as T;
  }

  async getDiscussions(owner: string, repo: string, first: number = 10): Promise<Discussion[]> {
    const query = `
      query GetDiscussions($owner: String!, $repo: String!, $first: Int!) {
        repository(owner: $owner, name: $repo) {
          discussions(first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              id
              title
              body
              createdAt
              updatedAt
              url
              author {
                login
                avatarUrl
              }
              category {
                name
                emoji
              }
              comments {
                totalCount
              }
              upvoteCount
            }
          }
        }
      }
    `;

    const data = await this.query<{
      repository: { discussions: { nodes: DiscussionNode[] } };
    }>(query, { owner, repo, first });

    return data.repository.discussions.nodes.map(node => ({
      id: node.id,
      title: node.title,
      body: node.body,
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      url: node.url,
      author: node.author,
      category: node.category,
      commentCount: node.comments.totalCount,
      upvotes: node.upvoteCount,
    }));
  }

  async getDiscussionByNumber(
    owner: string,
    repo: string,
    number: number
  ): Promise<Discussion | null> {
    const query = `
      query GetDiscussion($owner: String!, $repo: String!, $number: Int!) {
        repository(owner: $owner, name: $repo) {
          discussion(number: $number) {
            id
            title
            body
            createdAt
            updatedAt
            url
            author {
              login
              avatarUrl
            }
            category {
              name
              emoji
            }
            comments {
              totalCount
            }
            upvoteCount
          }
        }
      }
    `;

    const data = await this.query<{
      repository: { discussion: DiscussionNode | null };
    }>(query, { owner, repo, number });

    if (!data.repository.discussion) {
      return null;
    }

    const node = data.repository.discussion;
    return {
      id: node.id,
      title: node.title,
      body: node.body,
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      url: node.url,
      author: node.author,
      category: node.category,
      commentCount: node.comments.totalCount,
      upvotes: node.upvoteCount,
    };
  }

  async getDiscussionComments(
    owner: string,
    repo: string,
    number: number,
    first: number = 20
  ): Promise<Comment[]> {
    const query = `
      query GetComments($owner: String!, $repo: String!, $number: Int!, $first: Int!) {
        repository(owner: $owner, name: $repo) {
          discussion(number: $number) {
            comments(first: $first) {
              nodes {
                id
                body
                createdAt
                author {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
      }
    `;

    const data = await this.query<{
      repository: { discussion: { comments: { nodes: any[] } } | null };
    }>(query, { owner, repo, number, first });

    if (!data.repository.discussion) {
      return [];
    }

    return data.repository.discussion.comments.nodes;
  }

  async createDiscussion(
    owner: string,
    repo: string,
    input: CreateDiscussionInput
  ): Promise<{ id: string; url: string }> {
    const query = `
      mutation CreateDiscussion($repositoryId: ID!, $input: CreateDiscussionInput!) {
        createDiscussion(repositoryId: $repositoryId, input: $input) {
          discussion {
            id
            url
          }
        }
      }
    `;

    // First, get the repository ID
    const repoQuery = `
      query GetRepoId($owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          id
        }
      }
    `;

    const repoData = await this.query<{
      repository: { id: string };
    }>(repoQuery, { owner, repo });

    const data = await this.query<{
      createDiscussion: { discussion: { id: string; url: string } };
    }>(query, {
      repositoryId: repoData.repository.id,
      input,
    });

    return data.createDiscussion.discussion;
  }

  async addComment(discussionId: string, body: string): Promise<{ id: string }> {
    const query = `
      mutation AddComment($input: AddDiscussionCommentInput!) {
        addDiscussionComment(input: $input) {
          comment {
            id
          }
        }
      }
    `;

    const data = await this.query<{
      addDiscussionComment: { comment: { id: string } };
    }>(query, {
      input: {
        discussionId,
        body,
      },
    });

    return data.addDiscussionComment.comment;
  }

  async getCategories(owner: string, repo: string): Promise<Array<{
    id: string;
    name: string;
    emoji: string;
    description: string;
  }>> {
    const query = `
      query GetCategories($owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          discussionCategories(first: 10) {
            nodes {
              id
              name
              emoji
              description
            }
          }
        }
      }
    `;

    const data = await this.query<{
      repository: {
        discussionCategories: {
          nodes: Array<{ id: string; name: string; emoji: string; description: string }>;
        };
      };
    }>(query, { owner, repo });

    return data.repository.discussionCategories.nodes;
  }

  async searchDiscussions(
    owner: string,
    repo: string,
    query: string,
    first: number = 10
  ): Promise<Discussion[]> {
    const searchQuery = `
      query SearchDiscussions($query: String!, $first: Int!) {
        search(query: $query, type: DISCUSSION, first: $first) {
          nodes {
            ... on Discussion {
              id
              title
              body
              createdAt
              updatedAt
              url
              author {
                login
                avatarUrl
              }
              category {
                name
                emoji
              }
              comments {
                totalCount
              }
              upvoteCount
            }
          }
        }
      }
    `;

    const data = await this.query<{
      search: { nodes: any[] };
    }>(searchQuery, {
      query: `${query} repo:${owner}/${repo} type:discussion`,
      first,
    });

    return data.search.nodes.map(node => ({
      id: node.id,
      title: node.title,
      body: node.body,
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      url: node.url,
      author: node.author,
      category: node.category,
      commentCount: node.comments.totalCount,
      upvotes: node.upvoteCount,
    }));
  }

  async closeDiscussion(discussionId: string): Promise<{ id: string }> {
    const query = `
      mutation CloseDiscussion($input: CloseDiscussionInput!) {
        closeDiscussion(input: $input) {
          discussion {
            id
          }
        }
      }
    `;

    const data = await this.query<{
      closeDiscussion: { discussion: { id: string } };
    }>(query, {
      input: { discussionId },
    });

    return data.closeDiscussion.discussion;
  }

  async updateDiscussion(
    discussionId: string,
    updates: {
      title?: string;
      body?: string;
      categoryId?: string;
    }
  ): Promise<{ id: string }> {
    const query = `
      mutation UpdateDiscussion($input: UpdateDiscussionInput!) {
        updateDiscussion(input: $input) {
          discussion {
            id
          }
        }
      }
    `;

    const data = await this.query<{
      updateDiscussion: { discussion: { id: string } };
    }>(query, {
      input: {
        discussionId,
        ...updates,
      },
    });

    return data.updateDiscussion.discussion;
  }
}
