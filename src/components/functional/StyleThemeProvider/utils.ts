type Spaceing = {
  (param1: number): string;
  (param1: number, param2: number): string;
  (param1: number, param2: number, param3: number): string;
  (param1: number, param2: number, param3: number, param4: number): string;
};
export const spacing: Spaceing = (...params: number[]): string => {
  const rems = params.map(param => `${param * 0.25}rem`);
  return rems.join(' ');
};

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
export const mq = (key: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[key]}px)`;
