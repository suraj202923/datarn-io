'use client';

/**
 * Create Discussion Form (Client Component)
 * Allows users to create new discussions
 * 
 * Usage:
 * import CreateDiscussionForm from '@/components/CreateDiscussionForm';
 * 
 * <CreateDiscussionForm 
 *   owner="your-org" 
 *   repo="your-repo"
 *   onSuccess={() => console.log('Created!')}
 * />
 */

import { useState, useEffect } from 'react';
import { GitHubDiscussionsClient } from '@/lib/github-discussions';
import { getGitHubToken } from '@/lib/github-discussions-utils';

interface CreateDiscussionFormProps {
  owner: string;
  repo: string;
  onSuccess?: (discussionUrl: string) => void;
  onError?: (error: string) => void;
}

interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export default function CreateDiscussionForm({
  owner,
  repo,
  onSuccess,
  onError,
}: CreateDiscussionFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load categories on mount
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setCategoriesLoading(true);
      const token = getGitHubToken();
      const client = new GitHubDiscussionsClient(token);
      const cats = await client.getCategories(owner, repo);
      setCategories(cats);
      if (cats.length > 0) {
        setCategoryId(cats[0].id);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load categories';
      setError(message);
      onError?.(message);
    } finally {
      setCategoriesLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    if (!body.trim()) {
      setError('Body is required');
      return;
    }

    if (!categoryId) {
      setError('Category is required');
      return;
    }

    try {
      setLoading(true);
      const token = getGitHubToken();
      const client = new GitHubDiscussionsClient(token);
      const result = await client.createDiscussion(owner, repo, {
        categoryId,
        title: title.trim(),
        body: body.trim(),
      });

      // Reset form
      setTitle('');
      setBody('');

      onSuccess?.(result.url);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create discussion';
      setError(message);
      onError?.(message);
    } finally {
      setLoading(false);
    }
  };

  if (categoriesLoading) {
    return <div className="text-center py-4 text-gray-500">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={loading}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.emoji} {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's your discussion about?"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={loading}
          maxLength={200}
        />
        <p className="text-xs text-gray-500 mt-1">{title.length}/200</p>
      </div>

      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Provide details for your discussion..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
          rows={6}
          disabled={loading}
        />
        <p className="text-xs text-gray-500 mt-1">Markdown supported</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        {loading ? 'Creating...' : 'Create Discussion'}
      </button>
    </form>
  );
}
