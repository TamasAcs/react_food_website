import useMediaQuery, { breakPoints } from "../hooks/useMediaQuery";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

import aboutBg from "../assets/aboutBg.png"
import decor from "../assets/decor.png"
import NewsLetter from "./NewsLetter"

function Footer() {
  const isDesktop = useMediaQuery(breakPoints.md);
  return (
    <div name="footer" className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] md:px-[0.5rem] relative py-[130px] px-8">
      
      <img src={aboutBg} alt="aboutBg" className="absolute top-0 left-0 h-full w-screen object-cover" />

      <NewsLetter/>

      <div className="col-span-full lg:col-start-2 lg:col-end-14 relative flex flex-col text-center">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-[50px]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-[#F5EFDB] text-[32px] font-normal">Contact Us</p>
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#AAAAAA] font-normal">9 W 53rd St, New York, NY 10019, USA</p>
                <p className="text-[#AAAAAA] font-normal">+1 212-344-1230 <br></br>+1 212-555-1230</p>
              </div>
          </div>

          {isDesktop ? 
          <div className="flex flex-col gap-[32px]">
            <p className="fontFam text-[#DCCA87] text-[64px] font-bold leading-9">RESTAURANT</p>
              <div className="flex flex-col gap-[16px]">
                <p className="text-white">"The best way to find yourself is to lose yourself in the service of others.”</p>
              <img src={decor} alt="/" className="w-[40px] mx-auto"/>
                <div className="flex gap-[20px] m-auto text-2xl text-white">
                  <FaFacebook className="cursor-pointer"/>
                  <FaInstagram className="cursor-pointer"/>
                  <FaTwitter className="cursor-pointer"/>
                </div>
              </div>
            <p className="text-[#AAAAAA] mt-[50px]">2021 Gerícht. All Rights reserved.</p>
          </div>
          :null}

          <div className="flex flex-col gap-[24px]">
            <p className="text-[#F5EFDB] text-[32px] font-normal">Working Hours</p>
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#AAAAAA] font-normal">Monday-Friday: <br></br>08:00 am -12:00 am</p>
                <p className="text-[#AAAAAA] font-normal">Saturday-Sunday: <br></br>07:00am -11:00 pm</p>
              </div>
          </div>

          
          {isDesktop ? null : 
          <div className="flex flex-col gap-[32px]">
            <p className="fontFam text-[#DCCA87] text-[45px] font-bold">RESTAURANT</p>
              <div className="flex flex-col gap-[16px]">
                <p className="text-white">"The best way to find yourself is to lose yourself in the service of others.”</p>
              <img src={decor} alt="/" className="w-[40px] mx-auto"/>
                <div className="flex gap-[20px] m-auto text-2xl text-white">
                  <FaFacebook className="cursor-pointer"/>
                  <FaInstagram className="cursor-pointer"/>
                  <FaTwitter className="cursor-pointer"/>
                </div>
              </div>
            <p className="text-[#AAAAAA] mt-[50px]">2021 Gerícht. All Rights reserved.</p>
          </div>}

        </div>
      </div>
    </div>
  );
}

export default Footer;
