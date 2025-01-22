const Navbar3 = () => {
  return (
    <nav className="w-full bg-[#F5F5F5] mb-4 px-4 sm:px-6 lg:px-8">
      <div className="text-center py-2">
        <h3 className="text-sm sm:text-base md:text-lg font-medium leading-[16px] sm:leading-[18px] text-center">
          Hello Nike App
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-medium leading-[16px] sm:leading-[18px] text-center mt-1">
          Download the app to access everything Nike.{" "}
          <a
            href="/"
            className="font-medium text-xs sm:text-sm md:text-base text-blue-600 underline"
          >
            Get Your Great
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar3;
