import useMediaQuery, { breakPoints } from "../hooks/useMediaQuery";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const isDesktop = useMediaQuery(breakPoints.md);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="relative h-full h-[80px] bg-[#0c0b08] text-white">
      <div className="flex items-center justify-between text-[14px] lg:text-[16px] px-[30px] xl:px-[120px] py-[32px]">
        <h1 className="font-bold text-[20px] lg:text-[27px]">
          RESTAURANT.
        </h1>
        <div className="hidden md:flex gap-[32px] font-normal">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              Home
            </Link>
            <Link to="pages" smooth={true} duration={500} className="cursor-pointer">
              Pages
            </Link>
            <Link to="footer" smooth={true} duration={500} className="cursor-pointer">
              Contact Us
            </Link>
            <Link to="aboutChef" smooth={true} duration={500} className="cursor-pointer">
              Blog
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer">
              Landing
            </Link>
        </div>
        <div className="hidden md:flex gap-[32px] ">
            <Link to="landing" smooth={true} duration={500} className="cursor-pointer">
              Log In / Registration
            </Link>
            <div className="w-[1px] h-auto bg-white"/>
            <Link to="landing" smooth={true} duration={500} className="cursor-pointer">
              Book table
            </Link>
        </div>
        {isDesktop ? null : (
          <div className="absolute right-[30px] z-30" onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-7 cursor-pointer" />
            ) : (
              <XIcon className="w-7 cursor-pointer" />
            )}
          </div>
        )}
      </div>

      {isDesktop ? null : (
        <div
          className={
            !nav
              ? "hidden"
              : "flex flex-col gap-[10px] text-center font-semibold text-[30px] w-screen h-screen fixed top-0 p-[20px] pt-[80px] bg-[#000000f7] z-20"
          }
        >
          <Link
            className="w-full cursor-pointer hover:opacity-[0.7] cursor-pointer"
            onClick={handleClose}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="w-full cursor-pointer hover:opacity-[0.7] cursor-pointer"
            onClick={handleClose}
            to="pages"
            smooth={true}
                        duration={500}
          >
            Pages
          </Link>
          <Link
            className="w-full cursor-pointer hover:opacity-[0.7] cursor-pointer"
            onClick={handleClose}
            to="footer"
            smooth={true}
                        duration={500}
          >
            Contact Us
          </Link>
          <Link
            className="w-full cursor-pointer hover:opacity-[0.7] cursor-pointer"
            onClick={handleClose}
            to="aboutChef"
            smooth={true}
            duration={500}
          >
            Blog
          </Link>
          <Link
            className="w-full cursor-pointer hover:opacity-[0.7] cursor-pointer"
            onClick={handleClose}
            to="about"
            smooth={true}
            duration={500}
          >
            Landing
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
