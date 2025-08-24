interface ProfileEditImagePreset {
  label: string;
  firstHint: string;
  secondHint: string;
}

export const profileEditImagePreset = {
  label: 'Profile picture',
  firstHint: 'Image must be below 1024x1024px.',
  secondHint: 'Use PNG or JPG format.',
} as const satisfies ProfileEditImagePreset;
