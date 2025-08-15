interface IProfileEditorPreset {
  saveButton: {
    text: string;
  }
}

const profileEditorPreset = {
  saveButton: {
    text: 'Save',
  }
} as const satisfies IProfileEditorPreset;

export default profileEditorPreset;
