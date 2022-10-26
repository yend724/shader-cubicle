import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { SITE_DATA } from '@/constants/site';

const headerStyle = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(0.25rem);
  border-bottom: 1px solid var(--color-divider);
  font-weight: var(--font-weight-bold);
  z-index: 1000;
`;
const titleStyle = css`
  font-size: 1.25rem;
  text-shadow: 1px 1px 0 var(--color-bg), -1px -1px 0 var(--color-bg),
    -1px 1px 0 var(--color-bg), 1px -1px 0 var(--color-bg);
`;
const socialStyle = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(1)};
`;

const iconLinkStyle = css`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  font-weight: 600;
  text-shadow: 1px 1px 0 var(--color-bg), -1px -1px 0 var(--color-bg),
    -1px 1px 0 var(--color-bg), 1px -1px 0 var(--color-bg);
`;
export const Header = () => {
  return (
    <header css={headerStyle}>
      <Link href="/" passHref>
        <a>
          <h1 css={titleStyle}>{SITE_DATA.siteName}</h1>
        </a>
      </Link>
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
