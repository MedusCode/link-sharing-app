import { FC, HTMLAttributes, useId } from 'react';

import ImageInput from '@shared/components/image-input/image-input';
import { TProfileImg } from '@shared/types/profile.types';

import styles from './image-section.module.css';

interface IImageSectionProps {
  img: TProfileImg,
  updateImage: (img: TProfileImg) => void,
  className?: HTMLAttributes<HTMLElement>['className'];
}

const ImageSection: FC<IImageSectionProps> = ({
  img,
  updateImage,
  className
}) => {
  const id = useId();

  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>Profile picture</label>
      <div className={styles.image_wrapper}>
        <ImageInput
          className={styles.image_input}
          value={img}
          id={id}
          onChange={({ previewUrl }) => updateImage(previewUrl)} />
        <span className={styles.image_hints}>
          {'Image must be below 1024x1024px.'}
          <br />
          {'Use PNG or JPG format.'}
        </span>
      </div>
    </div>
  );
}

export default ImageSection;
