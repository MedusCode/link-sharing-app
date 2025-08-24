import { useCallback, useState } from 'react';


interface UsePointerLockReturn {
  pointerEvents: 'none' | 'auto';
  onAnimationStart: () => void;
  onAnimationComplete: () => void;
}

export const usePointerLockUtil = (disable: boolean = true): UsePointerLockReturn => {
  const [ pointerEvents, setPointerEvents ] = useState<'none' | 'auto'>('auto');

  const onAnimationStart = useCallback(() => {
    if (disable) setPointerEvents('none');
  }, [ disable ]);

  const onAnimationComplete = useCallback(() => {
    if (disable) setPointerEvents('auto');
  }, [ disable ]);

  return { pointerEvents, onAnimationStart, onAnimationComplete };
};
