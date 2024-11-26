import React, { useEffect, useState } from "react";

const Roadmap = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const roadmapElement = document.getElementById("roadmap");
      if (roadmapElement) {
        const rect = roadmapElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const roadmapHeight = rect.height;

        // Calculate the visible part of the roadmap
        const visibleStart = Math.max(0, viewportHeight - rect.top);
        const visibleEnd = Math.max(0, viewportHeight - rect.bottom);
        const visibleHeight = Math.min(
          visibleStart,
          roadmapHeight - visibleEnd
        );

        // Update progress percentage without subtracting 20
        const progressPercentage = (visibleHeight / roadmapHeight) * 100;
        setProgress(Math.max(0, Math.min(progressPercentage, 100)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="px-5 w-full h-full bg-[#03040C] md:px-10 lg:px-12 bg-cover bg-no-repeat lgg:px-16 2xl:px-20"
      style={{ backgroundImage: "url(/img/roadmap.png)" }}
    >
      <div className="py-10 sm:py-12 lg:py-16 2xl:py-20 text-white ">
        <div className="flex flex-col items-center roadmap">
          <h2 className="font-bold text-7xl mb-6">Roadmap</h2>
          <p>A Comprehensive Roadmap to Understanding and Success</p>
        </div>
        <div
          className="relative text-white bg-map-bg w-full h-full bg-center bg-cover md:bg-contain bg-no-repeat pt-16 2xl:pt-40 pb-0 px-0 lg:px-4 2xl:px-12 min-[1740px]:px-32"
          id="roadmap"
        >
          <div className="flex flex-col-reverse md:grid items-center grid-cols-2 gap-5 md:gap-48 max-md:w-[80%] max-md:mb-12">
            <div className="md:w-full md:h-96 bannerBtnShadow rounded-[32px] px-6 lg:px-8 md:py-12 h-auto w-auto mb-7 max-md:order-2">
              <div
                className="flex flex-col justify-center items-center p-8 rounded-xl"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
                style={{ boxShadow: "0 5.02px 22.6px #9ec1ff4d inset" }}
              >
                <h4 className="text-xl font-bold">Launch Presale</h4>
                <ul className="mt-6 flex  items-center gap-3 flex-wrap justify-center p-8 rounded-xl flex-col">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Whitepaper and Website Launch</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Platform Setup</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Security Check</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Smart Contract Audit</p>
                  </li>
                </ul>
              </div>
            </div>
            <h4 className=" text-2xl font-bold">Ignition Phase</h4>
          </div>
          <div className="flex flex-col md:grid items-center grid-cols-2 gap-5 md:gap-48 max-md:w-[80%] max-md:mb-12">
            <h4 className="text-right  text-2xl font-bold">Creation Phase</h4>
            <div
              className="md:w-full md:h-96 bannerBtnShadow rounded-[32px] px-6 lg:px-8 py-12 h-auto w-auto mb-7 pb-8"
              style={{ boxShadow: "0 5.02px 22.6px #9ec1ff4d inset" }}
            >
              <div
                className="flex flex-col justify-center items-center max-lg:text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="text-xl font-bold">
                  Launch RCO Finance Platform
                </h4>
                <ul className="mt-6 flex items-center gap-3 flex-wrap justify-center flex-col">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Community Building</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Start Presale</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Launch RCO Finance</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Community Engagement</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Presale scaling</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:grid items-center grid-cols-2 gap-5 md:gap-48 max-md:w-[80%] max-md:mb-12">
            <div
              className="md:w-full md:h-96 bannerBtnShadow rounded-[32px] px-6 lg:px-8 py-12 h-auto w-auto mb-7 max-md:order-2"
              style={{ boxShadow: "0 5.02px 22.6px #9ec1ff4d inset" }}
            >
              <div
                className="flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="text-xl font-bold">Token Release</h4>
                <ul className="mt-6 flex items-center gap-3 flex-wrap justify-center flex-col">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Presale Closure</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>CMC and CG Listing</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Increased Marketing Efforts</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Ecosystem Development</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Token Launch on DEX</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Beta Testing</p>
                  </li>
                </ul>
              </div>
            </div>
            <h4 className=" text-2xl font-bold">Launchpad Phase</h4>
          </div>
          <div className="flex flex-col md:grid items-center grid-cols-2 gap-5 md:gap-48 max-md:w-[80%]">
            <h4 className="text-right text-2xl font-bold">Ultimate Phase</h4>
            <div
              className="md:w-full md:h-96 bannerBtnShadow rounded-[32px] px-6 lg:px-8 py-12 h-auto w-auto mb-7"
              style={{ boxShadow: "0 5.02px 22.6px #9ec1ff4d inset" }}
            >
              <div
                className="flex flex-col justify-center items-center max-lg:text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000"
              >
                <h4 className="text-xl font-bold">
                  Earn Dividends, Build Community
                </h4>
                <ul className="mt-6 flex items-center gap-3 flex-col flex-wrap justify-center ">
                  <li className="flex items-center gap-3 max-lg:text-center">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Launch DeFi Card</p>
                  </li>
                  <li className="flex items-center gap-3 max-lg:text-center">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Launch on CEX</p>
                  </li>
                  <li className="flex items-center gap-3 max-lg:text-center">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Increase liquidity pools</p>
                  </li>
                  <li className="flex items-center gap-3 max-lg:text-center">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Launch lending protocols</p>
                  </li>
                  <li className="flex items-center gap-3 max-lg:text-center">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>Further Smart Contract Audits</p>
                  </li>
                  <li className="flex items-center gap-3 max-lg:text-center">
                    <span className="inline-flex w-1 h-1 rounded-full bg-white"></span>
                    <p>KOL Partnerships</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute self-stretch max-md:right-12 md:left-1/2 top-16 md:top-44 2xl:top-64">
            <div className="roadmap-scale">
              <div className="roadmap-progress-area">
                <div className="roadmap-progress-bar" id="roadmapProgressBar">
                  <div
                    className="roadmap-progress-fill w-2  transition-all duration-500 ease-in-out bg-purple-400"
                    style={{ height: `${progress}%` }}
                  ></div>
                  <div className="w-[70px] h-[70px] rounded-full bg-purple-700 flex justify-center items-center absolute -top-4 -left-8">
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.71733 4.9395H4.91014L4.8036 4.93947C4.16954 4.93921 3.70564 4.93901 3.30039 5.02904C1.87436 5.34586 0.760664 6.45956 0.443847 7.88559C0.353815 8.29083 0.35401 8.75473 0.354276 9.38879L0.354306 9.49534L0.354276 9.60188C0.35401 10.2359 0.353815 10.6998 0.443847 11.1051C0.61443 11.8729 1.01603 12.5502 1.57302 13.0612C1.57073 13.0875 1.56957 13.1142 1.56957 13.1411V14.9522L1.56956 14.9928C1.56956 16.5557 1.56955 17.7844 1.6503 18.7727C1.73261 19.7801 1.90334 20.6175 2.29044 21.3773C2.92455 22.6218 3.93635 23.6336 5.18085 24.2677C5.94059 24.6548 6.77803 24.8255 7.78545 24.9078C8.77366 24.9886 10.0023 24.9886 11.5651 24.9886H11.5651H11.5652H11.5652H11.5654H11.6059H15.2282H15.2687H15.2689H15.269H15.269H15.269C16.8318 24.9886 18.0605 24.9886 19.0487 24.9078C20.0561 24.8255 20.8935 24.6548 21.6533 24.2677C22.8978 23.6336 23.9096 22.6218 24.5437 21.3773C24.9308 20.6175 25.1015 19.7801 25.1838 18.7727C25.2646 17.7844 25.2646 16.5557 25.2646 14.9928V14.9928V14.9522V13.1411C25.2646 13.1142 25.2634 13.0876 25.2611 13.0613C25.8181 12.5502 26.2197 11.8729 26.3903 11.1051C26.4803 10.6998 26.4802 10.2359 26.4799 9.6019L26.4799 9.49534L26.4799 9.38878C26.4802 8.75473 26.4803 8.29083 26.3903 7.88559C26.0735 6.45956 24.9598 5.34586 23.5338 5.02904C23.1285 4.93901 22.6646 4.93921 22.0306 4.93947L21.924 4.9395L19.117 4.9395C18.6807 2.18445 16.2949 0.078125 13.4171 0.078125C10.5394 0.078125 8.15359 2.18445 7.71733 4.9395ZM9.57127 4.9395L17.263 4.9395C16.8521 3.1959 15.2862 1.89812 13.4171 1.89812C11.5481 1.89812 9.98215 3.1959 9.57127 4.9395ZM23.4446 13.9798C23.0603 14.0516 22.6186 14.0514 22.0306 14.0512H22.0306L21.924 14.0512H19.1879V14.3603C19.1879 14.8629 18.7805 15.2703 18.2779 15.2703C17.7754 15.2703 17.3679 14.8629 17.3679 14.3603V14.0512H9.46603V14.3603C9.46603 14.8629 9.05861 15.2703 8.55603 15.2703C8.05345 15.2703 7.64603 14.8629 7.64603 14.3603V14.0512H4.91014L4.8036 14.0512H4.80354C4.21551 14.0514 3.77384 14.0516 3.38956 13.9798L3.38956 14.9522C3.38956 16.5645 3.39027 17.719 3.46425 18.6245C3.53737 19.5193 3.67749 20.0906 3.91208 20.551C4.37169 21.453 5.10507 22.1864 6.00712 22.646C6.46752 22.8806 7.03879 23.0208 7.93366 23.0939C8.83915 23.1678 9.99363 23.1686 11.6059 23.1686H15.2282C16.8405 23.1686 17.995 23.1678 18.9005 23.0939C19.7953 23.0208 20.3666 22.8806 20.827 22.646C21.729 22.1864 22.4624 21.453 22.922 20.551C23.1566 20.0906 23.2967 19.5193 23.3699 18.6245C23.4438 17.719 23.4446 16.5645 23.4446 14.9522V13.9798ZM9.46603 12.2312V11.9297C9.46603 11.4271 9.05861 11.0197 8.55603 11.0197C8.05345 11.0197 7.64603 11.4271 7.64603 11.9297L7.64603 12.2312H4.91014C4.12357 12.2312 3.87859 12.2257 3.69511 12.1849C2.95898 12.0214 2.38407 11.4465 2.22053 10.7104C2.17977 10.5269 2.17431 10.2819 2.17431 9.49534C2.17431 8.70877 2.17977 8.46378 2.22053 8.28031C2.38407 7.54417 2.95898 6.96927 3.69511 6.80572C3.87859 6.76496 4.12357 6.7595 4.91014 6.7595L21.924 6.7595C22.7106 6.7595 22.9556 6.76496 23.139 6.80572C23.8752 6.96927 24.4501 7.54417 24.6136 8.28031C24.6544 8.46378 24.6599 8.70877 24.6599 9.49534C24.6599 10.2819 24.6544 10.5269 24.6136 10.7104C24.4501 11.4465 23.8752 12.0214 23.139 12.1849C22.9556 12.2257 22.7106 12.2312 21.924 12.2312H19.1879V11.9297C19.1879 11.4271 18.7805 11.0197 18.2779 11.0197C17.7754 11.0197 17.3679 11.4271 17.3679 11.9297V12.2312H9.46603Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className={`w-[70px] h-[70px] rounded-full bg-purple-700  flex justify-center items-center absolute top-[370px] sm:top-[390px] md:top-[375px] min-[900px]:top-[280px] min-1100:top-[225px] -left-8`}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_448_1075)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.6593 1.34994C11.6593 0.847363 12.0667 0.439943 12.5693 0.439942L17.4304 0.439941C17.9329 0.439941 18.3404 0.847362 18.3404 1.34994C18.3404 1.85252 17.9329 2.25994 17.4304 2.25994L12.5693 2.25994C12.0667 2.25994 11.6593 1.85252 11.6593 1.34994ZM4.97227 15.9334C4.97227 10.3954 9.46173 5.90589 14.9998 5.90589C20.5378 5.90589 25.0273 10.3953 25.0273 15.9334C25.0273 21.4714 20.5378 25.9609 14.9998 25.9609L8.92338 25.9609C8.4208 25.9609 8.01338 26.3683 8.01338 26.8709C8.01338 27.3735 8.4208 27.7809 8.92338 27.7809L14.9998 27.7809C21.543 27.7809 26.8473 22.4766 26.8473 15.9334C26.8473 9.39019 21.543 4.08589 14.9998 4.08589C8.45657 4.08589 3.15227 9.3902 3.15227 15.9334C3.15227 16.436 3.55969 16.8434 4.06227 16.8434C4.56485 16.8434 4.97227 16.436 4.97227 15.9334ZM1.93701 19.5869C1.93701 19.0843 2.34443 18.6769 2.84701 18.6769L8.9234 18.6769C9.42598 18.6769 9.8334 19.0843 9.8334 19.5869C9.8334 20.0894 9.42598 20.4969 8.9234 20.4969L2.84701 20.4969C2.34443 20.4969 1.93701 20.0894 1.93701 19.5869ZM4.3677 23.229C4.3677 22.7265 4.77512 22.319 5.2777 22.319L12.5694 22.319C13.0719 22.319 13.4794 22.7265 13.4794 23.229C13.4794 23.7316 13.0719 24.139 12.5694 24.139L5.2777 24.139C4.77512 24.139 4.3677 23.7316 4.3677 23.229ZM15.9099 12.2915C15.9099 11.789 15.5025 11.3815 14.9999 11.3815C14.4974 11.3815 14.0899 11.789 14.0899 12.2915L14.0899 17.1527C14.0899 17.6552 14.4974 18.0627 14.9999 18.0627C15.5025 18.0627 15.9099 17.6552 15.9099 17.1527L15.9099 12.2915Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_448_1075">
                          <rect
                            width="29.1667"
                            height="29.1667"
                            fill="white"
                            transform="translate(0.416504 0.13916)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-[70px] h-[70px] rounded-full bg-purple-700 flex justify-center items-center absolute top-[785px] sm:top-[840px] md:top-[775px] min-[900px]:top-[595px] min-[1100px]:top-[504px] min-[1400px]:top-[470px] -left-8">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6836 2.91232C12.8853 2.82268 13.1155 2.82268 13.3172 2.91232L22.6922 7.07899C22.9739 7.20418 23.1554 7.48351 23.1554 7.79176C23.1554 8.10001 22.9739 8.37934 22.6922 8.50453L13.3172 12.6712C13.1155 12.7608 12.8853 12.7608 12.6836 12.6712L3.30862 8.50453C3.02694 8.37934 2.84541 8.10001 2.84541 7.79176C2.84541 7.48351 3.02694 7.20418 3.30862 7.07899L12.6836 2.91232ZM5.54594 7.79176L13.0004 11.1049L20.4549 7.79176L13.0004 4.47866L5.54594 7.79176ZM2.91264 12.6871C3.08759 12.2935 3.54854 12.1162 3.9422 12.2911L13.0004 16.317L22.0586 12.2911C22.4523 12.1162 22.9132 12.2935 23.0882 12.6871C23.2631 13.0808 23.0858 13.5417 22.6922 13.7167L13.3172 17.8833C13.1155 17.973 12.8853 17.973 12.6836 17.8833L3.30862 13.7167C2.91497 13.5417 2.73768 13.0808 2.91264 12.6871ZM3.9422 17.4943C3.54854 17.3193 3.08759 17.4966 2.91264 17.8902C2.73768 18.2839 2.91497 18.7448 3.30862 18.9198L12.6836 23.0865C12.8853 23.1761 13.1155 23.1761 13.3172 23.0865L22.6922 18.9198C23.0858 18.7448 23.2631 18.2839 23.0882 17.8902C22.9132 17.4966 22.4523 17.3193 22.0586 17.4943L13.0004 21.5201L3.9422 17.4943Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-[70px] h-[70px] rounded-full bg-purple-700 flex justify-center items-center absolute -bottom-16 -left-8">
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.71733 4.9395H4.91014L4.8036 4.93947C4.16954 4.93921 3.70564 4.93901 3.30039 5.02904C1.87436 5.34586 0.760664 6.45956 0.443847 7.88559C0.353815 8.29083 0.35401 8.75473 0.354276 9.38879L0.354306 9.49534L0.354276 9.60188C0.35401 10.2359 0.353815 10.6998 0.443847 11.1051C0.61443 11.8729 1.01603 12.5502 1.57302 13.0612C1.57073 13.0875 1.56957 13.1142 1.56957 13.1411V14.9522L1.56956 14.9928C1.56956 16.5557 1.56955 17.7844 1.6503 18.7727C1.73261 19.7801 1.90334 20.6175 2.29044 21.3773C2.92455 22.6218 3.93635 23.6336 5.18085 24.2677C5.94059 24.6548 6.77803 24.8255 7.78545 24.9078C8.77366 24.9886 10.0023 24.9886 11.5651 24.9886H11.5651H11.5652H11.5652H11.5654H11.6059H15.2282H15.2687H15.2689H15.269H15.269H15.269C16.8318 24.9886 18.0605 24.9886 19.0487 24.9078C20.0561 24.8255 20.8935 24.6548 21.6533 24.2677C22.8978 23.6336 23.9096 22.6218 24.5437 21.3773C24.9308 20.6175 25.1015 19.7801 25.1838 18.7727C25.2646 17.7844 25.2646 16.5557 25.2646 14.9928V14.9928V14.9522V13.1411C25.2646 13.1142 25.2634 13.0876 25.2611 13.0613C25.8181 12.5502 26.2197 11.8729 26.3903 11.1051C26.4803 10.6998 26.4802 10.2359 26.4799 9.6019L26.4799 9.49534L26.4799 9.38878C26.4802 8.75473 26.4803 8.29083 26.3903 7.88559C26.0735 6.45956 24.9598 5.34586 23.5338 5.02904C23.1285 4.93901 22.6646 4.93921 22.0306 4.93947L21.924 4.9395L19.117 4.9395C18.6807 2.18445 16.2949 0.078125 13.4171 0.078125C10.5394 0.078125 8.15359 2.18445 7.71733 4.9395ZM9.57127 4.9395L17.263 4.9395C16.8521 3.1959 15.2862 1.89812 13.4171 1.89812C11.5481 1.89812 9.98215 3.1959 9.57127 4.9395ZM23.4446 13.9798C23.0603 14.0516 22.6186 14.0514 22.0306 14.0512H22.0306L21.924 14.0512H19.1879V14.3603C19.1879 14.8629 18.7805 15.2703 18.2779 15.2703C17.7754 15.2703 17.3679 14.8629 17.3679 14.3603V14.0512H9.46603V14.3603C9.46603 14.8629 9.05861 15.2703 8.55603 15.2703C8.05345 15.2703 7.64603 14.8629 7.64603 14.3603V14.0512H4.91014L4.8036 14.0512H4.80354C4.21551 14.0514 3.77384 14.0516 3.38956 13.9798L3.38956 14.9522C3.38956 16.5645 3.39027 17.719 3.46425 18.6245C3.53737 19.5193 3.67749 20.0906 3.91208 20.551C4.37169 21.453 5.10507 22.1864 6.00712 22.646C6.46752 22.8806 7.03879 23.0208 7.93366 23.0939C8.83915 23.1678 9.99363 23.1686 11.6059 23.1686H15.2282C16.8405 23.1686 17.995 23.1678 18.9005 23.0939C19.7953 23.0208 20.3666 22.8806 20.827 22.646C21.729 22.1864 22.4624 21.453 22.922 20.551C23.1566 20.0906 23.2967 19.5193 23.3699 18.6245C23.4438 17.719 23.4446 16.5645 23.4446 14.9522V13.9798ZM9.46603 12.2312V11.9297C9.46603 11.4271 9.05861 11.0197 8.55603 11.0197C8.05345 11.0197 7.64603 11.4271 7.64603 11.9297L7.64603 12.2312H4.91014C4.12357 12.2312 3.87859 12.2257 3.69511 12.1849C2.95898 12.0214 2.38407 11.4465 2.22053 10.7104C2.17977 10.5269 2.17431 10.2819 2.17431 9.49534C2.17431 8.70877 2.17977 8.46378 2.22053 8.28031C2.38407 7.54417 2.95898 6.96927 3.69511 6.80572C3.87859 6.76496 4.12357 6.7595 4.91014 6.7595L21.924 6.7595C22.7106 6.7595 22.9556 6.76496 23.139 6.80572C23.8752 6.96927 24.4501 7.54417 24.6136 8.28031C24.6544 8.46378 24.6599 8.70877 24.6599 9.49534C24.6599 10.2819 24.6544 10.5269 24.6136 10.7104C24.4501 11.4465 23.8752 12.0214 23.139 12.1849C22.9556 12.2257 22.7106 12.2312 21.924 12.2312H19.1879V11.9297C19.1879 11.4271 18.7805 11.0197 18.2779 11.0197C17.7754 11.0197 17.3679 11.4271 17.3679 11.9297V12.2312H9.46603Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
