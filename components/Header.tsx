import { auth } from '@/auth';
import Logout from '@/components/Logout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'RSC Example',
    href: '/server-example',
    description: 'Protecting React Server Component.',
  },
  {
    title: 'Middleware Example',
    href: '/middleware',
    description: ' Using Middleware to protect pages & APIs.',
  },
  {
    title: 'Route Handler Example',
    href: '/api-example',
    description: 'Getting the session inside an API Route.',
  },
];

export default async function Header() {
  const session = await auth();
  return (
    <header className="fixed left-0 right-0 top-0 bg-white px-4 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <nav className="container mx-auto flex h-16 max-w-3xl items-center justify-between border-b px-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Home"
              width="32"
              height="32"
              className="min-w-8"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Server Side</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {!session?.user ? (
          <Button asChild>
            <Link href={'login'}>Sign In</Link>
          </Button>
        ) : (
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2 text-sm">
              {session?.user?.name}
              {session?.user?.image && (
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image || ''}
                    alt={`${session?.user?.name} avatar`}
                  />
                  <AvatarFallback>{session?.user?.name}</AvatarFallback>
                </Avatar>
              )}
            </div>
            <Logout />
          </div>
        )}
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus:bg-zinc-100 focus:text-zinc-800',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-zinc-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
