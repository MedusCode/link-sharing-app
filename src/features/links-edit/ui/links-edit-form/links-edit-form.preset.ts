interface LinksEditFormPreset {
  addButtonText: string;
  saveButtonText: string;
}

export const linksEditFormPreset = {
  addButtonText: '+ Add new link',
  saveButtonText: 'Save',
} as const satisfies LinksEditFormPreset;
