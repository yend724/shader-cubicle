import type { TwitterShareLinkProps } from './index';

type Params = Omit<TwitterShareLinkProps, 'url'>;
export const generateParams = (params: Params) => {
  return Object.keys(params).reduce((acc, cur) => {
    const key = cur as keyof Params;
    return `${acc}&${key}=${params[key]}`;
  }, '');
};
