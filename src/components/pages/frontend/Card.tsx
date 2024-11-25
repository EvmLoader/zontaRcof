const Cardx = () => {
  const data = [
    {
      title: "Borrowing & Lending",
      desc: "Borrow against your assets at industry-low interest rates, using your crypto as collateral. Lenders earn attractive returns on their assets, while borrowers enjoy flexible terms that adapt to their financial needs.",
    },
    {
      title: "DeFi Debit Card",
      desc: "Your bridge between the worlds of fiat and decentralized finance. Spend your crypto assets instantly anywhere, without worrying about geographic restrictions.",
    },
    {
      title: "Tokenize RWA",
      desc: "We bring the ability to tokenize real-world assets (RWA) such as property and commodities, enabling a diversified portfolio of traditional and decentralized assets.",
    },
  ];

  return (
    <section className="w-full h-fit bg-[#080A1B] px-4 flex flex-col items-center py-10 sm:px-6 lg:px-8 lg:py-14 text-white">
      <div className="w-full max-w-7xl flex flex-col bg-[#080A1B] gap-8">
        <h1 className="text-9xl font-bold">
          Our Key Features
          <span className="text-gray-400 block mt-2">that we offer</span>
        </h1>
        <div className="relative flex items-center">
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto gap-6 scrollbar-hide">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 sm:w-96 bg-[#1A2238] p-6 rounded-xl shadow-md"
              >
                <div className="p-3 bg-blue-500 rounded-full mb-4 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    aria-label="Icon"
                  >
                    <path
                      d="M12.6836 3.42001C12.8853 3.33037 13.1155 3.33037 13.3172 3.42001L22.6922 7.58668C22.9739 7.71187 23.1554 7.9912 23.1554 8.29945C23.1554 8.6077 22.9739 8.88703 22.6922 9.01222L13.3172 13.1789C13.1155 13.2685 12.8853 13.2685 12.6836 13.1789L3.30862 9.01222C3.02694 8.88703 2.84541 8.6077 2.84541 8.29945C2.84541 7.9912 3.02694 7.71187 3.30862 7.58668L12.6836 3.42001ZM5.54594 8.29945L13.0004 11.6126L20.4549 8.29945L13.0004 4.98635L5.54594 8.29945ZM2.91264 13.1948C3.08759 12.8012 3.54854 12.6239 3.9422 12.7988L13.0004 16.8247L22.0586 12.7988C22.4523 12.6239 22.9132 12.8012 23.0882 13.1948C23.2631 13.5885 23.0858 14.0494 22.6922 14.2244L13.3172 18.391C13.1155 18.4807 12.8853 18.4807 12.6836 18.391L3.30862 14.2244C2.91497 14.0494 2.73768 13.5885 2.91264 13.1948ZM3.9422 18.002C3.54854 17.827 3.08759 18.0043 2.91264 18.3979C2.73768 18.7916 2.91497 19.2525 3.30862 19.4275L12.6836 23.5942C12.8853 23.6838 13.1155 23.6838 13.3172 23.5942L22.6922 19.4275C23.0858 19.2525 23.2631 18.7916 23.0882 18.3979C22.9132 18.0043 22.4523 17.827 22.0586 18.002L13.0004 22.0278L3.9422 18.002Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-300 text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardx;
