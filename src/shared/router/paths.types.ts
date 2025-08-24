import { Paths } from '@shared/router';


type TPaths = typeof Paths;

export type Path = {
  [K in keyof TPaths]: TPaths[K][keyof TPaths[K]];
}[keyof TPaths];
