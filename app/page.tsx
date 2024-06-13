import Image from "next/image";
import Cards from "../components/Cards";
import TransactionHistory from "../components/TransactionHistory";
import Goals from "../components/Goals";
import OutcomeStatistics from "../components/OutcomeStatistics";
import NewTransaction from "../components/NewTransaction";
import userImg from "@/assets/user.svg";
import mailImg from "@/assets/mail.svg";
import bellImg from "@/assets/bell.svg";

export default function Home() {
  return (
    <main className="p-2">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="font-suprema text-[43.37px] font-semibold leading-[53.41px] text-left text-[#404040] ">
            Weekly sumup
          </h1>
          <p className="font-suprema text-16px font-normal leading-19px text-left text-[#AEAEAE] mb-8">
            Get summary of your weekly online transactions here.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Image src={mailImg} alt="mail" className="h-[24px] w-[24px]" />
          <Image src={bellImg} alt="mail" className="h-[24px] w-[24px]" />
          <Image
            src={userImg}
            alt="mail"
            className="h-[35.06px] w-[35.06px] rounded-full bg-[#FFC145]"
          />
          <div className="flex flex-col items-start">
            <span className="text-left font-Suprema text-[14px] leading-[17.24px] text-[#404040] font-medium">
              Andrew
            </span>
            <span className="text-left font-Suprema text-[14px] leading-[17.24px] text-[#AEAEAE] font-normal">
              Admin account
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <Cards />
          <TransactionHistory />
        </div>
        <div className="space-y-4">
          <Goals />
          <OutcomeStatistics />
          <NewTransaction />
        </div>
      </div>
    </main>
  );
}
