'use client';

import { LoginWithCredentials } from '@/app/actions/auth';
import LoginGithub from '@/components/LoginGithub';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export default function SignIn() {
  const [state, action] = useActionState(LoginWithCredentials, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="grid min-h-screen items-center justify-center font-geistsans">
      <Card className="container mx-auto w-72 md:w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Welcome back! Please enter your credentials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                {state?.errors?.email && (
                  <p className="text-sm text-red-500">{state.errors.email}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                {state?.errors?.password && (
                  <p className="text-sm text-red-500">
                    {state.errors.password}
                  </p>
                )}
              </div>
              <Button disabled={pending} type="submit">
                {pending ? 'Loading...' : 'Sign In'}
              </Button>
              {state?.error && (
                <p className="text-sm text-red-500">{state.error}</p>
              )}
              <p className="text-start text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
        <div className="mx-6 mb-6">
          <LoginGithub />
        </div>
      </Card>
    </div>
  );
}
