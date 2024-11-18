import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

function CustomLink({
  href,
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center underline"
    >
      {children}
      <ExternalLink className="ml-1" size={18} />
    </Link>
  );
}

export default CustomLink;
