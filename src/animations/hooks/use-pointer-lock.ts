import { useCallback, useState } from 'react';

interface IUsePointerLockReturn {
  pointerEvents: 'none' | 'auto';
  onAnimationStart: () => void;
  onAnimationComplete: () => void;
}

const usePointerLock = (disable: boolean = true): IUsePointerLockReturn => {
  const [ pointerEvents, setPointerEvents ] = useState<'none' | 'auto'>('auto');

  const onAnimationStart = useCallback(() => {
    if (disable) setPointerEvents('none');
  }, [ disable ]);

  const onAnimationComplete = useCallback(() => {
    if (disable) setPointerEvents('auto');
  }, [ disable ]);

  return { pointerEvents, onAnimationStart, onAnimationComplete };
};

export default usePointerLock;
