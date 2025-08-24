import { motion } from 'framer-motion';


export const MOTION_ANIMATION_DURATION: number = 0.5;
export const MOTION_ANIMATION_DELAY: number = 0.1;
export const MOTION_ANIMATION_SHIFT: number = 70;

export const motionElementsMap = {
  div: motion.div,
  section: motion.section,
  main: motion.main,
  header: motion.header,
} as const;
