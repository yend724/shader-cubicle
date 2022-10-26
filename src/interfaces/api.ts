import { readdirSync } from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src/pages/learning');

type Post = {
  path: string;
  meta: {
    title: string;
    published: string;
    updated?: string;
    author: string;
    tag: string[];
    draft?: boolean;
  };
};
export const getAllPahtMaps = async () => {
  const directoryNames = readdirSync(postsDirectory);
  const pathMaps = await Promise.all(
    directoryNames.map(async directory => {
      const post: Post =
        await require(`src/pages/learning/${directory}/index.page.mdx`);
      return { meta: post.meta, path: directory };
    })
  ).then(values => {
    const pathMap: Record<string, Post> = values.reduce((acc, cur) => {
      const map = {
        [cur.path]: {
          ...cur,
        },
      };
      return { ...acc, ...map };
    }, {});
    return pathMap;
  });

  return {
    pathMaps: pathMaps,
  };
};
