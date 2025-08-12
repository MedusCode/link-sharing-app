import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  enabled: boolean,
  root: RefObject<HTMLElement>,
  onOutside: () => void
) => {
  useEffect(() => {
    if (!enabled) return;

    const handle = (evt: MouseEvent) => {
      const node = root.current;
      if (node && !node.contains(evt.target as Node)) onOutside();
    };

    document.addEventListener('click', handle);
    return () => document.removeEventListener('click', handle);
  }, [ enabled, root, onOutside ]);
}

export default useOutsideClick;
