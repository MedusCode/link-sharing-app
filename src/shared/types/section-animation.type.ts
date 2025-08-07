interface ISectionAnimation {
  side?: 'left' | 'right' | 'up' | 'down';
  shift?: number;
  duration?: number;
  delay?: number;
  isExitAbsolut?: boolean;
}

export default ISectionAnimation;
