const Holder = () => {
  return (
    <section className="w-full h-fit px-4 flex justify-center items-center flex-col md:flex-row py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1] text-white relative">
      <div className="w-full md:w-1/2 flex justify-center items-center text-white">
        <p className="text-8xl text-center md:text-left md:text-[5vw]">
          Become a $GTPR <br />
          <span className="text-gray-500">Holder</span>
        </p>
      </div>
      <div className=" w-full md:w-1/2 h-96 flex justify-center items-center">
        <video src="https://rcofinance.com/video/coin.webm" autoPlay></video>
      </div>
    </section>
  );
};
export default Holder;
