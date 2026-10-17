import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Provous — Private payments for AI agents', template: '%s · Provous' },
  description: 'A privacy wallet designed for AI agents to make private payments on Zcash. Read the docs and follow the project as its tool contract takes shape.',
  openGraph: {
    title: 'Provous — Private payments for AI agents',
    description: 'Private payment infrastructure for autonomous software.',
    siteName: 'Provous',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><RootProvider>{children}</RootProvider></body>
    </html>
  );
}
