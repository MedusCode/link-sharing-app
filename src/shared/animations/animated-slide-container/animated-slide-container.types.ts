type Direction = 'left' | 'right' | 'up' | 'down';

export interface SlideAnimation {
  side?: Direction | Direction[];
  shift?: number;
  duration?: number;
  delay?: number;
  isExitAbsolute?: boolean;
}
