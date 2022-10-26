import NextHead from 'next/head';
import { SITE_DATA } from '@/constants/site';

const commonImgPath = '/img/common';

type Props = {
  title: string;
  url: string;
  ogtype?: 'website' | 'article';
  ogimage?: string;
};
export const Head: React.FC<Props> = ({
  title,
  url = '/',
  ogtype = 'article',
  ogimage = '/img/common/ogp.png',
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={SITE_DATA.description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content={ogtype} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={SITE_DATA.description} />
      <meta
        property="og:image"
        content={`https://${SITE_DATA.domain}${ogimage}`}
      />
      <meta property="og:url" content={`https://${SITE_DATA.domain}${url}`} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@yend724" />
      <link rel="canonical" href={`https://${SITE_DATA.domain}${url}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${commonImgPath}/apple-touch-icon.png`}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={`${commonImgPath}/favicon.ico`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${commonImgPath}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${commonImgPath}/favicon-16x16.png`}
      />
    </NextHead>
  );
};
