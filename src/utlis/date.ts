export const fillWithZeros = (num: number): string => {
  if (num < 10) {
    return '0' + num;
  }
  return '' + num;
};
/* example format 02.01.2023 15:10 */
export const formatDate = (date: Date): string => {
  return `${fillWithZeros(date.getDate())}.${fillWithZeros(
    date.getMonth() + 1
  )}.${date.getFullYear()} ${fillWithZeros(date.getHours())}:${fillWithZeros(
    date.getMinutes()
  )}`;
};
