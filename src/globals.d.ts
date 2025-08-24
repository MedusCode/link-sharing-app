declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png';

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
