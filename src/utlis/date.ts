export const fill = (num: number): string => {
  if (num < 10) {
    return '0' + num;
  }
  return '' + num;
};

export const formatDate = (date: Date): string => {
  return `${fill(date.getDate())}.${fill(
    date.getMonth() + 1
  )}.${date.getFullYear()} ${fill(date.getHours())}:${fill(date.getMinutes())}`;
};
