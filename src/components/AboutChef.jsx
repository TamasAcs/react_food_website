import aboutBg from "../assets/aboutBg.png"
import aboutChef from "../assets/aboutChef.png"
import decor from "../assets/decor.png"
import quote from "../assets/quote.png"

function AboutChef() {
  return (
    <div
      name="aboutChef"
      className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] relative py-[130px] px-[2rem] md:px-[0.5rem]"
    >
      <img src={aboutBg} alt="bg" className="absolute top-0 left-0 w-screen h-full object-cover"/>

      <div className="col-span-full lg:col-start-2 lg:col-end-14 flex flex-col lg:flex-row items-center gap-[80px]">

      <div className="left relative h-[440px] w-[280px] lg:h-[740px] lg:w-[580px]">
        <div className="h-[440px] w-[280px] lg:h-[740px] lg:w-[580px] overflow-hidden ">
        <img src={aboutChef} alt="" className="h-[440px] w-[280px] lg:h-[740px] lg:w-[580px] object-cover relative scale-150 z-10" />
        </div>
        <div className="bg-[#dcca87] w-2/3 h-2/3 absolute -bottom-[15px] -left-[15px]"/>
        <div className="bg-[#dcca87] w-2/3 h-2/3 absolute -top-[15px] -right-[15px]"/>
      </div>

        <div className="right relative z-10 flex flex-col gap-[45px] max-w-[500px]">
          <div className="flex flex-col gap-[16px] text-[#AAAAAA]">
            <p className="fontFam text-[23px] font-bold text-white">Chef’s Word</p>
            <img src={decor} alt="/" className="w-[40px]"/>
            <p className="fontFam text-[#dcca87] text-[50px] xl:text-[60px] font-bold">What we believe in</p>
          </div>

          <div className=" text-[#AAAAAA] font-normal">
            <div className="flex items-end gap-[10px]">
            <img src={quote} alt="quote" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          </div>


        <div className="  font-normal">
          <p className="fontFam text-[#dcca87] text-[32px]">Kevin Luo</p>
          <p className="text-[#AAAAAA]">Chef & Founder</p>
        </div>

        <div>
          <p className="Hurricane text-[#AAAAAA] text-[64px]  font-normal">Kevin Luo</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutChef;
