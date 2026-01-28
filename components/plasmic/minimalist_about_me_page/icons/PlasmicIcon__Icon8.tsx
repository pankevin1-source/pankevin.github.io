/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        opacity={".7"}
      >
        <path
          d={
            "M15 7.5c0 3.745-4.154 7.645-5.55 8.85a.75.75 0 0 1-.9 0C7.153 15.144 3 11.244 3 7.5a6 6 0 1 1 12 0"
          }
        ></path>

        <path d={"M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"}></path>
      </g>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
