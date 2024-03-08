import { setInputType } from "@/render/redux/reducers/inputType";
import { useAppSelector, store } from "@redux/index";
import React, { useState } from "react";
import { Checkbox } from "../checkboxs";
import { NumberInput } from "../inputs/NumberInput";

export const VariableCounter = () => {
  const state = useAppSelector((state) => state);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const { inputType } = state.example;

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(parseInt(e.target.value));
  };

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(e.target.value));
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
    <div className="flex items-center justify-center space-x-3 ml-5">
      <Checkbox
        label="Variable :"
        checked={inputType === "Variable"}
        handleCheckboxClick={handleCheckboxClick}
      />
      <NumberInput
        label="Min :"
        disabled={inputType === "Linear"}
        handleNumberInputChange={handleChangeMin}
      />
      <NumberInput
        label="Max :"
        disabled={inputType === "Linear"}
        handleNumberInputChange={handleChangeMax}
      />
    </div>
  );
};