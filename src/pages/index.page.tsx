import type { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { TopLayout } from '@/components/layout/TopLayout';
import { Tag } from '@/components/ui/Tag';
import { LearningDate } from '@/components/feature/learning/LearningDate';
import { SITE_DATA } from '@/constants/site';
import { LEAENING_PATH } from '@/constants/path';
import { getAllPahtMaps } from '@/interfaces/api';

const containerStyle = css`
  max-width: var(--max-width-main);
  margin-inline: auto;
`;
const labelStyle = css`
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
`;
const listStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
  margin-top: ${theme.spacing(8)};
`;
const itemStyle = css`
  display: block;
`;
const tagContainerStyle = (theme: Theme) => css`
  margin-top: ${theme.spacing(2)};
`;
const linkStyle = css`
  display: inline-block;
  text-decoration: underline;
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
    }
  }
`;
const titleStyle = css`
  font-size: var(--size-6);
  font-weight: var(--font-weight-bold);
`;

type Props = {
  pathMaps: Record<
    string,
    {
      path: string;
      meta: {
        title: string;
        published: string;
        updated?: string;
        author: string;
        tag: string[];
        draft?: boolean;
        order?: number;
      };
    }
  >;
};
const Home: NextPageWithLayout<Props> = ({ pathMaps }) => {
  return (
    <div css={containerStyle}>
      <p css={labelStyle}>Latest</p>
      <div css={listStyle}>
        {LEAENING_PATH.map(p => {
          const { path } = p;
          const { meta } = pathMaps[path];
          const { title, tag, published, updated } = meta;
          return (
            <article key={path} css={itemStyle}>
              <LearningDate published={published} updated={updated} />
              <div>
                <Link href={`/learning/${path}`} passHref>
                  <a css={linkStyle}>
                    <h2 css={titleStyle}>{title}</h2>
                  </a>
                </Link>
              </div>
              <div css={tagContainerStyle}>
                <Tag tag={tag} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <TopLayout title={SITE_DATA.siteName}>{page}</TopLayout>;
};

export default Home;

export const getStaticProps = async () => {
  const pathMaps = await getAllPahtMaps();
  return {
    props: pathMaps,
  };
};
