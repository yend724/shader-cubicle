import { useEffect } from 'react';

export const useMinimalViewPort = (size: number = 360) => {
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]')!;
    const switchViewport = () => {
      const value =
        window.outerWidth > size
          ? 'width=device-width,initial-scale=1'
          : `width=${size}`;
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    };
    addEventListener('resize', switchViewport, false);
    return () => {
      removeEventListener('resize', switchViewport);
    };
  }, [size]);
};
