interface ILinksEditorButtonsPreset {
  addButtonText: string;
  saveButtonText: string;
}

const linksEditorButtonsPreset: ILinksEditorButtonsPreset = {
  addButtonText: '+ Add new link',
  saveButtonText: 'Save',
} as const satisfies ILinksEditorButtonsPreset

export default linksEditorButtonsPreset;
