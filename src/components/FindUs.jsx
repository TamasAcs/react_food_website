import aboutBg from "../assets/aboutBg.png"
import findUsImg from "../assets/findUsImg.png"
import decor from "../assets/decor.png"

function FindUs() {
  return (
    <div name="findUs" className='grid grid-cols-6 md:grid-cols-14 gap-x-[32px] md:px-[0.5rem] relative py-[130px] px-8'>
      <img src={aboutBg} alt="aboutBg" className="absolute top-0 left-0 h-full w-screen object-cover" />
      <div className="col-span-full lg:col-start-3 lg:col-end-14 flex flex-col md:flex-row items-center justify-around gap-[100px]">
      <div className="max-w-[453px] flex flex-col gap-[64px] relative">
        <div className="flex flex-col gap-[8px]">
        <p className="fontFam text-white text-[23px]">Contact</p>
        <img src={decor} alt="/" className="w-[40px]"/>
        <p className="fontFam text-[#dcca87] text-[60px] font-bold">Find Us</p>
        </div>
        <div className="flex flex-col gap-[32px]">
        <p className="text-[#AAAAAA]">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <div className="flex flex-col gap-[16px]">
        <p className="fontFam text-[#dcca87] text-[23px]">Opening Hours</p>
        <p className="text-white">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="text-white">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        </div>
        <button className="fontFam bg-[#dcca87] w-[120px] py-[8px] px-[32px] font-bold">Visit Us</button>
      </div>
      <div className="relative w-[300px] h-[450px] xl:h-[600px] xl:w-[520px]">
        <div className="w-[300px] h-[450px] xl:h-[600px] xl:w-[520px] overflow-hidden ">
        <img src={findUsImg} alt="" className="w-[300px] h-[450px] xl:h-[600px] xl:w-[520px] object-cover relative z-10" />
        </div>
        <div className="bg-[#dcca87] w-2/3 h-2/3 absolute -bottom-[15px] -left-[15px]"/>
        <div className="bg-[#dcca87] w-2/3 h-2/3 absolute -top-[15px] -right-[15px]"/>
      </div>
      </div>
    </div>
  )
}

export default FindUs