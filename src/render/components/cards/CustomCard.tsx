import React from "react";

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
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex items-center space-x-4">
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      {/* This is the content of the card */}
      {children}
    </div>
  );
};
