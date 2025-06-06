import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './Providers';
import { PageTransitionEffect } from '../components/common/PageTransitionEffect';

export const metadata: Metadata = {
  title: 'ALFA',
  description: 'Alfa - Housing Marketplace',
};

const yekanFont = localFont({
  src: [
    {
      path: '../../public/fonts/IRANYekanXVFaNumVF.ttf',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        dir="rtl"
        className={`${yekanFont.className} overflow-x-hidden`}
      >
        <Providers>
          {/* <PageTransitionEffect> */}
            {children}

            <div id="modal-root"></div>
          {/* </PageTransitionEffect> */}
        </Providers>
      </body>
    </html>
  );
}
