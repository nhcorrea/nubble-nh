import {useEffect, useState} from 'react';

interface Props<T> {
  value: T;
  delay?: number;
}

export function useDebounce<T>({value, delay = 500}: Props<T>): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
