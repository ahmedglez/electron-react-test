import React from "react";

type LabelProps = {
  children: React.ReactNode;
  color?: string;
};

export const Label: React.FC<LabelProps> = ({
  children,
  color = "#ffffff80",
}) => {
  return (
    <label style={{ color: color }} className={`text-sm`}>
      {children}
    </label>
  );
};
