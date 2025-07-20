import { motion } from 'framer-motion';
import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from 'react';
import styles from './auth-animated-section.module.css';
import { useOutletContext } from 'react-router-dom';
import { animationsDuration, sectionShift } from '../../constants/animations';

interface IAuthAnimatedSectionProps {
  side?: 'left' | 'right';
  shift?: number
  duration?: number;
  children: ReactNode;
}

type TContextType = { setHeight: Dispatch<SetStateAction<number | 'auto'>> };

const AuthAnimatedSection: FC<IAuthAnimatedSectionProps> = ({
  side = 'left',
  shift = sectionShift,
  duration = animationsDuration,
  children,
}) => {
  const { setHeight } = useOutletContext<TContextType>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const x = side === 'left' ? shift : -shift

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.height) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [setHeight])

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: x
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: duration / 2,
          duration: (duration / 2) * 0.7,
          ease: 'easeOut'
        }
      }}
      exit={{
        opacity: 0,
        x: x,
        position: 'absolute',
        top: '50%',
        left: '0',
        y: '-50%',
        transition: {
          duration: (duration / 2) * 0.7,
          ease: 'easeIn',
          y: {duration: 0}
        }
      }}
      className={styles.container}
      ref={sectionRef}
    >
      {children}
    </motion.div>
  );
}

export default AuthAnimatedSection;
