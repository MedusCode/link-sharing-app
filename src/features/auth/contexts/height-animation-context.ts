import { createContext } from 'react';

export type HeightAnimationContextType = {
  setHeight: (height: number | 'auto') => void;
};

const HeightAnimationContext = createContext<HeightAnimationContextType | undefined>(undefined);

export default HeightAnimationContext;
