interface IImageSectionPreset {
  label: string;
  firstHint: string;
  secondHint: string;
}

const imageSectionPreset = {
  label: 'Profile picture',
  firstHint: 'Image must be below 1024x1024px.',
  secondHint: 'Use PNG or JPG format.',
} as const satisfies IImageSectionPreset;

export default imageSectionPreset;
