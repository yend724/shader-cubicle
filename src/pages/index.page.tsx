import type { NextPageWithLayout } from 'next';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { TopLayout } from '@/components/layout/TopLayout';
import { SITE_DATA } from '@/constants/site';
import { LEAENING_PATH } from '@/constants/path';
import { getAllPahtMaps } from '@/interfaces/api';
import { LearningDate } from '@/components/feature/learning/LearningDate';

const containerStyle = css`
  max-width: var(--max-width-main);
  margin-inline: auto;
`;
const listStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
`;
const itemStyle = css`
  display: block;
`;
const tagsStyle = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
  margin-top: ${theme.spacing(2)};
`;
const tagStyle = (theme: Theme) => css`
  padding: ${theme.spacing(0, 2)};
  border-radius: 4px;
  background-color: var(--indigo-9);
  color: var(--color-white);
  font-size: 0.75rem;
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
      <div css={listStyle}>
        {LEAENING_PATH.map(p => {
          const { path } = p;
          const { meta } = pathMaps[path];
          const { title, tag, published, updated } = meta;
          const formattedPublishedDate = published.replace(/-/g, '.');
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
              <ul css={tagsStyle}>
                {tag.map(t => (
                  <li key={t} css={tagStyle}>
                    {t}
                  </li>
                ))}
              </ul>
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
