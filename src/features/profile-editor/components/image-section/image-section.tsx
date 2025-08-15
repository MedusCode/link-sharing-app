import { FC, HTMLAttributes, useId } from 'react';

import ImageInput from '@shared/components/image-input/image-input';
import { TProfileImg } from '@shared/types/profile.types';

import styles from './image-section.module.css';
import imageSectionPreset from '@features/profile-editor/components/image-section/image-section.preset';

interface IImageSectionProps {
  img: TProfileImg,
  updateImage: (img: TProfileImg) => void,
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { label, firstHint, secondHint } = imageSectionPreset;

const ImageSection: FC<IImageSectionProps> = ({
  img,
  updateImage,
  className
}) => {
  const id = useId();

  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <div className={styles.image_wrapper}>
        <ImageInput
          className={styles.image_input}
          value={img}
          id={id}
          onChange={({ previewUrl }) => updateImage(previewUrl)} />
        <span className={styles.image_hints}>
          {firstHint}
          <br />
          {secondHint}
        </span>
      </div>
    </div>
  );
}

export default ImageSection;
