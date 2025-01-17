declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
// declare module "*.module.scss" {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

//

declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// declare module "*.svg" {
//   import React = require("react");
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }
