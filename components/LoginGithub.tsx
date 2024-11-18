'use client';

import { Github, Loader } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Button } from './ui/button';

export default function LoginGithub() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await signIn('github', {
        callbackUrl: '/',
      });
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleGithubLogin}
      variant="outline"
      className="flex w-full items-center justify-center gap-2"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          <Github className="h-5 w-5" />
          <span>Continue with GitHub</span>
        </>
      )}
    </Button>
  );
}
