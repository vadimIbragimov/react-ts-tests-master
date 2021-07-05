import { useState } from 'react';

export const useCustomHookSpec = <T>(initialValue: T) => {
  const [someValue, setSomeValue] = useState<T>(initialValue);

  return {
    value: someValue,
    setByTimeOut: (
      value: T,
      timeout: number
    ) => setTimeout(() => setSomeValue(value), timeout)
  };
};