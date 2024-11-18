'use client';
import { registerWithCredentials } from '@/app/actions/auth';
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

export default function SignUp() {
  const [state, action] = useActionState(registerWithCredentials, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="grid min-h-screen items-center justify-center font-geistsans">
      <Card className="container mx-auto w-72 md:w-[350px]">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Sign up for a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" />
              </div>
              {state?.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name}</p>
              )}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="text"
                />
              </div>
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
              )}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              {state?.errors?.password && (
                <div className="text-sm text-red-500">
                  <p>Password must:</p>
                  <ul className="list-inside list-disc">
                    {state.errors.password.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Button disabled={pending} type="submit">
                {pending ? 'Loading...' : 'Create Account'}
              </Button>

              <p className="text-start text-sm">
                Already have an account?{' '}
                <Link href="/signin" className="text-blue-500 hover:underline">
                  Sign in
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
