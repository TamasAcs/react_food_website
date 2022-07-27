import awardsLogo from "../assets/awardsLogo.png"
import awardsImg from "../assets/awardsImg.png"
import awards1 from "../assets/awards1.png"
import awards2 from "../assets/awards2.png"
import awards3 from "../assets/awards3.png"
import awards5 from "../assets/awards5.png"
import aboutBg from "../assets/aboutBg.png"
import G from "../assets/G.png"
import decor from "../assets/decor.png"

function Awards() {
  return (
    <div name="awards" className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] px-[2rem] lg:px-[1rem] relative py-[130px]">
<img src={aboutBg} alt="bg" className="absolute top-0 left-0 w-screen h-full object-cover"/>
<img src={awardsLogo} alt="awardsLogo" className="absolute top-[55px] left-[63px] w-[100px]"/>
        

<div className="col-span-full xl:col-start-3 xl:col-end-14 relative flex flex-col lg:flex-row gap-[100px] justify-between items-center pt-[50px] md:pt-0">
  <div className="left flex flex-col gap-[64px]">
      <div className="flex flex-col">
        <p className="fontFam text-white font-bold text-[23px]">Awards & recognition</p>
        <img src={decor} alt="/" className="w-[40px] rotate-180"/>
        <p className="fontFam text-[#DCCA87] font-semibold text-[55px] md:text-[64px]">Our Laurels</p>
      </div>
        <div className="flex flex-col tab:flex-row gap-[32px]">
          <div className="flex gap-[32px] max-w-[340px]">
            <img src={awards2} alt="awards2" className="w-[79px]"/>
            <div>
              <p className="fontFam text-[#DCCA87] text-[23px]">Bib Gourmond</p>
              <p className="text-[#AAAAAA]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="flex gap-[32px] max-w-[340px]">
            <img src={awards1} alt="awards1" className="w-[79px]"/>
            <div>
              <p className="fontFam text-[#DCCA87] text-[23px]">Rising Star</p>
              <p className="text-[#AAAAAA]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col tab:flex-row gap-[32px]">
          <div className="flex gap-[32px] max-w-[340px]">
            <img src={awards5} alt="awards5" className="w-[79px]"/>
            <div>
              <p className="fontFam text-[#DCCA87] text-[23px]">AA Hospitality </p>
              <p className="text-[#AAAAAA]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="flex gap-[32px] max-w-[340px]">
            <img src={awards3} alt="awards3" className="w-[79px]"/>
            <div>
              <p className="fontFam text-[#DCCA87] text-[23px]">Outstanding Chef</p>
              <p className="text-[#AAAAAA]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
  </div>

<div className="right relative">
  <img src={awardsImg} alt="awardsImg" className="max-h-[600px] w-[400px] 2xl:w-[500px]"/>
<img src={G} alt="G" className="absolute bottom-0 -left-[15%] invert max-h-[300px] w-[300px] z-20"/>
</div>
</div>
    </div>
  );
}

export default Awards;
