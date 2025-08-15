import clsx from 'clsx';
import { ChangeEvent, forwardRef, HTMLAttributes, useEffect, useImperativeHandle, useRef, useState, } from 'react';

import { ReactComponent as IconUploadImage } from '@shared/assets/images/icon-upload-image.svg';

import styles from './image-input.module.css';
import imageInputPreset from './image-input.preset';

const { changeText, uploadText, notFoundText } = imageInputPreset;

export type ImageInputChange =
  | { file: File; previewUrl: string }
  | { file: null; previewUrl: null };

export type ImageInputHandle = {
  clear(): void;
  focus(): void;
};

interface ImageInputProps {
  id?: string;
  value?: string | null;
  onChange?: (next: ImageInputChange) => void;
  accept?: string;
  name?: string;
  disabled?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const ImageInput = forwardRef<ImageInputHandle, ImageInputProps>(function ImageInput(
  {
    id,
    value,
    onChange,
    accept = 'image/png, image/jpeg',
    name,
    disabled,
    className = '',
  },
  ref
) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(value ?? null);
  const isControlled = value !== undefined;

  useEffect(() => {
    if (isControlled) setPreviewUrl(value ?? null);
  }, [isControlled, value]);

  const lastObjectUrlRef = useRef<string | null>(null);
  const revokeLastObjectUrl = () => {
    if (lastObjectUrlRef.current) {
      URL.revokeObjectURL(lastObjectUrlRef.current);
      lastObjectUrlRef.current = null;
    }
  };

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = previewUrl ?? '';
    }
  }, [previewUrl]);

  const selectImage = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;
    const file = files && files[0] ? files[0] : null;

    if (!file) {
      if (!isControlled) setPreviewUrl(null);
      onChange?.({ file: null, previewUrl: null });
      revokeLastObjectUrl();
      return;
    }

    const url = URL.createObjectURL(file);
    revokeLastObjectUrl();
    lastObjectUrlRef.current = url;

    if (!isControlled) {
      setPreviewUrl(url);
    }
    onChange?.({ file, previewUrl: url });
  };

  useImperativeHandle(ref, () => ({
    clear() {
      revokeLastObjectUrl();
      if (!isControlled) setPreviewUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      onChange?.({ file: null, previewUrl: null });
    },
    focus() {
      fileInputRef.current?.focus();
    },
  }));

  useEffect(() => revokeLastObjectUrl, []);

  const loaded = !!previewUrl;

  return (
    <label className={clsx(styles.container, { [styles.container__loaded]: loaded }, className)}>
      {loaded && <img className={styles.image} ref={imgRef} alt={notFoundText} />}
      <div className={styles.caption}>
        <IconUploadImage className={clsx(styles.caption_image, { [styles.caption_image__loaded]: loaded })} />
        <span className={clsx(styles.caption_text, { [styles.caption_text__loaded]: loaded })}>
          {loaded ? changeText : uploadText}
        </span>
      </div>
      <input
        id={id}
        ref={fileInputRef}
        className={styles.input}
        type="file"
        name={name}
        accept={accept}
        disabled={disabled}
        onChange={selectImage}
      />
    </label>
  );
});

export default ImageInput;
