'use client';

import { useState } from 'react';
import { HygraphConfig } from '@/lib/types';
import { X } from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: HygraphConfig) => void;
  initialConfig?: HygraphConfig;
}

export function ConfigModal({
  isOpen,
  onClose,
  onSave,
  initialConfig,
}: ConfigModalProps) {
  const [endpoint, setEndpoint] = useState(initialConfig?.endpoint || '');
  const [authToken, setAuthToken] = useState(initialConfig?.authToken || '');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!endpoint.trim()) {
      setError('Please enter your Hygraph endpoint');
      return;
    }
    if (!authToken.trim()) {
      setError('Please enter your auth token');
      return;
    }

    if (!endpoint.includes('hygraph.com')) {
      setError('Endpoint should be a valid Hygraph URL');
      return;
    }

    onSave({ endpoint: endpoint.trim(), authToken: authToken.trim() });
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Configure Hygraph API</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Hygraph Endpoint
            </label>
            <input
              type="text"
              placeholder="https://api-xx.hygraph.com/graphql"
              value={endpoint}
              onChange={(e) => {
                setEndpoint(e.target.value);
                setError('');
              }}
              className="w-full px-3 py-2 bg-[#0F0F0F] border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Auth Token
            </label>
            <input
              type="password"
              placeholder="Your permanent auth token"
              value={authToken}
              onChange={(e) => {
                setAuthToken(e.target.value);
                setError('');
              }}
              className="w-full px-3 py-2 bg-[#0F0F0F] border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-white"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900 border border-red-700 rounded text-red-200 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-white hover:bg-gray-100 text-black font-medium rounded transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
