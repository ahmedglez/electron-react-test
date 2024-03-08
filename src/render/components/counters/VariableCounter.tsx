import { setInputType } from "@/render/redux/reducers/inputType";
import { setMax, setMin } from "@/render/redux/reducers/range";
import { store, useAppSelector } from "@redux/index";
import React, { useEffect } from "react";
import { Checkbox } from "../checkboxs";
import { NumberInput } from "../inputs/NumberInput";

export const VariableCounter = () => {
  const state = useAppSelector((state) => state);
  const { inputType, range } = state.example;
  const { min, max } = range;

  useEffect(() => {
    if (min > max) {
      store.dispatch(setMin(max));
    }

    if (max < min) {
      store.dispatch(setMax(min));
    }
  }, [min, max]);

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setMin(parseInt(e.target.value)));
  };

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setMax(parseInt(e.target.value)));
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
        value={min}
        label="Min :"
        disabled={inputType === "Linear"}
        handleNumberInputChange={handleChangeMin}
      />
      <NumberInput
        value={max}
        label="Max :"
        disabled={inputType === "Linear"}
        handleNumberInputChange={handleChangeMax}
      />
    </div>
  );
};
