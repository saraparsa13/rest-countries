export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("en-US").format(value);
};

export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  let timeout: number;

  return (...args: T) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const capitalize = (value: string) =>
  value[0].toUpperCase() + value.slice(1);

