import { FC, SVGProps } from 'react';

interface IDropdownValue {
  text: string,
  value: string,
  icon?: FC<SVGProps<SVGSVGElement>>
}

type TDropdownValues = IDropdownValue[];

export type {IDropdownValue, TDropdownValues};
