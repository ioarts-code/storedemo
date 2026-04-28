'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface ConfigDialogProps {
  isOpen: boolean;
  onSave: (endpoint: string, token: string) => void;
  onClose: () => void;
}

export function ConfigDialog({ isOpen, onSave, onClose }: ConfigDialogProps) {
  const [endpoint, setEndpoint] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!endpoint || !token) {
      alert('Please enter both endpoint and token');
      return;
    }
    setLoading(true);
    onSave(endpoint, token);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1A1A1A] rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Configure Hygraph API</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Hygraph Endpoint URL
            </label>
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="https://api-eu-west-2.hygraph.com/graphql"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Auth Token
            </label>
            <textarea
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your Hygraph permanent auth token"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white font-mono text-xs"
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Configuration'}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4">
          Your configuration is saved locally and will persist across sessions.
        </p>
      </div>
    </div>
  );
}
