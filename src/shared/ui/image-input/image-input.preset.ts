interface ImageInputPreset {
  changeText: string;
  uploadText: string;
  notFoundText: string;
}

export const imageInputPreset = {
  changeText: 'Change Image',
  uploadText: '+ Upload Image',
  notFoundText: 'Not Found',
} as const satisfies ImageInputPreset;
