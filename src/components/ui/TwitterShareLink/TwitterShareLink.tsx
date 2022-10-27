import { css, Theme } from '@emotion/react';
import { generateParams } from './utils';

const linkStyle = (theme: Theme) => css`
  display: inline-block;
  padding: ${theme.spacing(0, 2)};
  border-radius: 1rem;
  background-color: var(--color-tw);
  color: var(--color-white);
`;

export type TwitterShareLinkProps = {
  url: string;
  text?: string;
  via?: string;
  related?: string;
  hashtags?: string;
};
export const TwitterShareLink: React.FC<TwitterShareLinkProps> = ({
  url,
  ...others
}) => {
  return (
    <a
      css={linkStyle}
      href={`http://twitter.com/share?url=${url}${generateParams(others)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet
    </a>
  );
};
