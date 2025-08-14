import { motion } from 'framer-motion';

const elementsMap = {
  div: motion.div,
  section: motion.section,
  main: motion.main,
  header: motion.header,
} as const;

export default elementsMap;
