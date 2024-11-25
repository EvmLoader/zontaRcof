const More = () => {
  const data = [
    {
      title: "Earn Passive Income",
      desc: "      Unlock steady returns with quarterly dividend distributions directly to your wallet. The more you invest, the bigger your rewards. Plus, gain access to exclusive perks like bonus prizes and exciting competitions.",
    },
    {
      title: "Exclusive Token Price Discounts",
      desc: "Enjoy early access to RCOF tokens at a reduced rate, allowing you to buy in before market prices rise. Benefit from the token’s growth potential while maximizing your investment. ",
    },
    {
      title: "Reduced Transaction & Subscription Fees",
      desc: "      Save big with up to 40% off trading fees. As the platform grows, your savings increase, and RCOF holders enjoy complimentary access to the advanced AI Robo-Advisor, further enhancing your trading efficiency.",
    },
    {
      title: "Active Role in Token Governance",
      desc: "  Shape the future of RCO Finance by participating in governance decisions. As a token holder, you have the power to vote on key protocol upgrades, new features, and the allocation of community resources, giving you direct influence over the platform’s growth and development.",
    },
    {
      title: "Massive Gains from Presale Stages",
      desc: "     Stage 1 to Stage 2: Enjoy a 169% boost in value. Stage 1 to Stage 3: Watch your investment grow by 337%. Stage 1 to Stage 4: Gain an incredible 509%. Stage 1 to Bonus Round: Leap to a massive 1,580% gain. Stage 1 to Expected Listing Price: Achieve a staggering 3,000% return!",
    },
    {
      title: "Staking & Dividend",
      desc: " By holding and staking RCOF tokens, you contribute to platform liquidity and receive additional RCOF tokens as rewards. Plus, you'll earn dividends from the platform’s revenue, giving you a share of its profits based on the size of your holdings. The more tokens you hold, the more you earn.",
    },
  ];

  return (
    <section className="w-full h-fit px-4 flex justify-center items-center flex-col py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1] text-white relative">
      <div className="w-full gap-2 justify-center flex  flex-wrap">
        {data.map((item) => {
          return (
            <div
              className="rounded-3xl w-full md:w-1/3 flex flex-col gap-4  p-8"
              style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
            >
              <p className="font-bold">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
      <p className="z-10 mt-8 font-black text-5xl flex gap-4 text-white">
        Join Presale{" "}
        <span className="p-4 shadow-[ 0px 0px 14px 0px #B3D6FF] bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
          >
            <g clip-path="url(#clip0_71_3382)">
              <path
                d="M1.354 7.5752H16.204"
                stroke="#141239"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.1289 1.5L16.2039 7.575L10.1289 13.65"
                stroke="#141239"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_71_3382">
                <rect
                  width="17"
                  height="15"
                  fill="white"
                  transform="translate(0.354004 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </p>
    </section>
  );
};
export default More;
