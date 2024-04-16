export function capitalizeFirstLetter(value: string) {
  return value
    .trim()
    .split(' ')
    .map(
      name =>
        name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase(),
    )
    .join(' ');
}

export const stringUtils = {
  capitalizeFirstLetter,
};
