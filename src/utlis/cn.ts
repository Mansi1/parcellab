export const cn = (
  className: string,
  ...classNames: Array<string | undefined>
): string => {
  return [className, ...classNames].filter((v) => !!v?.trim()).join(' ');
};
