import 'destyle.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import '@/styles/base.scss';
import '@/styles/markdown.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { StyleThemeProvider } from '@/components/functional/StyleThemeProvider';
import { GA_TRACKING_ID, pageview } from '@/utils/ga';
import type { AppPropsWithLayout } from 'next/app';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);
  const router = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return getLayout(
    <StyleThemeProvider>
      <Component {...pageProps} />
    </StyleThemeProvider>
  );
};
export default MyApp;
