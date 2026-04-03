/**
 * Discussions List Component (Server Component)
 * Fetches and displays GitHub discussions
 * 
 * Usage in page:
 * import DiscussionsList from '@/components/DiscussionsList';
 * 
 * export default function Page() {
 *   return <DiscussionsList owner="your-org" repo="your-repo" />;
 * }
 */

import { fetchDiscussions, formatDate, truncateBody } from '@/lib/github-discussions-utils';
import Image from 'next/image';

interface DiscussionsListProps {
  owner: string;
  repo: string;
  limit?: number;
}

export default async function DiscussionsList({
  owner,
  repo,
  limit = 10,
}: DiscussionsListProps) {
  try {
    const discussions = await fetchDiscussions(owner, repo);
    const limited = discussions.slice(0, limit);

    if (limited.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <p>No discussions yet. Be the first to start one!</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {limited.map((discussion) => (
          <div
            key={discussion.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition-colors"
          >
            <div className="flex gap-4">
              {discussion.author.avatarUrl && (
                <Image
                  src={discussion.author.avatarUrl}
                  alt={discussion.author.login}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 break-words">
                      <a
                        href={discussion.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-600 transition-colors"
                      >
                        {discussion.title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      by{' '}
                      <a
                        href={`https://github.com/${discussion.author.login}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline"
                      >
                        {discussion.author.login}
                      </a>
                    </p>
                  </div>
                  <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded whitespace-nowrap">
                    {discussion.category.emoji} {discussion.category.name}
                  </span>
                </div>

                <p className="text-gray-700 mt-2 text-sm line-clamp-2">
                  {truncateBody(discussion.body, 200)}
                </p>

                <div className="flex gap-4 mt-3 text-xs text-gray-500">
                  <span>💬 {discussion.commentCount} comment{discussion.commentCount !== 1 ? 's' : ''}</span>
                  <span>{formatDate(discussion.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error loading discussions:', error);
    return (
      <div className="text-center py-8 text-red-500">
        <p>Failed to load discussions. Please check your GitHub token.</p>
        <p className="text-sm mt-2 text-gray-600">
          Make sure NEXT_PUBLIC_GITHUB_TOKEN is set in your environment variables.
        </p>
      </div>
    );
  }
}
