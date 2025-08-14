import { createContext, useContext, useMemo, useRef } from 'react';

import { TSocialId } from '@shared/types/social-id.type';


type TValidator = () => boolean;

type TRegistry = Map<TSocialId, TValidator>;

type TLinksFormContext = {
  register: (id: TSocialId, v: TValidator) => () => void;
  validateAll: () => boolean;
};

const LinksFormContext = createContext<TLinksFormContext | null>(null);

export function useLinksForm() {
  const ctx = useContext(LinksFormContext);
  if (!ctx) throw new Error('useLinksForm must be used within <LinksFormProvider>');
  return ctx;
}

export function LinksFormProvider({ children }: { children: React.ReactNode }) {
  const regRef = useRef<TRegistry>(new Map());

  const value = useMemo<TLinksFormContext>(() => ({
    register: (id, v) => {
      regRef.current.set(id, v);
      return () => regRef.current.delete(id);
    },
    validateAll: () => {
      let ok = true;
      for (const validate of regRef.current.values()) {
        ok = validate() && ok;
      }
      return ok;
    },
  }), []);

  return <LinksFormContext.Provider value={value}>{children}</LinksFormContext.Provider>;
}
