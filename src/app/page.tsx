import Image from "next/image";
import Navbar3 from "./components/Navbar3";
import Productshowcase from "./components/Productshowcase";

export default function Home() {
  return (
    <>
      <Navbar3 />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Image
          src="/airmax.png"
          alt="airmax"
          className="w-full h-[300px] sm:h-[500px] object-contain mt-0"
          width={1200}
          height={500}
        />
        <div className="space-y-4 mt-6">
          <p className="text-sm">First look</p>
          <h1 className="text-3xl sm:text-4xl font-bold">NIKE AIR MAX PULSE</h1>
          <p className="text-sm sm:text-base max-w-xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Notify Me</button>
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Shop Air Max</button>
          </div>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="flex justify-between items-center flex-wrap w-full px-4 md:px-10">
        <p className="mt-4 text-xl font-bold">Best of Air Max</p>
        <div className="flex items-center">
          <p className="mr-4 text-lg font-medium">Shop</p>
          <div className="flex space-x-4">
            {/* Left Arrow Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
              <span className="text-white text-xl">&#8592;</span>
            </div>
            {/* Right Arrow Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
              <span className="text-white text-xl">&#8594;</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-6 mt-10 px-4 md:px-10">
  {/* Card 1 */}
  <div className="w-full sm:w-[320px] md:w-[300px] lg:w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden mb-4">
    <Image
      src="/shoe1.png"
      alt="Nike Air Max Pulse"
      className="w-full h-[70%] object-cover"
      width={380}
      height={350}
    />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-black">Nike Air Max Pulse</h2>
        <p className="text-sm font-semibold text-black"> ₹ 13,995</p>
      </div>
      <p className="text-[#757575] text-xs">Women&apos;s Shoes</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[320px] md:w-[300px] lg:w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden mb-6">
    <Image
      src="/shoe1.png"
      alt="Nike Air Max Pulse"
      className="w-full h-[70%] object-cover"
      width={380}
      height={350}
    />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-black">Nike Air Max Pulse</h2>
        <p className="text-sm font-semibold text-black"> ₹ 13,995</p>
      </div>
      <p className="text-[#757575] text-xs">Men&apos;s Shoes</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[320px] md:w-[300px] lg:w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden mb-6">
    <Image
      src="/shoe2.png"
      alt="Nike Air Max Pulse"
      className="w-full h-[70%] object-cover"
      width={380}
      height={350}
    />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-black">Nike Air Max 97 SE</h2>
        <p className="text-sm font-semibold text-black"> ₹ 13,995</p>
      </div>
      <p className="text-[#757575] text-xs">Women&apos;s Shoes</p>
    </div>
  </div>
</div>


      {/* Featured Section */}
      <div className="flex justify-between items-center flex-wrap w-full px-4 md:px-10">
        <p className="mt-4 text-xl font-bold">Featured</p>
      </div>
      <div className="flex justify-center mb-10">
        <Image
          src="/feature.png"
          alt="featuring"
          className="w-full h-[300px] sm:h-[500px] object-contain mx-auto"
          width={1200}
          height={500}
        />
      </div>

      {/* Step Into What Feels Good Section */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-sm sm:text-base max-w-xl mx-auto">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Find Your Shoes</button>
          </div>
        </div>
      </div>
      <Productshowcase />
      {/* Gear Up Section */}
      <div className="flex justify-between items-center flex-wrap w-full px-4 md:px-10">
        <p className="mt-4 text-xl font-bold">Shop Men&apos;s</p>
      </div>

      {/* Don&apos;t Miss Section */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4">
          <Image
            src="/dontmiss.png"
            alt="don&apos;t miss"
            className="w-full h-[300px] sm:h-[500px] object-contain mt-0"
            width={1200}
            height={500}
          />
        </div>
      </div>

      {/* Flight Essentials Section */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">FLIGHT ESSENTIALS</h1>
          <p className="text-sm sm:text-base max-w-xl mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Shop</button>
          </div>
        </div>
      </div>

      {/* The Essentials Section */}
      <div className="flex justify-between items-center flex-wrap w-full px-4 md:px-10">
  <p className="mt-4 text-xl font-bold">The Essentials</p>
</div>
<div className="flex flex-wrap justify-center mt-10 px-4 md:px-10">
  <div className="w-full sm:w-[380px] mb-6">
    <div className="relative w-full h-[auto]">
      <Image
        src="/ess1.png"
        alt="Essentials 1"
        className="w-full h-auto object-cover"
        width={380}
        height={250}  // Adjust the height to your desired aspect ratio
      />
    </div>
  </div>
  <div className="w-full sm:w-[380px] mb-6">
    <div className="relative w-full h-[auto]">
      <Image
        src="/ess2.png"
        alt="Essentials 2"
        className="w-full h-auto object-cover"
        width={380}
        height={250}  // Adjust the height to match the aspect ratio
      />
    </div>
  </div>
  <div className="w-full sm:w-[380px] mb-6">
    <div className="relative w-full h-[auto]">
      <Image
        src="/ess3.png"
        alt="Essentials 3"
        className="w-full h-auto object-cover"
        width={380}
        height={250}  // Same here, adjust height for proper aspect ratio
      />
    </div>
  </div>
</div>

      {/* Footer Section */}
      <footer className="bg-transparent text-white py-10 mt-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6">
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Icons</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">Air Force 1</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Huarache</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Air Max 90</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Air Max 95</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Shoes</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">All Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Custom Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Jordan Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Running Shoes</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Clothing</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">All Clothing</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Modest Clothing</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Hoodies & Pullovers</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Shirts & Tops</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Kids&apos;</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">Infants & Toddlers Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Kids&apos; Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Kids&apos; Jordan Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Kids&apos; Basketball Shoes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
