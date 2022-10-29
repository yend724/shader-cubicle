import { useState, useCallback, useEffect } from 'react';

export const useShader = (s: string) => {
  const [shader, setShader] = useState<string>('');
  const onChange = useCallback((v: string) => {
    setShader(v);
  }, []);

  useEffect(() => {
    setShader(s);
    // eslint-disable-next-line
  }, []);

  return { shader, onChange };
};
