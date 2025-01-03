import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="https://saig.vercel.app/"
      className="mr-6 flex items-center space-x-2"
    >
      <span className={`font-bold italic font-instrument`}>Sai Gonuguntla</span>
    </Link>
  );
};

export default Logo;
