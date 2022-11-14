import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { LEAENING_PATH } from '@/constants/path';

const pagerStyle = (theme: Theme) => css`
  display: flex;
  margin-top: ${theme.spacing(12)};
`;
const linkStyle = css`
  display: inline-block;
  text-decoration: underline;
  &[data-to='prev'] {
    margin-left: 0;
    margin-right: auto;
  }
  &[data-to='next'] {
    margin-left: auto;
    margin-right: 0;
  }
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
    }
  }
`;

type Props = {
  currentPagePath: string;
};
export const LearningPager: React.FC<Props> = ({ currentPagePath }) => {
  const current = currentPagePath.replace('/learning/', '');
  const currentIndex = LEAENING_PATH.findIndex((v) => v.path === current);
  const pathLastIndex = LEAENING_PATH.length - 1;

  return (
    <div css={pagerStyle}>
      {currentIndex < pathLastIndex && (
        <Link href={LEAENING_PATH[currentIndex + 1]?.path} passHref>
          <a css={linkStyle} data-to="prev">
            前の記事へ
          </a>
        </Link>
      )}
      {currentIndex !== 0 && (
        <Link href={LEAENING_PATH[currentIndex - 1]?.path} passHref>
          <a css={linkStyle} data-to="next">
            次の記事へ
          </a>
        </Link>
      )}
    </div>
  );
};
