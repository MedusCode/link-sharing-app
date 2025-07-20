import { FC, useState } from 'react';
import styles from './authorization.module.css';
import Logo from '../../components/logo/logo';
import AnimatedOutlet from '../../animations/animated-outlet/animated-outlet';
import { motion } from 'framer-motion';
import { animationsDuration } from '../../constants/animations';

const Authorization: FC = () => {
  const [ height, setHeight ] = useState<number | 'auto'>('auto');
  const [ pointerEvents, setPointerEvents ] = useState<'none' | 'auto'>('auto');

  return (
    <div className={styles.page}>
      <motion.main
        style={{ height, pointerEvents }}
        animate={{ height }}
        transition={{ duration: animationsDuration, ease: 'easeInOut', }}
        onAnimationStart={() => setPointerEvents('none')}
        onAnimationComplete={() => setPointerEvents('auto')}
        className={styles.body}
      >
        <Logo className={styles.logo} />
          <AnimatedOutlet mode={'sync'} initial={false} context={{ setHeight }} />
      </motion.main>
    </div>
  );
}

export default Authorization;
