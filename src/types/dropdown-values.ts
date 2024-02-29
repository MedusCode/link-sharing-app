import { FC } from 'react';

interface IDropdownValue {
  text: string,
  value: string,
  icon?: FC
}

type TDropdownValues = IDropdownValue[];

export type {IDropdownValue, TDropdownValues};
