import 'destyle.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import '@/styles/base.scss';
import '@/styles/markdown.scss';
import type { AppPropsWithLayout } from 'next/app';
import { StyleThemeProvider } from '@/components/functional/StyleThemeProvider';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(
    <StyleThemeProvider>
      <Component {...pageProps} />
    </StyleThemeProvider>
  );
};
export default MyApp;
