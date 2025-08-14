import { Paths } from '@app/router/paths';

type TPaths = typeof Paths;

type TAppPath = {
  [K in keyof TPaths]: TPaths[K][keyof TPaths[K]];
}[keyof TPaths];

export default TAppPath;
