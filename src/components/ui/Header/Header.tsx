import { createElement } from 'react';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { SITE_DATA } from '@/constants/site';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-divider);
  font-weight: var(--font-weight-bold);
  z-index: 1000;
`;
const titleStyle = css`
  font-size: 1.25rem;
`;
const socialStyle = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(1)};
`;

const iconLinkStyle = css`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  font-weight: 600;
`;

export type HeaderProps = {
  isHome?: boolean;
};
export const Header: React.FC<HeaderProps> = ({ isHome = false }) => {
  return (
    <header css={headerStyle}>
      {isHome ? (
        <h1 css={titleStyle}>{SITE_DATA.siteName}</h1>
      ) : (
        <Link href="/" passHref>
          <a>
            <p css={titleStyle}>{SITE_DATA.siteName}</p>
          </a>
        </Link>
      )}
      <div css={socialStyle}>
        <a href={SITE_DATA.twitter} css={iconLinkStyle}>
          Twitter
        </a>
        <a href={SITE_DATA.github} css={iconLinkStyle}>
          GitHub
        </a>
      </div>
    </header>
  );
};
