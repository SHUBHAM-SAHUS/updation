'use client';
import Head from 'next/head';
import { Poppins, DM_Serif_Display } from 'next/font/google';
import '../app/globals.scss';
import '../app/custom.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';
import ClientSideProviders from '@/context/ClientSideProviders';
import { childrenProps } from '@/utils/interfaces';

// Define the font configurations
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
});

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Zevo-Application',
//   description: '',
//   icons: {
//     icon: '', // Use the provided online image URL for testing
//   },
// };

const RootLayout: React.FC<childrenProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="website" name="og:type" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={`${poppins.className} ${dmSerif.className}`}>
        <ClientSideProviders>{children}</ClientSideProviders>
      </body>
    </html>
  );
};

export default RootLayout;
