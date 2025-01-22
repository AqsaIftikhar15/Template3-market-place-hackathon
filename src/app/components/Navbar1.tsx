import Image from "next/image";
import Link from "next/link";

export default function Navbar1() {
  return (
    <div className="bg-[#fafafa] flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 md:py-4 mb-4">
      {/* Logo */}
      <Image
        src={"/logo1.png"}
        alt="Website Logo"
        width={24}
        height={14}
        className="object-contain"
      />

      {/* Links Section */}
      <div className="flex sm:gap-3 md:gap-4 gap-2 text-[10px] sm:text-[12px] md:text-[14px] font-medium text-gray-500">
        <Link href="#" className="hover:text-gray-800">Find Store |</Link>
        <Link href="/help" className="hover:text-gray-800"> Help |</Link>
        <Link href="/joinus" className="hover:text-gray-800"> Join Us |</Link>
        <Link href="/signin" className="hover:text-gray-800"> Sign In </Link>
      </div>
    </div>
  );
}
