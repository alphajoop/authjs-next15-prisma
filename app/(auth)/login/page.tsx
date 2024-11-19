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
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        'Sign In'
      )}
    </Button>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, action] = useActionState(LoginWithCredentials, undefined);

  const handleSubmit = async (formData: FormData) => {
    formData.set('email', email);
    formData.set('password', password);
    action(formData);
    setPassword('');
  };

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
          <form action={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {state?.errors?.password && (
                  <p className="text-sm text-red-500">
                    {state.errors.password}
                  </p>
                )}
              </div>
              <SubmitButton />
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
