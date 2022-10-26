import { css } from '@emotion/react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { HomeHead } from '@/components/feature/home/HomeHead';

const WrapperStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: var(--window-h, 100vh);
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
      <main>{children}</main>
      <Footer />
    </div>
  );
};
