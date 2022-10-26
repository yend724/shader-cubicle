export type LearningPath = {
  title: string;
  path: string;
  published: string;
  author: string;
  tag: string[];
}[];
export const LEAENING_PATH: LearningPath = [
  {
    title: 'Shaderを描くための準備',
    path: 'preparation',
    published: '2022-10-26',
    author: 'YEND',
    tag: ['vetexShader', 'fragmentShader'],
  },
  {
    title: '色を塗りつぶす',
    path: 'fill',
    published: '2022-10-26',
    author: 'YEND',
    tag: ['vetexShader', 'fragmentShader'],
  },
];
