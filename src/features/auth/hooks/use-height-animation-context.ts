import { useContext } from 'react';
import HeightAnimationContext from '../contexts/height-animation-context';

const useHeightAnimationContext = () => {
  const context = useContext(HeightAnimationContext);

  if (!context) {
    throw new Error('useHeightAnimationContext must be used within AuthAnimationContext.Provider');
  }

  return context;
};

export default useHeightAnimationContext;
