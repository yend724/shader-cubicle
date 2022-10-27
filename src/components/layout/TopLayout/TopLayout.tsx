import { css, Theme } from '@emotion/react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { HomeHead } from '@/components/feature/home/HomeHead';

const WrapperStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: var(--window-h, 100vh);
`;
const mainStyle = (theme: Theme) => css`
  padding: ${theme.spacing(8, 4, 12)};
`;

type Props = {
  title: string;
  children: React.ReactNode;
};
export const TopLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div css={WrapperStyle}>
      <HomeHead title={title} />
      <Header isHome />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};
