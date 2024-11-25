import React from "react";

const TokenRenum = () => {
  const data = [
    { price: 20000, perc: 1 },
    { price: 20000, perc: 1 },
    { price: 20000, perc: 1 },
    { price: 20000, perc: 1 },
  ];
  return (
    <div className="w-screen h-fit gap-8  bg-[#080A1B] flex flex-col  items-center justify-start p-8 md:h-auto relative">
      <p className="text-9xl md:text-[4vw] text-white text-center">
        Token <br />
        <span className="text-gray-400">Renumeration</span>
      </p>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="px-4 py-6 min-w-96 w-1/5 h-96 text-white flex flex-col items-center justify-evenly rounded-xl gap-4"
              style={{ boxShadow: "0 5.02px 22.6px #9ec1ff4d inset" }}
            >
              <p className="px-4 w-4/5 py-4 text-white flex justify-center items-center border-gray-400 rounded-full border">
                Level {idx + 1}
              </p>
              <p>Holding</p>
              <p className="text-5xl">{item.price}</p>
              <svg
                width="276"
                height="42"
                viewBox="0 0 276 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-[1600px]:w-[210px]"
              >
                <mask id="path-1-inside-1_48_7759" fill="white">
                  <path d="M0.399902 0H275.6V42H0.399902V0Z"></path>
                </mask>
                <path
                  d="M0.399902 1H275.6V-1H0.399902V1Z"
                  fill="url(#paint0_linear_48_7759)"
                  mask="url(#path-1-inside-1_48_7759)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_48_7759"
                    x1="0.399902"
                    y1="21"
                    x2="275.6"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#140F2A" stop-opacity="0"></stop>
                    <stop offset="0.32" stop-color="white"></stop>
                    <stop offset="0.75" stop-color="white"></stop>
                    <stop
                      offset="1"
                      stop-color="#140F2A"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p>{item.perc}% Dividend</p>
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
    </div>
  );
};

export default TokenRenum;
