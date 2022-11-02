import { ThemeProvider } from '@emotion/react';
import { spacing, mq } from './utils';

export const theme = {
  spacing,
  mq,
};
export type ThemeProps = {
  children: React.ReactNode;
};
export const StyleThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
