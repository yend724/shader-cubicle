import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { TwitterShareLink } from '@/components/ui/TwitterShareLink';
import { LearningHead } from '@/components/feature/learning/LearningHead';
import { LearningDate } from '@/components/feature/learning/LearningDate';
import { SITE_DATA } from '@/constants/site';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: var(--window-h, 100vh);
`;
const mainStyle = (theme: Theme) => css`
  flex-grow: 1;
  padding: ${theme.spacing(8, 4, 12)};
  overflow-x: hidden;
`;
const articleStyle = css`
  width: 100%;
  max-width: var(--max-width-main);
  margin-inline: auto;
`;
const containerStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;
  margin-top: ${theme.spacing(16)};
`;
const infoStyle = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${theme.spacing(4)};
  margin-top: ${theme.spacing(4)};
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: ${theme.spacing(4)};
`;
const titleStyle = css`
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
`;

type Props = {
  meta: {
    title: string;
    published: string;
    updated?: string;
    author: string;
    tag: string[];
  };
  title: string;
  children: React.ReactNode;
};
export const LearningLayout: React.FC<Props> = ({ children, meta }) => {
  const router = useRouter();
  const { title, published, updated } = meta;
  const twitterShareUrl = `https://${SITE_DATA.domain}${router.pathname}`;
  const twitterShareText = encodeURI(`${title} | ${SITE_DATA.siteName}`);

  return (
    <div css={layoutStyle} data-page={'learning'}>
      <LearningHead
        title={`${title} | ${SITE_DATA.siteName}`}
        url={router.pathname}
      />
      <Header />
      <main css={mainStyle}>
        <article css={articleStyle}>
          <h1 css={titleStyle}>{title}</h1>
          <div css={infoStyle}>
            <LearningDate published={published} updated={updated} />
            <TwitterShareLink
              url={twitterShareUrl}
              text={twitterShareText}
              via="yend724"
            />
          </div>
          <div css={containerStyle} data-written-by="markdown">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
