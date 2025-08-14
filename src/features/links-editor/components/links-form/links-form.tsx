import { FC, FormEvent, HTMLAttributes, ReactNode } from 'react';

import { useLinksForm } from '@features/links-editor/context/form-context';

interface IFormProps {
  className?: HTMLAttributes<HTMLElement>['className'];
  children: ReactNode
}

const LinksForm: FC<IFormProps> = ({
  className,
  children
}) => {
  const { validateAll } = useLinksForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) return;
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>{children}</form>
  )
}

export default LinksForm;
