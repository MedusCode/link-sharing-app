interface IContentPreset {
  heading: string;
  subheading?: string;
  footer?: {
    text: string;
    linkText: string;
    link: string;
  };
};

export default IContentPreset;
