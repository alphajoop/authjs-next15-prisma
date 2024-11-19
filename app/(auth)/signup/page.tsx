'use client';

import { registerWithCredentials } from '@/app/actions/auth';
import LoginOptions from '@/components/LoginOptions';
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
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating Account
        </div>
      ) : (
        'Create Account'
      )}
    </Button>
  );
}

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, action] = useActionState(registerWithCredentials, undefined);

  const handleSubmit = async (formData: FormData) => {
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    action(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 font-geistsans md:mt-16">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
          <CardDescription>Sign up to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-10"
              />
              {state?.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
              />
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Create a password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10"
              />
              {state?.errors?.password && (
                <div className="text-sm">
                  <p>Password must:</p>
                  <ul className="list-inside list-disc text-red-500">
                    {state.errors.password.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <SubmitButton />
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2">Or sign up with</span>
              </div>
            </div>
            <LoginOptions />
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
