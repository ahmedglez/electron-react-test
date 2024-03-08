import { setCounter } from "@/render/redux/reducers/count";
import { setInputType } from "@/render/redux/reducers/inputType";
import { store, useAppSelector } from "@redux/index";
import React from "react";
import { Checkbox } from "../checkboxs";
import { NumberInput } from "../inputs/NumberInput";

export const LinearCounter = () => {
  const state = useAppSelector((state) => state);

  const { inputType, counter } = state.example;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setCounter(parseInt(e.target.value)));
  };

  const handleCheckboxClick: React.MouseEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (inputType === "Variable") {
      store.dispatch(setInputType("Linear"));
    } else {
      store.dispatch(setInputType("Variable"));
    }
  };

  return (
    <div className="flex items-center justify-start space-x-3 ml-10">
      <Checkbox
        checked={inputType === "Linear"}
        label="Linear :"
        handleCheckboxClick={handleCheckboxClick}
      />
      <NumberInput
        value={counter}
        disabled={inputType === "Variable"}
        handleNumberInputChange={handleChange}
      />
    </div>
  );
};
