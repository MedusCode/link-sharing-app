export interface LinksEditCardRef {
  validate: () => boolean;
  scrollIntoView: (options?: ScrollIntoViewOptions) => void;
  focusInput: (options?: FocusOptions) => void;
}
