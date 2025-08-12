import clsx from 'clsx';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { ReactComponent as IconUploadImage } from '@shared/assets/images/icon-upload-image.svg';

import styles from './image-input.module.css';


const ImageInput: FC = () => {
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
    <label className={clsx(styles.container, { [styles.container__loaded]: imageUrl })}>
      {
        imageUrl && <img className={styles.image} ref={imageRef} alt={'Not found'} />
      }
      <div className={styles.caption}>
        <IconUploadImage className={clsx(styles.caption_image, { [styles.caption_image__loaded]: imageUrl })} />
        <span className={clsx(styles.caption_text, { [styles.caption_text__loaded]: imageUrl })}>
          {imageUrl ? "Change Image" : "+ Upload Image"}
        </span>
      </div>
      <input className={styles.input} type={'file'} accept={"image/png, image/jpeg"} onChange={selectImage} />
    </label>
  );
}

export default ImageInput;
