import { RefObject, useEffect, useRef } from 'react';


export const useHeightObserverUtil = <T extends HTMLElement>(
  onResize: (height: number) => void
): RefObject<T> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new ResizeObserver(([ entry ]) => {
      const newHeight = entry.contentRect.height;
      onResize(newHeight);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [ onResize ]);

  return ref;
}
