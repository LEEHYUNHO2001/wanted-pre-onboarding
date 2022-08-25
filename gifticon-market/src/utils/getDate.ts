export const getDate = (time: string) => {
  const newDate = new Date(time);
  const year = newDate.getFullYear();
  const rawMonth = newDate.getMonth().toString();
  const rawDate = newDate.getDate().toString();
  const month = rawMonth.padStart(2, '0');
  const date = rawDate.padStart(2, '0');
  return `${year}.${month}.${date}`;
};
