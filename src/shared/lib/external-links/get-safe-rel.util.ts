import { HTMLAttributeAnchorTarget } from 'react';


export const getSafeRelUtil = (rel: string | undefined, target: HTMLAttributeAnchorTarget | undefined) =>
  rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);
