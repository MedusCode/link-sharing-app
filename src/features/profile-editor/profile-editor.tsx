import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import Button from '@shared/components/button/button';
import ImageInput from '@shared/components/image-input/image-input';
import TextInput from '@shared/components/text-input/text-input';

import styles from './profile-editor.module.css';

interface IProfileEditorProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const ProfileEditor: FC<IProfileEditorProps> = ({
  className = ''
}) => {

  return (
    <form className={clsx(styles.form, className)}>
      <div className={styles.main}>
        <div className={clsx(styles.input_section, styles.image_section)}>
          <label className={styles.label}>Profile picture</label>
          <div className={styles.image_wrapper}>
            <ImageInput className={styles.image_input} />
            <span className={styles.image_hint}>Image must be below 1024x1024px. Use PNG or JPG format.</span>
          </div>
        </div>
        <div className={clsx(styles.input_section, styles.text_section)}>
          <label className={styles.label}>First name*</label>
          <TextInput placeholder={'e.g. John'} />
          <label className={styles.label}>Last name*</label>
          <TextInput placeholder={'e.g. Appleseed'} />
          <label className={styles.label}>Email</label>
          <TextInput placeholder={'e.g. email@example.com'} />
        </div>
      </div>
      <div className={styles.footer}>
        <Button className={styles.save_button} type={'submit'}>Save</Button>
      </div>
    </form>
  );
}

export default ProfileEditor;
