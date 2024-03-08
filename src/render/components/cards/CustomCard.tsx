import React from "react";
import { ChevronUp, QuestionMarkCircle } from "../icons";
import { H1 } from "../typography/headers";
import { store, useAppSelector } from "@redux/index";
import { setCounter } from "@/render/redux/reducers/count";
import { setMax, setMin } from "@/render/redux/reducers/range";
import { setInputType } from "@/render/redux/reducers/inputType";

interface CustomCardProps {
  children: React.ReactNode;
  title?: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
  title = "Title",
}) => {
  const handleReset = () => {
    store.dispatch(setCounter(0));
    store.dispatch(setMin(0));
    store.dispatch(setMax(100));
    store.dispatch(setInputType("Linear"));
  };

  return (
    <div className="flex-col items-center justify-center bg-[#302F35] shadow-lg rounded-lg p-4">
      {/* This is the header of the card */}
      <div className="flex items-center justify-between w-full  mb-5">
        <H1>{title}</H1>
        <div className="flex items-center gap-1">
          <QuestionMarkCircle color="#BEC2C4" size="small" />
          <ChevronUp color="#BEC2C4" size="medium" />
        </div>
      </div>
      {/* This is the content of the card */}
      {children}

      {/* This is the footer of the card */}
      <div className="flex justify-end mt-7 mb-2">
        <button
          onClick={handleReset}
          style={{
            backgroundColor: "#4E4E54",
            color: "#CCCCCC",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "17px",
          }}
          className="  px-4 py-2 rounded-lg "
        >
          Smart Reset
        </button>
      </div>
    </div>
  );
};
