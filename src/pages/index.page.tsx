import type { NextPageWithLayout } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { TopLayout } from '@/components/layout/TopLayout';
import { SITE_DATA } from '@/constants/site';
import { LEAENING_PATH } from '@/constants/path';

const mainStyle = (theme: Theme) => css`
  max-width: var(--max-width-main);
  margin-right: auto;
  margin-left: auto;
  padding: ${theme.spacing(8, 4)};
`;
const itemStyle = css`
  display: inline-block;
`;
const imgContinerStyle = css`
  position: relative;
  width: 200px;
  height: 200px;
`;
const labelStyle = (theme: Theme) => css`
  margin-top: ${theme.spacing(2)};
  font-weight: var(--font-weight-bold);
  text-align: center;
`;

const Home: NextPageWithLayout = () => {
  return (
    <div css={mainStyle}>
      {LEAENING_PATH.map(path => {
        return (
          <article key={path.href} css={itemStyle}>
            <Link href={`/learning/${path.href}`} passHref>
              <a>
                <div css={imgContinerStyle}>
                  <Image
                    src="/img/thumb/preparation-thumb.png"
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <h2 css={labelStyle}>{path.label}</h2>
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
