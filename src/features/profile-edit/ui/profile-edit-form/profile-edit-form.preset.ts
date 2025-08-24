interface ProfileEditFormPreset {
  saveButton: {
    text: string;
  }
}

export const profileEditFormPreset = {
  saveButton: {
    text: 'Save',
  }
} as const satisfies ProfileEditFormPreset;
