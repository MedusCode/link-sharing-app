interface ProfileEditDemoPreset {
  imgAlt: string;
}

export const profileEditDemoPreset = {
  imgAlt: 'Profile Image Preview'
} as const satisfies ProfileEditDemoPreset;
