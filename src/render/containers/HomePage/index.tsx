import { CustomCard } from "@/render/components/cards/CustomCard";
import { useAppSelector } from "@redux/index";

const HomePage = () => {
  const state = useAppSelector((state) => state); 

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-black items-center justify-center p-12 text-white"
    >
      <CustomCard title="EXTRUSION">
        <div className="flex flex-col space-y-4"></div>
      </CustomCard>
    </div>
  );
};

export default HomePage;
