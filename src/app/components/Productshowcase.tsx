import Image from "next/image";
import product1 from "../../../public/product1.png";  
import product2 from "../../../public/product2.png";
import product3 from "../../../public/product3.png";
import product4 from "../../../public/product4.png";

export default function ProductShow() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Top Section with Arrows and Title */}
      <div className="w-full flex justify-between items-center py-4">
        <div className="text-lg font-bold">GEAR UP</div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
            <span className="text-black text-xl">&#8592;</span> {/* Left Arrow */}
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
            <span className="text-black text-xl">&#8594;</span> {/* Right Arrow */}
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {/* Card 1 */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={product1}
            alt="Product 1"
            className="w-full h-[60%] object-cover"  // Adjust the image size here
          />
          <div className="p-4">
            <h2 className="text-sm sm:text-base font-bold text-black">Nike Dri-FIT ADV TechKnit Ultra</h2>
            <p className="text-sm sm:text-base font-semibold text-gray-500">₹ 3 895</p>
            <p className="text-xs sm:text-sm text-gray-500">Men&apos;s Short-Sleeve Running Top</p> {/* Use &apos; here */}
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={product2}
            alt="Product 2"
            className="w-full h-[60%] object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm sm:text-base font-bold text-black">Nike Dri-FIT Challenger</h2>
            <p className="text-sm sm:text-base font-semibold text-gray-500">₹ 2 495</p>
            <p className="text-xs sm:text-sm text-gray-500">Men&apos;s 18cm (approx.) 2-in-1 Shorts</p> {/* Use &apos; here */}
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={product3}
            alt="Product 3"
            className="w-full h-[60%] object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm sm:text-base font-bold text-black">Nike Dri-FIT ADV Run Division</h2>
            <p className="text-sm sm:text-base font-semibold text-gray-500">₹ 5 295</p>
            <p className="text-xs sm:text-sm text-gray-500">Women&apos;s Long-Sleeve Running Top</p> {/* Use &apos; here */}
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={product4}
            alt="Product 4"
            className="w-full h-[60%] object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm sm:text-base font-bold text-black">Nike Fast</h2>
            <p className="text-sm sm:text-base font-semibold text-gray-500">₹ 3 795</p>
            <p className="text-xs sm:text-sm text-gray-500">Women&apos;s Mid-Rise 7/8 Running Leggings</p> {/* Use &apos; here */}
          </div>
        </div>
      </div>
    </div>
  );
}
