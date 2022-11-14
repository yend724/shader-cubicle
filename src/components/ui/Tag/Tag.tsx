import { css, Theme } from '@emotion/react';

const tagsStyle = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
`;
const tagStyle = (theme: Theme) => css`
  padding: ${theme.spacing(0, 2)};
  border-radius: 4px;
  background-color: var(--indigo-9);
  color: var(--color-white);
  font-size: 0.75rem;
`;

type Props = { tag: string[] };
export const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <ul css={tagsStyle}>
      {tag.map((t) => (
        <li key={t} css={tagStyle}>
          {t}
        </li>
      ))}
    </ul>
  );
};
