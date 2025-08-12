type TDirection = 'left' | 'right' | 'up' | 'down';

interface ISlideAnimation {
  side?: TDirection | TDirection[];
  shift?: number;
  duration?: number;
  delay?: number;
  isExitAbsolut?: boolean;
}

export default ISlideAnimation;
