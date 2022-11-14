const regex = new RegExp(/^https?:\/\//);
export const isExternalLink = (url: string) => {
  return regex.test(url);
};
