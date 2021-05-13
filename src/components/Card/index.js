import "./card.less";
import React from "react";
import classNames from "classnames";
import { Card as AntCard } from "antd";

export default function Card(props) {
  const { className, children, ...rest } = props;

  return (
    <AntCard
      bordered={false}
      className={classNames("custom-card", className)}
      {...rest}
    >
      {children}
    </AntCard>
  );
}

