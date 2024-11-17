'use client';
import { logout } from '@/app/actions/auth';
import { Button } from './ui/button';

export default function Logout() {
  return <Button onClick={() => logout()}>Logout</Button>;
}
