import { css } from '@emotion/react';
import { SITE_DATA } from '@/constants/site';

const Now = new Date();
const NowYear = Now.getFullYear();

const footerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
`;
const textStyle = css`
  font-size: 0.75rem;
`;
export const Footer = () => {
  return (
    <footer css={footerStyle}>
      <small css={textStyle}>
        &copy;{NowYear} {SITE_DATA.author}
      </small>
    </footer>
  );
};
