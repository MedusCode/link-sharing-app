import { FC, SVGProps } from 'react';
import THexColor from './hex-color';

interface ISocialNetwork {
  value: string;
  name: string;
  color: THexColor
  icon?: FC<SVGProps<SVGSVGElement>> | null
  isColorLight?: boolean;
}

export default ISocialNetwork;
