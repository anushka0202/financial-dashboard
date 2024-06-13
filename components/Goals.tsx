import React from "react";
import goalsData from "@/data/goalsData.json";
import Image from "next/image";
import plusImg from "@/assets/plus-circle.svg";
import holidaysImg from "@/assets/holidays.svg";
import renovationImg from "@/assets/renovation.svg";
import xboxImg from "@/assets/xbox.svg";
import rightArrowImg from "@/assets/right-arrow.svg";

const Goals = () => {
  return (
    <div className="p-6 pb-0">
      <div className="flex felx-row items-center justify-start gap-2 mb-4">
        <h2 className="text-center font-Suprema text-[20.11px] font-bold leading-[24.77px] text-[#404040]">
          Goals
        </h2>
        <Image src={plusImg} alt="add goal" />
      </div>
      <div className="py-4 w-full flex flex-row items-center gap-2 overflow-auto">
        {goalsData.map((goal, index) => (
          <div
            key={index}
            className="px-5 py-2 flex-shrink-0 w-40 rounded-3xl shadow-lg bg-gradient-to-b from-white to-white"
          >
            <p className="font-Lato text-[23.98px] font-bold leading-[28.77px] text-[#696969]">
              {goal.amount}
            </p>
            <p className="text-left font-Suprema text-[14px] font-normal leading-[17.24px] mb-4 text-[#AEAEAE]">
              {goal.date}
            </p>
            <div className="flex flex-col justify-start mt-8">
              <Image
                src={
                  goal.icon === "holidays"
                    ? (holidaysImg as string)
                    : goal.icon === "renovation"
                    ? (renovationImg as string)
                    : (xboxImg as string)
                }
                alt="icon"
              />
              <p className="text-left font-Suprema text-[20.11px] font-normal leading-[24.77px] mb-4 text-[#404040]">
                {goal.title}
              </p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center flex-shrink-0 w-12">
          <Image src={rightArrowImg} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Goals;
