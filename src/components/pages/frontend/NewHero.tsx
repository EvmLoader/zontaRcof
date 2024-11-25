"use client";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = [
    {
      id: 1,
      content: (
        <section className="w-screen h-screen md:min-h-screen gap-8 dark:bg-black  bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col  items-center justify-center md:h-auto relative">
          <div className="pt-4 flex flex-col items-center text-white">
            <p className="font-black pt-16 md;pt-0 text-9xl md:text-[6vw] flex flex-col tracking-wider">
              Presale Tokens
            </p>
            <p className="text-gray-600 text-[5vw] leading-3 tracking-widest font-light">
              Ends <span className="font-semibold">Soon</span>
            </p>
          </div>
          <p className="flex text-white gap-2 items-center py-8">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M30.5593 2.82376H25.8534C25.8534 2.44729 25.8534 2.16494 25.8534 1.78847C25.8534 1.31788 25.3828 0.941406 24.9122 0.941406H7.97105C7.50046 0.941406 7.02987 1.31788 7.02987 1.78847C7.02987 2.16494 6.93575 2.44729 6.93575 2.82376H2.32399C1.75928 2.82376 1.38281 3.29435 1.38281 3.76494V4.89435C1.38281 9.9767 5.0534 14.212 10.0416 14.9649C10.6063 15.9061 11.2652 16.7532 11.924 17.6002H20.9593C21.7122 16.7532 22.371 15.9061 22.8416 14.9649C27.8299 14.1179 31.5005 9.88258 31.5005 4.89435V3.76494C31.5005 3.29435 31.0299 2.82376 30.5593 2.82376ZM3.26517 4.89435V4.70611H6.93575C7.02987 7.52964 7.59458 10.1649 8.81811 12.7061C5.52399 11.5767 3.26517 8.47082 3.26517 4.89435ZM20.2063 9.22376L18.8887 10.5414L19.171 12.4238C19.2652 12.7061 19.0769 12.9885 18.8887 13.1767C18.7946 13.2708 18.6063 13.3649 18.4181 13.3649C18.324 13.3649 18.1358 13.3649 18.0416 13.2708L16.4416 12.4238L14.8416 13.2708C14.5593 13.4591 14.2769 13.3649 13.9946 13.1767C13.7122 12.9885 13.6181 12.7061 13.7122 12.4238L13.9946 10.5414L12.6769 9.22376C12.4887 9.03552 12.3946 8.65905 12.4887 8.3767C12.5828 8.09435 12.8652 7.90611 13.1475 7.81199L14.9358 7.52964L15.7828 5.83552C15.8769 5.55317 16.1593 5.36494 16.5358 5.36494C16.8181 5.36494 17.1005 5.55317 17.2887 5.83552L18.1358 7.52964L19.924 7.81199C20.2063 7.90611 20.4887 8.09435 20.5828 8.3767C20.4887 8.65905 20.3946 9.03552 20.2063 9.22376ZM29.6181 4.89435C29.6181 8.47082 27.3593 11.5767 24.0652 12.7061C25.1946 10.2591 25.7593 7.62376 25.8534 4.70611H29.6181V4.89435ZM20.1122 19.3885H12.771C12.771 20.8943 12.0181 22.4002 10.6063 23.9061C10.324 24.1885 10.5122 24.7532 10.9828 24.7532H22.0887C22.5593 24.7532 22.7475 24.1885 22.4652 23.9061C20.8652 22.3061 20.1122 20.8002 20.1122 19.3885Z"
                  fill="white"
                />
                <path
                  d="M23.1239 26.7295H9.75917C9.28858 26.7295 8.91211 27.106 8.91211 27.5766V30.1177C8.91211 30.6824 9.28858 31.0589 9.85329 31.0589H23.0298C23.5945 31.0589 23.971 30.6824 23.971 30.1177V27.4824C23.971 27.106 23.5945 26.7295 23.1239 26.7295Z"
                  fill="white"
                />
              </svg>
            </span>
            3rd Stage
          </p>
          <div className="hidden md:flex gap-4 flex-col md:flex-row my-4">
            <div className="flex flex-col gap-2 items-center">
              <div className="rounded-[32px] flex gap-4 p-16 min-h-24 min-w-64 bg-[rgba(223,223,223,0.1)] shadow-[inset_0px_4px_14px_0px_#B6D7FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_71_3341)">
                    <path
                      d="M12.832 9.57472L7.3042 0.000244141L18.3599 0.000245107L12.832 9.57472Z"
                      fill="#E0FBFF"
                    />
                    <path
                      d="M23.8872 9.57472L18.3594 0.000244141L29.415 0.000245107L23.8872 9.57472Z"
                      fill="#C6E6FF"
                    />
                    <path
                      d="M18.3599 0L23.8877 9.57447H12.832L18.3599 0Z"
                      fill="#D0EFFF"
                    />
                    <path
                      d="M29.414 0L34.9418 9.57447H23.8862L29.414 0Z"
                      fill="#B3D6FF"
                    />
                    <path
                      d="M29.414 19.1489L23.8862 9.57446H34.9419L29.414 19.1489Z"
                      fill="#9BBFFF"
                    />
                    <path
                      d="M17.083 20.4253L11.5552 10.8508H22.6108L17.083 20.4253Z"
                      fill="#B6D7FF"
                    />
                    <path
                      d="M22.6108 10.8511L28.1386 20.4255H17.083L22.6108 10.8511Z"
                      fill="#9EC1FF"
                    />
                    <path
                      d="M11.5556 10.8511L17.0834 20.4255H6.02783L11.5556 10.8511Z"
                      fill="#C6E6FF"
                    />
                    <path
                      d="M11.5556 30L6.02783 20.4255H17.0835L11.5556 30Z"
                      fill="#CFF0FF"
                    />
                    <path
                      d="M6.02782 20.4253L11.5556 29.9998H0.5L6.02782 20.4253Z"
                      fill="#DEFCFF"
                    />
                    <path
                      d="M22.6109 30L17.083 20.4255H28.1387L22.6109 30Z"
                      fill="#B5D5FF"
                    />
                    <path
                      d="M28.1386 20.4253L33.6664 29.9998H22.6108L28.1386 20.4253Z"
                      fill="#C5E4FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_71_3341">
                      <rect
                        width="35"
                        height="30"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="font-bold text-white text-3xl">
                  1 GOAT = $0.5864
                </h1>
              </div>
              <p className="text-2xl text-white flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M21.0312 21.5L14.0312 14.5L7.03125 21.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                    <path
                      d="M21.0312 14.5L14.0312 7.5L7.03125 14.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                  </svg>
                </span>
                323232322.6 Token Sold
              </p>
            </div>
            <div className="relative w-96 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="201"
                viewBox="0 0 118 201"
                fill="none"
                className="ml-24"
              >
                <g filter="url(#filter0_d_78_109)">
                  <path
                    d="M15.5234 30.0305C32.8874 30.0305 49.6743 36.2651 62.8286 47.5996C75.983 58.9342 84.6304 74.615 87.1969 91.7883C89.7635 108.962 86.0786 126.486 76.8129 141.171C67.5472 155.856 53.3167 166.726 36.7115 171.803"
                    stroke="#5B40FF"
                    stroke-opacity="0.85"
                    stroke-width="28.9878"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_78_109"
                    x="0.523438"
                    y="0.536591"
                    width="116.964"
                    height="200.127"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_78_109"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_78_109"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="text-white text-2xl absolute font-bold">Hello</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="rounded-[32px] flex gap-4 p-16 min-h-24 min-w-64 bg-[rgba(223,223,223,0.1)] shadow-[inset_0px_4px_14px_0px_#B6D7FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M30.5593 2.82376H25.8534C25.8534 2.44729 25.8534 2.16494 25.8534 1.78847C25.8534 1.31788 25.3828 0.941406 24.9122 0.941406H7.97105C7.50046 0.941406 7.02987 1.31788 7.02987 1.78847C7.02987 2.16494 6.93575 2.44729 6.93575 2.82376H2.32399C1.75928 2.82376 1.38281 3.29435 1.38281 3.76494V4.89435C1.38281 9.9767 5.0534 14.212 10.0416 14.9649C10.6063 15.9061 11.2652 16.7532 11.924 17.6002H20.9593C21.7122 16.7532 22.371 15.9061 22.8416 14.9649C27.8299 14.1179 31.5005 9.88258 31.5005 4.89435V3.76494C31.5005 3.29435 31.0299 2.82376 30.5593 2.82376ZM3.26517 4.89435V4.70611H6.93575C7.02987 7.52964 7.59458 10.1649 8.81811 12.7061C5.52399 11.5767 3.26517 8.47082 3.26517 4.89435ZM20.2063 9.22376L18.8887 10.5414L19.171 12.4238C19.2652 12.7061 19.0769 12.9885 18.8887 13.1767C18.7946 13.2708 18.6063 13.3649 18.4181 13.3649C18.324 13.3649 18.1358 13.3649 18.0416 13.2708L16.4416 12.4238L14.8416 13.2708C14.5593 13.4591 14.2769 13.3649 13.9946 13.1767C13.7122 12.9885 13.6181 12.7061 13.7122 12.4238L13.9946 10.5414L12.6769 9.22376C12.4887 9.03552 12.3946 8.65905 12.4887 8.3767C12.5828 8.09435 12.8652 7.90611 13.1475 7.81199L14.9358 7.52964L15.7828 5.83552C15.8769 5.55317 16.1593 5.36494 16.5358 5.36494C16.8181 5.36494 17.1005 5.55317 17.2887 5.83552L18.1358 7.52964L19.924 7.81199C20.2063 7.90611 20.4887 8.09435 20.5828 8.3767C20.4887 8.65905 20.3946 9.03552 20.2063 9.22376ZM29.6181 4.89435C29.6181 8.47082 27.3593 11.5767 24.0652 12.7061C25.1946 10.2591 25.7593 7.62376 25.8534 4.70611H29.6181V4.89435ZM20.1122 19.3885H12.771C12.771 20.8943 12.0181 22.4002 10.6063 23.9061C10.324 24.1885 10.5122 24.7532 10.9828 24.7532H22.0887C22.5593 24.7532 22.7475 24.1885 22.4652 23.9061C20.8652 22.3061 20.1122 20.8002 20.1122 19.3885Z"
                    fill="white"
                  />
                  <path
                    d="M23.1239 26.7295H9.75917C9.28858 26.7295 8.91211 27.106 8.91211 27.5766V30.1177C8.91211 30.6824 9.28858 31.0589 9.85329 31.0589H23.0298C23.5945 31.0589 23.971 30.6824 23.971 30.1177V27.4824C23.971 27.106 23.5945 26.7295 23.1239 26.7295Z"
                    fill="white"
                  />
                </svg>
                <h1 className="font-bold text-white text-3xl">
                  1 GOAT = $0.8778
                </h1>
              </div>
              <p className="text-2xl text-white flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M21.0312 21.5L14.0312 14.5L7.03125 21.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                    <path
                      d="M21.0312 14.5L14.0312 7.5L7.03125 14.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                  </svg>
                </span>
                Total Raised <span className="text-white">$5.82M</span>
              </p>
            </div>
          </div>
          <div className="flex md:hidden gap-4 flex-col md:flex-row my-4">
            <div className="flex flex-col gap-2 items-center">
              <div className="rounded-[32px] flex gap-4 md:py-16 px-16 items-center min-h-24 min-w-64 bg-[rgba(223,223,223,0.1)] shadow-[inset_0px_4px_14px_0px_#B6D7FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_71_3341)">
                    <path
                      d="M12.832 9.57472L7.3042 0.000244141L18.3599 0.000245107L12.832 9.57472Z"
                      fill="#E0FBFF"
                    />
                    <path
                      d="M23.8872 9.57472L18.3594 0.000244141L29.415 0.000245107L23.8872 9.57472Z"
                      fill="#C6E6FF"
                    />
                    <path
                      d="M18.3599 0L23.8877 9.57447H12.832L18.3599 0Z"
                      fill="#D0EFFF"
                    />
                    <path
                      d="M29.414 0L34.9418 9.57447H23.8862L29.414 0Z"
                      fill="#B3D6FF"
                    />
                    <path
                      d="M29.414 19.1489L23.8862 9.57446H34.9419L29.414 19.1489Z"
                      fill="#9BBFFF"
                    />
                    <path
                      d="M17.083 20.4253L11.5552 10.8508H22.6108L17.083 20.4253Z"
                      fill="#B6D7FF"
                    />
                    <path
                      d="M22.6108 10.8511L28.1386 20.4255H17.083L22.6108 10.8511Z"
                      fill="#9EC1FF"
                    />
                    <path
                      d="M11.5556 10.8511L17.0834 20.4255H6.02783L11.5556 10.8511Z"
                      fill="#C6E6FF"
                    />
                    <path
                      d="M11.5556 30L6.02783 20.4255H17.0835L11.5556 30Z"
                      fill="#CFF0FF"
                    />
                    <path
                      d="M6.02782 20.4253L11.5556 29.9998H0.5L6.02782 20.4253Z"
                      fill="#DEFCFF"
                    />
                    <path
                      d="M22.6109 30L17.083 20.4255H28.1387L22.6109 30Z"
                      fill="#B5D5FF"
                    />
                    <path
                      d="M28.1386 20.4253L33.6664 29.9998H22.6108L28.1386 20.4253Z"
                      fill="#C5E4FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_71_3341">
                      <rect
                        width="35"
                        height="30"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="font-bold text-white text-3xl">
                  1 GOAT = $0.5864
                </h1>
              </div>
              <p className="text-2xl text-white flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M21.0312 21.5L14.0312 14.5L7.03125 21.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                    <path
                      d="M21.0312 14.5L14.0312 7.5L7.03125 14.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                  </svg>
                </span>
                323232322.6 Token Sold
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="rounded-[32px] flex gap-4 py-4 items-center md:py-16 px-16 min-h-24 min-w-64 bg-[rgba(223,223,223,0.1)] shadow-[inset_0px_4px_14px_0px_#B6D7FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M30.5593 2.82376H25.8534C25.8534 2.44729 25.8534 2.16494 25.8534 1.78847C25.8534 1.31788 25.3828 0.941406 24.9122 0.941406H7.97105C7.50046 0.941406 7.02987 1.31788 7.02987 1.78847C7.02987 2.16494 6.93575 2.44729 6.93575 2.82376H2.32399C1.75928 2.82376 1.38281 3.29435 1.38281 3.76494V4.89435C1.38281 9.9767 5.0534 14.212 10.0416 14.9649C10.6063 15.9061 11.2652 16.7532 11.924 17.6002H20.9593C21.7122 16.7532 22.371 15.9061 22.8416 14.9649C27.8299 14.1179 31.5005 9.88258 31.5005 4.89435V3.76494C31.5005 3.29435 31.0299 2.82376 30.5593 2.82376ZM3.26517 4.89435V4.70611H6.93575C7.02987 7.52964 7.59458 10.1649 8.81811 12.7061C5.52399 11.5767 3.26517 8.47082 3.26517 4.89435ZM20.2063 9.22376L18.8887 10.5414L19.171 12.4238C19.2652 12.7061 19.0769 12.9885 18.8887 13.1767C18.7946 13.2708 18.6063 13.3649 18.4181 13.3649C18.324 13.3649 18.1358 13.3649 18.0416 13.2708L16.4416 12.4238L14.8416 13.2708C14.5593 13.4591 14.2769 13.3649 13.9946 13.1767C13.7122 12.9885 13.6181 12.7061 13.7122 12.4238L13.9946 10.5414L12.6769 9.22376C12.4887 9.03552 12.3946 8.65905 12.4887 8.3767C12.5828 8.09435 12.8652 7.90611 13.1475 7.81199L14.9358 7.52964L15.7828 5.83552C15.8769 5.55317 16.1593 5.36494 16.5358 5.36494C16.8181 5.36494 17.1005 5.55317 17.2887 5.83552L18.1358 7.52964L19.924 7.81199C20.2063 7.90611 20.4887 8.09435 20.5828 8.3767C20.4887 8.65905 20.3946 9.03552 20.2063 9.22376ZM29.6181 4.89435C29.6181 8.47082 27.3593 11.5767 24.0652 12.7061C25.1946 10.2591 25.7593 7.62376 25.8534 4.70611H29.6181V4.89435ZM20.1122 19.3885H12.771C12.771 20.8943 12.0181 22.4002 10.6063 23.9061C10.324 24.1885 10.5122 24.7532 10.9828 24.7532H22.0887C22.5593 24.7532 22.7475 24.1885 22.4652 23.9061C20.8652 22.3061 20.1122 20.8002 20.1122 19.3885Z"
                    fill="white"
                  />
                  <path
                    d="M23.1239 26.7295H9.75917C9.28858 26.7295 8.91211 27.106 8.91211 27.5766V30.1177C8.91211 30.6824 9.28858 31.0589 9.85329 31.0589H23.0298C23.5945 31.0589 23.971 30.6824 23.971 30.1177V27.4824C23.971 27.106 23.5945 26.7295 23.1239 26.7295Z"
                    fill="white"
                  />
                </svg>
                <h1 className="font-bold text-white text-3xl">
                  1 GOAT = $0.8778
                </h1>
              </div>
              <p className="text-2xl text-white flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M21.0312 21.5L14.0312 14.5L7.03125 21.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                    <path
                      d="M21.0312 14.5L14.0312 7.5L7.03125 14.5"
                      stroke="#03DF84"
                      stroke-width="2.33333"
                    />
                  </svg>
                </span>
                Total Raised <span className="text-white">$5.82M</span>
              </p>
            </div>
            <div className="relative w-96 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="201"
                viewBox="0 0 118 201"
                fill="none"
                className="ml-24"
              >
                <g filter="url(#filter0_d_78_109)">
                  <path
                    d="M15.5234 30.0305C32.8874 30.0305 49.6743 36.2651 62.8286 47.5996C75.983 58.9342 84.6304 74.615 87.1969 91.7883C89.7635 108.962 86.0786 126.486 76.8129 141.171C67.5472 155.856 53.3167 166.726 36.7115 171.803"
                    stroke="#5B40FF"
                    stroke-opacity="0.85"
                    stroke-width="28.9878"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_78_109"
                    x="0.523438"
                    y="0.536591"
                    width="116.964"
                    height="200.127"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_78_109"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_78_109"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="text-white text-2xl absolute font-bold">Hello</p>
            </div>
          </div>
          <p className="font-black text-5xl flex gap-4 text-white">
            Join Pre Sale{" "}
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
      ),
    },
    {
      id: 2,
      content: (
        <section className="w-screen h-screen md:min-h-screen gap-8 dark:bg-black  bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col items-center  md:items-start p-8 text-white justify-center md:h-auto relative">
          <video
            src="/banner_AI.mp4"
            autoPlay={true}
            muted
            loop
            playsInline
            className="absolute z-0 hidden md:flex"
          ></video>
          <h1 className="z-10 pt-16 md:pt-4 font-regular text-center md:text-left text-9xl md:text-[5vw]">
            Advance AI <br /> Powered Defi <br />{" "}
            <span className="font-black text-gray-400">Trading Platform</span>
          </h1>

          <p className="text-xl text-center md:text-left md:text-base z-10">
            <br />
            Experience advanced AI & ML powered investing like never before with
            our fully automated AI-powered robo advisor
            <br />
            Easily convert your crypto into ETFs, Derivatives and other
            Real-World Assets
          </p>
          <p className="z-10 font-black text-5xl flex gap-4 text-white">
            Join Pre Sale{" "}
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
          <video
            src="/banner_AI.mp4"
            autoPlay={true}
            muted
            loop
            playsInline
            className="md:hidden"
          ></video>
        </section>
      ),
    },
    {
      id: 3,
      content: (
        <section className="w-screen h-screen md:min-h-screen gap-8 dark:bg-black  bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col  items-center p-8 text-white justify-center md:h-auto relative">
          <img src="/bg3.png" className="w-full absolute z-10" alt="" />
          <h1 className="z-10 text-center font-regular leading-normal font-black text-9xl md:text-[5vw]">
            Beta Platform <br />
            <span className="text-gray-400 font-normal">Coming Soon</span>
          </h1>
          <p className="text-xl md:text-base z-10 text-center">
            <br />
            Experience advanced AI & ML powered investing like never before with
            our fully automated AI-powered robo advisor
            <br />
            Easily convert your crypto into ETFs, Derivatives and other
            Real-World Assets
          </p>
          <p className="z-10 font-black text-4xl flex gap-4 text-white">
            Join Pre Sale{" "}
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
      ),
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [sections.length]);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sections.map((section) => (
            <div key={section.id} className="w-fit h-full">
              {section.content}
            </div>
          ))}
        </div>

        {/* Optional Navigation Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
