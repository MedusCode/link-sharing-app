import { FC, HTMLAttributes } from 'react';
import styles from './links-section.module.css';
import clsx from 'clsx';
import Button from '../../../../shared/components/button/button';
import linksContentPreset from '../../presets/links-content.preset';

interface ILinksSectionProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { texts, buttons } = linksContentPreset;

const LinksSection: FC<ILinksSectionProps> = ({
  className = ''
}) => {

  return (
    <section className={clsx(styles.container, className)}>
      <div className={styles.main}>
        <h1 className={styles.heading}>{ texts.heading }</h1>
        <span className={styles.subheading}>{ texts.description }</span>
        <Button appearance={'secondary'} className={styles.newLinkButton}>{ buttons.addButtonText }</Button>
        <div>here</div>
      </div>
      <div className={styles.footer}>
        <Button appearance={'primary'} type={'submit'} className={styles.saveButton} disabled>{ buttons.saveButtonText }</Button>
      </div>
    </section>
  );
}

export default LinksSection;
