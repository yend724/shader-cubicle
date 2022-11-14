export const formatDate = (published: string) => {
  const [year, month, date] = published.split('-');
  return {
    year: year,
    month: month,
    date: date,
    formatted: `${year}.${month}.${date}`,
  };
};
