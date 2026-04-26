'use client';

import { useState } from 'react';
import { HygraphConfig } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertCircle, Check, ExternalLink } from 'lucide-react';

interface ConfigPanelProps {
  onConfigSaved: (config: HygraphConfig) => void;
  initialConfig?: HygraphConfig;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConfigPanel({
  onConfigSaved,
  initialConfig,
  isOpen,
  onOpenChange,
}: ConfigPanelProps) {
  const [endpoint, setEndpoint] = useState(initialConfig?.endpoint || '');
  const [authToken, setAuthToken] = useState(initialConfig?.authToken || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setError('');
    setSuccess(false);

    if (!endpoint.trim()) {
      setError('Please enter a Hygraph API endpoint');
      return;
    }

    if (!endpoint.startsWith('http')) {
      setError('Endpoint must be a valid URL');
      return;
    }

    try {
      setLoading(true);
      const config: HygraphConfig = {
        endpoint: endpoint.trim(),
        authToken: authToken.trim() || undefined,
      };

      // Validate by attempting a simple request
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        body: JSON.stringify({
          query: '{ __typename }',
        }),
      });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();
      if (data.errors) {
        throw new Error(data.errors[0]?.message || 'Invalid endpoint');
      }

      // Save to localStorage
      localStorage.setItem('hygraph-config', JSON.stringify(config));

      setSuccess(true);
      onConfigSaved(config);
      setTimeout(() => {
        onOpenChange(false);
        setSuccess(false);
      }, 1500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to validate endpoint'
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Configure Hygraph</CardTitle>
          <CardDescription>
            Enter your Hygraph API endpoint and optional authentication token
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              API Endpoint
            </label>
            <Input
              placeholder="https://api-eu-central-1.hygraph.com/content/..."
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Auth Token (Optional)
            </label>
            <Input
              type="password"
              placeholder="Your Hygraph auth token"
              value={authToken}
              onChange={(e) => setAuthToken(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && (
            <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {success && (
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-600">Configuration saved!</p>
            </div>
          )}

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-medium text-blue-900 mb-2">Required Hygraph Models</p>
            <p className="text-xs text-blue-800 mb-3">
              Your Hygraph schema must include these models:
            </p>
            <ul className="text-xs text-blue-800 space-y-1 mb-3 font-mono">
              <li>• Service (with: name, description, category, tags, url, icon, image)</li>
              <li>• Category (with: name, slug)</li>
              <li>• Tag (with: name, slug)</li>
            </ul>
            <p className="text-xs text-blue-800 mb-2">
              Check the SCHEMA_SETUP.md file in your project for step-by-step instructions.
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={loading}
              className="flex-1"
            >
              {loading ? 'Validating...' : 'Save Config'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
