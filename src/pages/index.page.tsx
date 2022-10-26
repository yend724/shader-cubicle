import type { NextPageWithLayout } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { TopLayout } from '@/components/layout/TopLayout';
import { SITE_DATA } from '@/constants/site';
import { LEAENING_PATH } from '@/constants/path';

const mainStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing(8, 4)};
  max-width: var(--max-width-main);
  margin-right: auto;
  margin-left: auto;
  padding: ${theme.spacing(8, 4)};
  ${theme.mq('sm')} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${theme.mq('md')} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const articleStyle = css`
  display: inline-block;
`;
const linkStyle = css`
  display: block;
  transition: 0.2s var(--ease-out-5);
  [data-hover-shadow='linkStyle'] {
    box-shadow: none;
    transition: 0.2s var(--ease-out-5);
  }
  @media (hover: hover) {
    &:hover {
      [data-hover-shadow='linkStyle'] {
        box-shadow: var(--shadow-2);
      }
      transform: scale(1.05);
    }
  }
`;
const imgContinerStyle = css`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;
const labelStyle = (theme: Theme) => css`
  margin-top: ${theme.spacing(2)};
  font-weight: var(--font-weight-bold);
  text-align: center;
`;
const labelTextStyle = css`
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
`;

const Home: NextPageWithLayout = () => {
  return (
    <div css={mainStyle}>
      {LEAENING_PATH.map(post => {
        const { path, title } = post;
        return (
          <article key={path} css={articleStyle}>
            <Link href={`/learning/${path}`} passHref>
              <a css={linkStyle}>
                <div css={imgContinerStyle} data-hover-shadow="linkStyle">
                  <Image
                    src={`/img/thumb/${path}-thumb.png`}
                    layout="fill"
                    alt=""
                  />
                </div>
                <h2 css={labelStyle}>
                  <span css={labelTextStyle}>{title}</span>
                </h2>
              </a>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <TopLayout title={SITE_DATA.siteName}>{page}</TopLayout>;
};

export default Home;
