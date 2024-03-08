import { CustomCard } from "@/render/components/cards/CustomCard";
import { LinearCounter } from "@/render/components/counters/LinearCounter";
import { VariableCounter } from "@/render/components/counters/VariableCounter";
import { useAppSelector } from "@redux/index";

const HomePage = () => {
  const state = useAppSelector((state) => state);

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-black items-center justify-center p-12 text-white"
    >
      <CustomCard title="EXTRUSION">
        <div className="flex flex-col space-y-4">
          <LinearCounter />
          <VariableCounter />
        </div>
      </CustomCard>
    </div>
  );
};

export default HomePage;
