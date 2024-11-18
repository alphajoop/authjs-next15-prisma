'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

export default function Logout() {
  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: '/',
      });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Button onClick={handleLogout} className="flex items-center gap-2">
      <LogOut className="h-5 w-5" />
      <span>Logout</span>
    </Button>
  );
}
