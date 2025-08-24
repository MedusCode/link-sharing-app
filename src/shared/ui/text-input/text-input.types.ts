import { FC, SVGProps } from 'react';


export interface TextInputContent {
  label: string;
  placeholder: string;
  type: string;
  IconElement?: FC<SVGProps<SVGSVGElement>>;
}
