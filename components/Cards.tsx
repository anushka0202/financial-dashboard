import React from "react";
import cardsData from "../data/cardsData.json";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import leftArrowImg from "@/assets/left-arrow.svg";
import rightArrowImg from "@/assets/right-arrow.svg";

const Cards = () => {
  return (
    <div className="p-6 rounded-3xl shadow-lg bg-gradient-to-b from-white to-white">
      <h2 className="font-Suprema text-[20.11px] font-bold leading-[24.77px] mb-4 text-[#404040]">
        Cards
      </h2>

      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-1"
        >
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="flex flex-row items-center gap-1">
              <Image
                src={leftArrowImg}
                alt="left-arrow"
                className="h-[20px] w-[10px] m-1"
              />
              <div className="p-4 bg-gradient-to-b from-[#197BBD] to-[#3391D0] rounded-3xl text-white w-full lg:w-1/2 min-w-[270px] shadow-2xl">
                <p className="font-quicksand text-[16.75px] font-bold leading-[20.93px] text-left">
                  {card.name}
                </p>
                <p className="font-lato text-[8.11px] font-bold leading-[10px] text-left mb-4">
                  {card.type}
                </p>

                <p className="font-quicksand text-2xl font-medium leading-7 text-center py-6">
                  {card.number}
                </p>
                <div className="flex flex-row items-center justify-start gap-8">
                  <div>
                    <p className="font-lato text-[7.18px] font-medium leading-[8.61px] text-left">
                      Card holder:
                    </p>
                    <p className="font-lato text-[12.62px] font-medium leading-[15.14px] text-left">
                      {card.holder}
                    </p>
                  </div>
                  <div>
                    <p className="font-lato text-[7.18px] font-medium leading-[8.61px] text-left">
                      Expire date:
                    </p>
                    <p className="font-lato text-[12.62px] font-medium leading-[15.14px] text-left">
                      {card.expiry}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={rightArrowImg}
                alt="right-arrow"
                className="h-[20px] w-[10px] m-1"
              />
            </div>

            <div className=" min-w-[270px]">
              <div className="w-full bg-gray-300 h-2 rounded mt-2 relative">
                <div
                  className="bg-blue-500 h-2 rounded absolute left-0"
                  style={{
                    width: `${(card.weeklyPayment / card.limit) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex flex-row items-center justify-between mt-3">
                <p className="font-suprema text-[14px] font-normal leading-[17.24px] text-[#AEAEAE] text-left">
                  Weekly payment limit
                </p>
                <p className="font-Lato text-[14px] font-medium leading-[16.8px] text-[#404040]">
                  ${card.weeklyPayment.toFixed(2)} / ${card.limit.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[2px] lg:h-[150px] bg-[#E8E8E8] ml-10"></div>

          <div className="w-full flex flex-col items-center justify-between mr-3">
            <div className="text-center lg:text-right w-full ">
              <p className="font-Lato text-[31.55px] font-bold leading-[37.86px] text-[#197BBD]">
                <span className="text-[18px] leading-[21.6px]">$</span>
                {card.balance.toFixed(2)}
              </p>
              <p className="font-Suprema text-[14px] font-normal leading-[17.24px] text-[#AEAEAE]">
                Current balance
              </p>
              <p className="mt-4 font-Lato font-medium text-[18px] leading-[21.6px] text-[#439A86]">
                ${card.income.toFixed(2)}
              </p>
              <p className="font-Suprema text-[14px] font-normal leading-[17.24px] text-[#AEAEAE]">
                Income
              </p>
              <p className="mt-4 font-Lato font-medium text-[18px] leading-[21.6px] text-[#BB4430]">
                ${card.outcome.toFixed(2)}
              </p>
              <p className="font-Suprema text-[14px] font-normal leading-[17.24px] text-[#AEAEAE]">
                Outcome
              </p>

              <div className="mt-4 flex flex-row lg:flex-col lg:text-right items-center lg:items-end gap-1">
                <Switch id="deactivate-card" />
                <label
                  htmlFor="deactivate-card"
                  className="font-suprema text-sm font-normal leading-5 text-[#AEAEAE] text-right"
                >
                  Deacivate card
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
