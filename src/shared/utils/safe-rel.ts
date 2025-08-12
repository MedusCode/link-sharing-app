import { HTMLAttributeAnchorTarget } from 'react';

const safeRel = (rel: string | undefined, target: HTMLAttributeAnchorTarget | undefined) =>
  rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

export default safeRel;
