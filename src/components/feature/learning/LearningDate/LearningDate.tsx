import { css, Theme } from '@emotion/react';

const formatDate = (published: string) => {
  const [year, month, date] = published.split('-');
  return {
    year: year,
    month: month,
    date: date,
    formatted: `${year}.${month}.${date}`,
  };
};

type Props = {
  published: string;
  updated?: string;
};
export const LearningDate: React.FC<Props> = ({ published, updated }) => {
  const formattedPublished = formatDate(published);
  const formattedUpdated =
    typeof updated === 'string' ? formatDate(updated) : undefined;
  return (
    <span>
      <time dateTime={published}>{formattedPublished.formatted}</time>
      {formattedUpdated?.formatted && (
        <>
          {' '}
          - Updated <time dateTime={updated}>{formattedUpdated.formatted}</time>
        </>
      )}
    </span>
  );
};
