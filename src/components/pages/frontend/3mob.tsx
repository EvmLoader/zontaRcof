const Mob = () => {
  const data = [
    "Investment & Trading Recommendations",
    "Timely Transaction Execution",
    "Automated Liquidity Provision",
    "Machine Learning Algorithms Behind Robo Advisor",
    "Access to over 15m sources of investment banking grade information",
    "Investment and hedge fund level strategies at a retail price",
  ];
  return (
    <section className="w-full h-fit px-4 flex justify-center items-center flex-col py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1] text-white relative">
      <img src="/img.png" className="w-full min-h-auto" alt="" />
      <h1 className="font-semibold text-[4vw]">
        Innovative Problem Solving for
      </h1>
      <h1 className="font-semibold text-gray-400 text-[4vw]">
        You Business Needs
      </h1>
      <p className="w-2/3 text-center mt-16">
        Blend into the power of AI-driven Robo Advisory that has investment
        banking & hedge fund grade AI-algorithms to help retail traders compete
        with the institutions at a low monthly subscription price. Drive
        real-time market insights, automated portfolio management, and custom
        strategies based on your financial goals, RCO Finance helps you make
        data-driven decisions that maximize gains and minimize risks.
      </p>
      <p className="py-6">Let the future of Finance work for you</p>

      <div className="my-4 flex flex-wrap gap-4 justify-start md:justify-center">
        {data.map((item) => {
          return (
            <p key={item} className="flex items-center gap-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <path
                    d="M9.27344 13.2578L15.2734 19.2578L24.2734 5.75781"
                    stroke="#1CB46A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {item}
            </p>
          );
        })}
      </div>
      <p className="z-10 font-black text-5xl flex gap-4 text-white">
        Join presale{" "}
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
export default Mob;
