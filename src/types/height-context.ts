import { Dispatch, SetStateAction } from 'react';

type THeightContext = {
  setHeight: Dispatch<SetStateAction<number | 'auto'>>;
};

export default THeightContext;
