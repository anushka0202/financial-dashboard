import React from "react";
import Image from "next/image";
import transactionData from "@/data/newTransactionsData.json";
import miaImg from "@/assets/mia.svg";
import mikeImg from "@/assets/mike.svg";
import monicaImg from "@/assets/monica.svg";
import annImg from "@/assets/ann.svg";
import johnImg from "@/assets/john.svg";
import plusImg from "@/assets/plus-circle.svg";
import loanImg from "@/assets/loan.svg";
import { Button } from "@/components/ui/button";

const NewTransaction = () => {
  return (
    <div className="w-full flex md:flex-row items-center flex-col gap-2">
      <div className="flex justify-between p-6 rounded-3xl shadow-lg bg-gradient-to-b from-white to-white">
        <div>
          <h2 className="font-Suprema text-[20.11px] font-bold leading-[24.77px] mb-4 text-[#404040]">
            New transaction
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            {transactionData.map((user, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  className="h-[42px] w-[42px]"
                  src={
                    user.name === "Ann"
                      ? (annImg as string)
                      : user.name === "Monica"
                      ? (monicaImg as string)
                      : user.name === "John"
                      ? (johnImg as string)
                      : user.name === "Mike"
                      ? (mikeImg as string)
                      : (miaImg as string)
                  }
                  alt="icon"
                />
                <p className="mt-1 text-left font-Suprema text-[14px] leading-[17.24px] text-[#404040] font-normal">
                  {user.name}
                </p>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <div className="h-[42px] w-[42px] flex items-center justify-center">
                <Image
                  src={plusImg}
                  alt="add goal"
                  className="h-[24px] w-[24px]"
                />
              </div>
              <p className="mt-1 text-left font-Suprema text-[14px] leading-[17.24px] text-[#404040] font-normal">
                Add New
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="w-[175px] px-2 py-1 border rounded-lg border-[#197BBD] flex flex-row items-center justify-between text-left font-Lato text-[23.98px] leading-[28.77px] text-[#C7C7C7] font-normal">
              <input
                type="number"
                placeholder="0"
                className="w-[120px] border:none text-left"
              />
              <span>$</span>
            </div>

            <Button className="bg-yellow-500 text-[#404040] p-4 rounded-2xl font-quicksand text-[11.14px] font-medium leading-[13.93px] ">
              Send the transfer
              <div className="ml-1">
                <svg
                  width="7.28px"
                  height="7.28px"
                  viewBox="0 0 14 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.10173 1.88409L11.7352 11.5175L2.10173 21.151"
                    stroke="#404040"
                    stroke-width="2.58466"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[157px] min-h-[208px] p-4 rounded-3xl shadow-md text-white flex flex-col justify-center items-center relative bg-gradient-to-b from-[#ED654C] to-[#D05842]">
        <div className="absolute inset-0 z-0">
          <Image src={loanImg} alt="loan" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-left font-Suprema text-[20.11px] leading-[24.77px] text-[#FFFFFF] font-bold">
            Get great <br /> loan!
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block ml-1"
            >
              <path
                d="M2.10173 1.88409L11.7352 11.5175L2.10173 21.151"
                stroke="#FFFFFF"
                strokeWidth="2.58466"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTransaction;
