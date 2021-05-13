import "./progress.less";
import React from "react";
import classNames from "classnames";
import { Progress as AntProgress } from "antd";

export default function Progress(props) {
  const { className, strokeWidth, ...rest } = props;

  return (
    <AntProgress
      type="circle"
      strokeWidth={strokeWidth || 1}
      className={classNames("custom-progress", className)}
      {...rest}
    />
  );
}

