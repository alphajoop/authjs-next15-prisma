'use client';

import { login } from '@/app/actions/auth';
import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function LoginOptions() {
  const [loadingProvider, setLoadingProvider] = useState<
    'github' | 'google' | null
  >(null);

  const handleOAuthLogin = async (provider: 'github' | 'google') => {
    setLoadingProvider(provider);
    try {
      await login(provider);
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        variant="outline"
        onClick={() => handleOAuthLogin('github')}
        disabled={!!loadingProvider}
        className="w-full"
      >
        {loadingProvider === 'github' ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Github className="mr-2 h-4 w-4" />
        )}
        GitHub
      </Button>
      <Button
        variant="outline"
        onClick={() => handleOAuthLogin('google')}
        disabled={!!loadingProvider}
        className="w-full"
      >
        {loadingProvider === 'google' ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Google />
        )}
        Google
      </Button>
    </div>
  );
}
