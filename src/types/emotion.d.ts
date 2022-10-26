import '@emotion/react';
declare module '@emotion/react' {
  interface Theme {
    spacing: {
      (param1: number): string;
      (param1: number, param2: number): string;
      (param1: number, param2: number, param3: number): string;
      (param1: number, param2: number, param3: number, param4: number): string;
    };
    mq: (key: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => string;
  }
}
