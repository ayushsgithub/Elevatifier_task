const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-1">
      <div className="bg-[#f44336] w-full p-2 px-8 flex justify-around items-center rounded flex-wrap space-y-2 md:space-x-0">
        <p className=" text-lg md:text-sm font-thin text-white">
          For the best experience, use our app on your smartphone
        </p>
        <div className="flex">
          <img
            className="w-28 h-10"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="ios"
          />
          <img
            className="w-28 h-10"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="android"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
