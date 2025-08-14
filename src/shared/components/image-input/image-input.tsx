import clsx from 'clsx';
import { ChangeEvent, FC, HTMLAttributes, useEffect, useRef, useState } from 'react';

import { ReactComponent as IconUploadImage } from '@shared/assets/images/icon-upload-image.svg';

import styles from './image-input.module.css';
import imageInputPreset from './image-input.preset';

interface ImageInputProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { changeText, uploadText, notFoundText } = imageInputPreset;

const ImageInput: FC<ImageInputProps> = ({
  className = ''
}) => {
  const [ imageUrl, setImageUrl ] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const selectImage = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files

    if (files && files.length > 0) setImageUrl(URL.createObjectURL(files[0]));
  }

  useEffect(() => {
    if (imageUrl && imageRef.current) {
      imageRef.current.src = imageUrl;
    }
  }, [ imageUrl ])

  return (
    <label className={clsx(styles.container, { [styles.container__loaded]: imageUrl }, className)}>
      {
        imageUrl && <img className={styles.image} ref={imageRef} alt={notFoundText} />
      }
      <div className={styles.caption}>
        <IconUploadImage className={clsx(styles.caption_image, { [styles.caption_image__loaded]: imageUrl })} />
        <span className={clsx(styles.caption_text, { [styles.caption_text__loaded]: imageUrl })}>
          {imageUrl ? changeText : uploadText}
        </span>
      </div>
      <input className={styles.input} type={'file'} accept={"image/png, image/jpeg"} onChange={selectImage} />
    </label>
  );
}

export default ImageInput;
