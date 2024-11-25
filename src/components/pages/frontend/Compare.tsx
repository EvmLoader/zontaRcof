const Compare = () => {
  const data1 = [
    "AI-Powered Robo Advisor",
    "Trade Crypto, Shares, Bonds, Commodities, FX",
    "Purchase ETFs & Other Real World Assets",
    "No KYC Registration",
    "Earn Passive Income Staking",
    "DeFi Debit Card",
  ];
  return (
    <section className="w-full h-fit px-4 flex justify-center items-center flex-col py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1] text-white relative">
      <h1 className="font-semibold text-[4vw] tracking-wider">Compare Us</h1>
      <h1 className="font-semibold text-gray-400 text-[3vw] mb-10">
        With Others.
      </h1>
      <div className="w-full gap-8 my-4 flex flex-col md:flex-row">
        <div
          className="rounded-3xl w-full md:w-1/2  p-8"
          style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
        >
          <p className="text-white font-bold py-4">GOAT Finance</p>
          {data1.map((item) => {
            return (
              <p
                key={item}
                className="items-center flex text-white font-semibold py-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M9.24219 13.2578L15.2422 19.2578L24.2422 5.75781"
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
        <div
          className="rounded-3xl w-full md:w-1/2  p-8"
          style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
        >
          <p className="text-white font-bold py-4">GOAT Finance</p>
          {data1.map((item) => {
            return (
              <p
                key={item}
                className="items-center flex text-white font-semibold py-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M9.24219 13.2578L15.2422 19.2578L24.2422 5.75781"
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
      </div>
      <div className="w-full gap-8 my-4 flex flex-col md:flex-row">
        <div
          className="rounded-3xl w-full md:w-1/3  p-8"
          style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
        >
          <p className="text-white font-bold py-4">GOAT Finance</p>
          {data1.map((item) => {
            return (
              <p
                key={item}
                className="items-center flex text-white font-semibold py-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M9.24219 13.2578L15.2422 19.2578L24.2422 5.75781"
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
        <div
          className="rounded-3xl w-full md:w-1/3  p-8"
          style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
        >
          <p className="text-white font-bold py-4">GOAT Finance</p>
          {data1.map((item) => {
            return (
              <p
                key={item}
                className="items-center flex text-white font-semibold py-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M9.24219 13.2578L15.2422 19.2578L24.2422 5.75781"
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
        <div
          className="rounded-3xl w-full md:w-1/3  p-8"
          style={{ boxShadow: "0px 4px 24px 0px #B6D7FF inset" }}
        >
          <p className="text-white font-bold py-4">GOAT Finance</p>
          {data1.map((item) => {
            return (
              <p
                key={item}
                className="items-center flex text-white font-semibold py-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M9.24219 13.2578L15.2422 19.2578L24.2422 5.75781"
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
      </div>
    </section>
  );
};
export default Compare;
