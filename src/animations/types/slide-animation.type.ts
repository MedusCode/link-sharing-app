type TDirection = 'left' | 'right' | 'up' | 'down';

interface ISlideAnimation {
  side?: TDirection | TDirection[];
  shift?: number;
  duration?: number;
  delay?: number;
  isExitAbsolute?: boolean;
}

export default ISlideAnimation;
