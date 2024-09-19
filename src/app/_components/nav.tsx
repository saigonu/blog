import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen((old) => !old);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <motion.div
        className={`z-[999] fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[50rem] flex flex-row justify-between items-center text-white px-4 py-4 md:py-6 rounded-md transition-all ${
          scrollY > 50
            ? "bg-white/30 backdrop-blur-md dark:bg-[#2e1065]/30" // Apply transparency and blur on scroll
            : "bg-transparent"
        }`}
      >
        {/* Navbar links */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-6">
            <Link
              href="https://saig.vercel.app/"
              className="text-white hover:text-gray-300 font-poppins"
            >
              Sai Gonuguntla
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="NavBackdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="z-[500] fixed text-white w-full h-screen overflow-hidden backdrop-blur-lg bg-black/50 flex flex-col items-center justify-content"
              onClick={toggleMenu}
            />

            <motion.div
              key="NavMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="flex flex-col items-center justify-start mt-16 fixed w-full h-auto z-[700] bg-white dark:bg-[#2e1065] border-x border-b text-white border-slate-800/10"
            >
              <div className="flex flex-row w-full text-white justify-evenly py-4">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300"
                >
                  About
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
