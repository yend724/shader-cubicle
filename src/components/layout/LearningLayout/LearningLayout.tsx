import { css } from '@emotion/react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { LearningHead } from '@/components/feature/learning/LearningHead';
import { SITE_DATA } from '@/constants/site';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: var(--window-h, 100vh);
`;
const innerStyle = css`
  flex-grow: 1;
  display: flex;
`;
const mainStyle = css`
  flex-grow: 1;
  padding: 2rem 1rem;
  overflow-x: hidden;
`;
const articleStyle = css`
  width: 100%;
  max-width: var(--max-width-main);
  margin: 0 auto;
`;
const containerStyle = css`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};
export const LearningLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <LearningHead title={`${title} | ${SITE_DATA.siteName}`} url="path" />
      <div css={layoutStyle} data-page={'learning'}>
        <Header />
        <div css={innerStyle}>
          <main css={mainStyle}>
            <article css={articleStyle}>
              <div css={containerStyle} data-written-by="markdown">
                {children}
              </div>
            </article>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
