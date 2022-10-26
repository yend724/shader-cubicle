import { ThemeProvider } from '@emotion/react';
import { spacing, mq } from './utils';

export const theme = {
  spacing,
  mq,
};
type Props = {
  children: React.ReactNode;
};
export const StyleThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
