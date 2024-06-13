import React from "react";
import outcomeStatsData from "@/data/outcomeStatsData.json";

const OutcomeStatistics = () => {
  return (
    <div className="p-6">
      <h2 className="font-Suprema text-[20.11px] font-bold leading-[24.77px] mb-4 text-[#404040]">
        Outcome Statistics
      </h2>
      {outcomeStatsData.map((data, index) => (
        <div key={index} className="flex items-center mb-4">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg mr-4 shadow-lg`}
            style={{ backgroundColor: data.bgColor }}
          >
            <span>
              {data.icon === "flight" ? (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0697 8.92276L5.56066 14.4328L3.69066 13.6558L3.52366 13.8248L5.90366 15.4118L7.49166 17.7918L7.65966 17.6238L6.88366 15.7538L12.3927 10.2458L16.7207 16.4978L16.9307 16.2898L14.0437 8.59376L18.4437 4.19576C18.6098 4.01845 18.7004 3.78351 18.6965 3.54058C18.6925 3.29766 18.5942 3.06579 18.4224 2.89399C18.2506 2.72219 18.0188 2.62393 17.7758 2.61997C17.5329 2.61601 17.298 2.70666 17.1207 2.87276L12.7207 7.27176L5.02666 4.38576L4.81666 4.59476L11.0697 8.92276ZM16.4597 19.4058L12.1297 13.1528L9.08966 16.1928L9.86666 18.0628L7.20066 20.7278L4.55566 16.7608L0.587662 14.1148L3.25366 11.4488L5.12266 12.2248L8.16266 9.18476L1.90966 4.85676L4.55566 2.21176L12.2507 5.09676L15.7977 1.54976C16.0571 1.28409 16.3666 1.07254 16.7084 0.927376C17.0501 0.782214 17.4173 0.706324 17.7886 0.704106C18.1599 0.701888 18.528 0.773385 18.8714 0.914454C19.2149 1.05552 19.527 1.26336 19.7895 1.52591C20.0521 1.78847 20.2599 2.10053 20.401 2.44399C20.542 2.78746 20.6135 3.15552 20.6113 3.52682C20.6091 3.89812 20.5332 4.26529 20.388 4.60705C20.2429 4.94881 20.0313 5.25836 19.7657 5.51776L16.2187 9.06476L19.1047 16.7608L16.4587 19.4058H16.4597Z"
                    fill="#70A6E8"
                  />
                </svg>
              ) : data.icon === "shopping_cart" ? (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00677 17.8556C8.4259 17.8556 8.76568 17.5159 8.76568 17.0967C8.76568 16.6776 8.4259 16.3378 8.00677 16.3378C7.58764 16.3378 7.24786 16.6776 7.24786 17.0967C7.24786 17.5159 7.58764 17.8556 8.00677 17.8556Z"
                    stroke="#F8964C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.3534 17.8556C16.7725 17.8556 17.1123 17.5159 17.1123 17.0967C17.1123 16.6776 16.7725 16.3378 16.3534 16.3378C15.9343 16.3378 15.5945 16.6776 15.5945 17.0967C15.5945 17.5159 15.9343 17.8556 16.3534 17.8556Z"
                    stroke="#F8964C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.93353 1.91839H4.96916L7.00303 12.0802C7.07243 12.4296 7.26251 12.7434 7.53999 12.9668C7.81748 13.1902 8.16469 13.3088 8.52084 13.302H15.8974C16.2536 13.3088 16.6008 13.1902 16.8783 12.9668C17.1558 12.7434 17.3458 12.4296 17.4152 12.0802L18.6295 5.71293H5.72807"
                    stroke="#F8964C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="21px"
                  height="21px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#22A447"
                    d="M441.885,141.649A32.028,32.028,0,0,0,415.669,128H336V80a32.036,32.036,0,0,0-32-32H48A32.036,32.036,0,0,0,16,80V408H69.082a67.982,67.982,0,0,0,133.836,0H309.082a67.982,67.982,0,0,0,133.836,0H496V226.522a23.882,23.882,0,0,0-4.338-13.763ZM47.98,80H304V256H48ZM136,432a36,36,0,1,1,36-36A36.04,36.04,0,0,1,136,432Zm240,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,376,432Zm88-56H440.994a68,68,0,0,0-129.988,0H200.994a68,68,0,0,0-129.988,0H48V288H464Zm0-120H336V160h79.669L464,229.044Z"
                    className="ci-primary"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="flex-1">
            <div className="w-full flex flex-row items-center gap-2">
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="h-2 rounded"
                  style={{
                    width: `${data.percentage}%`,
                    background: data.color,
                  }}
                ></div>
              </div>
              <span className="float-right font-Lato text-[23.98px] leading-[28.77px] text-[#696969] font-medium">
                {data.percentage}%
              </span>
            </div>
            <p className="text-left font-Suprema text-[14px] leading-[17.24px] text-[#AEAEAE] font-normal">
              {data.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutcomeStatistics;
