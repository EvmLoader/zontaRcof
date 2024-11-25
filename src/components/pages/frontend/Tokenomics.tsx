import React from "react";

const TokenRenum = () => {
  const data = [
    { price: 20000, perc: 1 },
    { price: 20000, perc: 1 },
    { price: 20000, perc: 1 },
    { price: 20000, perc: 1 },
  ];
  return (
    <div className="w-screen h-fit gap-8 bg-black flex flex-col  items-center justify-start p-8 md:h-auto relative">
      <p className="text-9xl font-bold md:text-[4vw] text-white text-center">
        Tokenomics <br />
      </p>
      <div className="w-full flex justify-center items-center p-8">
        <img src="/tokenomics.png" alt="" className="hidden md:flex" />
        <img src="/tokenmob.png" alt="" className="flex md:hidden" />
      </div>
    </div>
  );
};

export default TokenRenum;
