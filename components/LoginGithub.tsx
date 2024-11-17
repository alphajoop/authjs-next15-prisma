import { login } from '@/app/actions/auth';
import { Github } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function LoginGithub() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      onClick={() => login('github')}
      className="mx-auto flex w-full items-center font-geistsans"
    >
      <Github className="h-12 w-12" />{' '}
      {pending ? 'Loading...' : 'Login with Github'}
    </Button>
  );
}
