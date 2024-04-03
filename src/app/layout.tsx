import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { Provider } from './Provider';

import './globals.css';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Article.io',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
