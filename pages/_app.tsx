import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';



import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';



import '@/styles/globals.css';


const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'Chat-TLDR';
const APP_DEFAULT_TITLE = 'Chat-TLDR Ai Assistant';
const APP_TITLE_TEMPLATE = '%s - App';
const APP_DESCRIPTION =
  'Chat TLDR helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload ⚡.';
const Open_Graph = 'https://i.ibb.co/khMJdL2/Screenshot-313.png';

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="mask-icon"
          href="../../public/AppImages/ios/144.png"
          color="#000000"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://chat-tldr.onrender.com" />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content={Open_Graph} />
        <meta name="twitter:creator" content="@ParadoxBd" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:url" content="https://chat-tldr.onrender.com" />
        <meta property="og:image" content={Open_Graph} />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
          sizes="512x512"
        />
      </Head>
      <div className={inter.className}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default appWithTranslation(App);
