interface IImageInputPreset {
  changeText: string;
  uploadText: string;
  notFoundText: string;
}

const imageInputPreset = {
  changeText: 'Change Image',
  uploadText: '+ Upload Image',
  notFoundText: 'Not Found',
} as const satisfies IImageInputPreset;

export default imageInputPreset;
