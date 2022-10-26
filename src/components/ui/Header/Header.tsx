import Link from 'next/link';
import { css } from '@emotion/react';
import { SITE_DATA } from '@/constants/site';

const headerStyle = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(1rem);
  font-weight: var(--font-weight-bold);
  border-bottom: 1px solid var(--color-divider);
  z-index: 1000;
`;
const titleStyle = css`
  font-size: 1.25rem;
`;
const iconLinkStyle = css`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  font-weight: 600;
`;
export const Header = () => {
  return (
    <header css={headerStyle}>
      <Link href="/" passHref>
        <a>
          <h1 css={titleStyle}>{SITE_DATA.siteName}</h1>
        </a>
      </Link>
      <div>
        <a href={SITE_DATA.github} css={iconLinkStyle}>
          GitHub
        </a>
      </div>
    </header>
  );
};
