import { FC, SVGProps } from 'react';

interface ITextInputContent {
  label: string;
  placeholder: string;
  type: string;
  IconElement?: FC<SVGProps<SVGSVGElement>>;
}

export default ITextInputContent;
