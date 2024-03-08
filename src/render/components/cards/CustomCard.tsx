import React from "react";
import { ChevronUp, QuestionMarkCircle } from "../icons";
import { H1 } from "../typography/headers";

interface CustomCardProps {
  children: React.ReactNode;
  title?: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
  title = "Title",
}) => {
  return (
    <div className="flex-col items-center justify-center bg-[#302F35] shadow-lg rounded-lg p-4">
      {/* This is the header of the card */}
      <div className="flex items-center justify-between w-full">
        <H1>{title}</H1>
        <div className="flex items-center gap-1">
          <QuestionMarkCircle color="#BEC2C4" size="small" />
          <ChevronUp color="#BEC2C4" size="medium" />
        </div>
      </div>
      {/* This is the content of the card */}
      {children}
    </div>
  );
};
