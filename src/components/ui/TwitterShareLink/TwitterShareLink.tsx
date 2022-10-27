type Props = {
  url: string;
  text?: string;
  via?: string;
  related?: string;
  hashtags?: string;
};
type Params = Omit<Props, 'url'>;
const generateParams = (params: Params) => {
  return Object.keys(params).reduce((acc, cur) => {
    const key = cur as keyof Params;
    return `${acc}&${key}=${params[key]}`;
  }, '');
};
export const TwitterShareLink: React.FC<Props> = ({ url, ...others }) => {
  return (
    <a
      href={`http://twitter.com/share?url=${url}${generateParams(others)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="twitter-share-button"
      data-show-count="false"
    >
      Tweet
    </a>
  );
};
