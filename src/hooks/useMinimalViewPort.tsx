import { useEffect } from 'react';

export const useMinimalViewPort = (size: number = 360) => {
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]')!;
    const switchViewport = () => {
      const match = window.outerWidth >= 360;
      if (match) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=1');
        window.removeEventListener('resize', switchViewport);
      }
    };

    const mediaQueryList = window.matchMedia(`(min-width: ${size}px)`);
    const listener = (event: MediaQueryListEvent | MediaQueryList) => {
      if (!event.matches) {
        viewport.setAttribute('content', `width=${size}`);
        window.addEventListener('resize', switchViewport, false);
      }
    };

    mediaQueryList.addEventListener('change', listener);
    listener(mediaQueryList);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [size]);
};
