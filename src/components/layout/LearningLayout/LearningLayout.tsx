import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { TwitterShareLink } from '@/components/ui/TwitterShareLink';
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
const mainStyle = (theme: Theme) => css`
  flex-grow: 1;
  padding: ${theme.spacing(8, 4)};
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
  margin: 4rem auto 0;
`;
const infoStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(4)};
  flex-wrap: wrap;
`;
const titleStyle = (theme: Theme) => css`
  margin-top: ${theme.spacing(4)};
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
`;
const shareStyle = css`
  display: inline-block;
  /* color: var(--color-tw); */
  font-weight: var(--font-weight-bold);
`;

type Props = {
  meta: {
    title: string;
    published: string;
    author: string;
    tag: string[];
  };
  title: string;
  children: React.ReactNode;
};
export const LearningLayout: React.FC<Props> = ({ children, meta }) => {
  const router = useRouter();
  const { title, published } = meta;
  const [year, month, date] = published.split('-');
  const formattedPublished = `${year}年${month}月${date}日`;
  const twitterShareUrl = `https://${SITE_DATA.domain}${router.pathname}`;

  return (
    <div css={layoutStyle} data-page={'learning'}>
      <LearningHead
        title={`${title} | ${SITE_DATA.siteName}`}
        url={router.pathname}
      />
      <Header />
      <div css={innerStyle}>
        <main css={mainStyle}>
          <article css={articleStyle}>
            <div css={infoStyle}>
              <span>
                <time dateTime={published}>{formattedPublished}</time>公開
              </span>
              <span css={shareStyle}>
                <TwitterShareLink
                  url={twitterShareUrl}
                  text={title}
                  via="yend724"
                />
              </span>
            </div>
            <h1 css={titleStyle}>{title}</h1>
            <div css={containerStyle} data-written-by="markdown">
              {children}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};
