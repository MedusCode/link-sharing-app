interface ICardProfilePreset {
  imgAlt: string;
}

const cardProfilePreset = {
  imgAlt: 'Profile Image Preview'
} as const satisfies ICardProfilePreset;

export default cardProfilePreset;
