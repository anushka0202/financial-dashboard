import React from "react";
import transactions from "@/data/transactionsHistoryData.json";
import shoppingCartImg from "@/assets/shopping-cart.svg";
import truckImg from "@/assets/truck.svg";
import personImg from "@/assets/person.svg";
import foodtImg from "@/assets/food.svg";
import Image from "next/image";

const TransactionHistory = () => {
  return (
    <div className="p-6 rounded-3xl shadow-lg bg-gradient-to-b from-white to-white">
      <h2 className="font-Suprema text-[20.11px] font-bold leading-[24.77px] mb-4 text-[#404040]">
        Transaction History
      </h2>
      <table className="w-full">
        <thead>
          <tr className="text-left font-Suprema text-[14px] leading-[17.24px] text-[#AEAEAE]">
            <th className="font-normal pb-2">Receiver</th>
            <th className="font-normal pb-2">Type</th>
            <th className="font-normal pb-2">Date</th>
            <th className="font-normal pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="py-2 flex items-center gap-2">
                <Image
                  className="p-1 h-[20.4px] w-[20.4px] rounded bg-[#EFEFEF]"
                  src={
                    transaction.icon === "shopping-cart"
                      ? (shoppingCartImg as string)
                      : transaction.icon === "truck"
                      ? (truckImg as string)
                      : transaction.icon === "food"
                      ? (foodtImg as string)
                      : (personImg as string)
                  }
                  alt="icon"
                />
                <span className="text-left font-Suprema text-[14px] leading-[17.24px] text-[#404040] font-normal">
                  {transaction.receiver}
                </span>
              </td>
              <td className="py-2 text-left font-Suprema text-[14px] leading-[17.24px] text-[#C7C7C7] font-normal">
                {transaction.type}
              </td>
              <td className="py-2 text-left font-Suprema text-[14px] leading-[17.24px] text-[#C7C7C7] font-normal">
                {transaction.date}
              </td>
              <td className="py-2 text-left font-Lato text-[14px] leading-[17.24px] text-[#404040] font-bold">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
