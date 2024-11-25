const Innovative = () => {
  return (
    <section className="w-full h-fit px-4 flex justify-center items-center flex-col py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1] text-white relative">
      <h1 className="font-semibold text-[4vw]">
        Innovative Problem Solving for
      </h1>
      <h1 className="font-semibold text-gray-400 text-[4vw]">
        You Business Needs
      </h1>
      <p className="w-2/3 text-center mt-16">
        RCO Finance is the first AI-Powered decentralized trading platform that
        hosts a machine learning robo advisor giving DeFi investors the market
        edge. <br /> Experience FULL AUTONOMY, LOW FEES, and 10,000s of stocks,
        bonds, commodities, FX, ETF, derivatives & other RWAs. RCO Finance is
        the first automated AI trading platform harnessing blockchain
        technology.
      </p>
      <video
        src="https://rcofinance.com/video/RCO-ready-optimized.mp4"
        autoPlay
        muted
        className="p-4 w-2/3 my-4"
      ></video>
      <p className="z-10 font-black text-5xl flex gap-4 text-white">
        Read White Paper{" "}
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
export default Innovative;
