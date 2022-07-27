import useMediaQuery, { breakPoints } from "../hooks/useMediaQuery";
import aboutBg from "../assets/aboutBg.png"
import G from "../assets/G.png"
import knife from "../assets/aboutImg.png"
import decor from "../assets/decor.png"

function About() {
  const isDesktop = useMediaQuery(breakPoints.md);
  return (
    <div
      name="about"
      className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] md:px-[0.5rem] relative py-[130px] px-[1rem] md:px-[0.5rem]"
    >
        <img src={aboutBg} alt="bg" className="absolute top-0 left-0 w-screen h-full object-cover"/>
        <img src={G} alt="G" className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[415px] w-[390px] z-20"/>
    
    <div className="col-span-full md:col-start-1 md:col-end-15 flex flex-col md:flex-row items-center justify-center gap-[85px] z-20">
      <div className="flex flex-col gap-[32px] text-right items-end max-w-[550px]">
        <p className="fontFam text-[#dcca87] font-semibold text-[50px] md:text-[64px]">About Us</p>
        <img src={decor} alt="/" className="w-[40px] rotate-180"/>
        <p className="text-[#AAAAAA] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="fontFam bg-[#dcca87] w-[169px] py-[8px] px-[32px] font-bold">Explore Menu</button>
      </div>
      {isDesktop ? 
      <img src={knife} alt="" />
      :null}
      <div className="flex flex-col gap-[32px] max-w-[550px]">
      <p className="fontFam text-[#dcca87] font-semibold text-[50px] md:text-[64px]">Our History</p>
        <img src={decor} alt="/" className="w-[40px]"/>
        <p className="text-[#AAAAAA] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="fontFam bg-[#dcca87] w-[169px] py-[8px] px-[32px] font-bold">Explore Menu</button>
      </div>
    </div>
    </div>
  );
}

export default About;
