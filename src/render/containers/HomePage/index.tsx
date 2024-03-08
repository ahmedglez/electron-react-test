import { store, useAppSelector } from "@redux/index";
import { CustomCard } from "@/render/components/cards/CustomCard";
import { useState } from "react";
import { incrementCounter, decrementCounter } from "@redux/reducers/count";
import { incrementChar, decrementChar } from "@redux/reducers/characters";

const HomePage = () => {
  const [show, setShow] = useState(true);
  const [inputType, setInputType] = useState<"Linear" | "Variable">("Linear");

  const state = useAppSelector((state) => state);

  console.log("state", state.example.counter);

  const toogleInputType = () => {
    if (inputType === "Linear") {
      setInputType("Variable");
    } else {
      setInputType("Linear");
    }
  };

  const increment = () => {
    store.dispatch(incrementChar());
    store.dispatch(incrementCounter(1));
  };

  const decrement = () => {
    store.dispatch(decrementChar(1));
    store.dispatch(decrementCounter());
  };

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-black items-center justify-center p-12 text-white"
    >
      <CustomCard title="EXTRUSION">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4"></div>
          <div className="flex flex-col space-y-4"></div>
        </div>
      </CustomCard>
    </div>
  );
};

export default HomePage;
