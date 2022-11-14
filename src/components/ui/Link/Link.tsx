import NextLink from 'next/link';
import { css } from '@emotion/react';
import { isExternalLink } from './utils';

const linkStyle = css`
  &[data-td-ul='true'] {
    text-decoration: underline;
  }
`;
export type LinkProps = {
  underline?: boolean;
  href: string;
  children: React.ReactNode;
};
export const Link: React.FC<LinkProps> = ({ href, underline, children }) => {
  if (isExternalLink(href)) {
    return (
      <a
        css={linkStyle}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        data-td-ul={underline}
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} passHref>
      <a css={linkStyle} data-td-ul={underline}>
        {children}
      </a>
    </NextLink>
  );
};
