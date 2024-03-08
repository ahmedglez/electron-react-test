import React from "react";

interface CustomCardProps {
  children: React.ReactNode;
}

export const CustomCard: React.FC<CustomCardProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-[#302F35] shadow-lg rounded-lg p-4">
      {children}
    </div>
  );
};
