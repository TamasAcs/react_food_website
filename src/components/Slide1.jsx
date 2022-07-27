import herobg from "../assets/herobg.jpg"
import decor from "../assets/decor.png"

function Slide1() {
  return (
    <div name="slide" className="flex flex-col-reverse md:flex-row items-center h-[650px] max-w-[920px] md:mr-[50px] gap-[100px] lg:gap-[180px] pr-[10px] text-center md:text-left">
      <div className="max-w-[453px] flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[8px]">
        <p className="fontFam text-white text-[23px]">Chase the new Flavour</p>
        <img src={decor} alt="/" className="w-[40px] mx-auto md:mx-0"/>
        </div>
        <p className="fontFam text-[#dcca87] text-[30px] xl:text-[60px] font-bold">The Key To Fine Dining</p>
        <p className="text-[#AAAAAA]">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button className="fontFam bg-[#dcca87] w-[169px] py-[8px] px-[32px] font-bold mx-auto md:mx-0">Explore Menu</button>
      </div>
      <div className="relative h-[180px] md:h-[367px] w-[180px] md:w-[367px]">
        <div className="h-[180px] md:h-[367px] w-[180px] md:w-[367px] overflow-hidden ">
        <img src={herobg} alt="" className="h-[180px] md:h-[367px] w-[180px] md:w-[367px] object-cover relative scale-150 -rotate-90 z-10" />
        </div>
        <div className="bg-[#dcca87] w-2/3 h-2/3 absolute -bottom-[15px] -left-[15px]"/>
        <div className="bg-[#dcca87] w-2/3 h-2/3 absolute -top-[15px] -right-[15px]"/>
      </div>
      </div>
  )
}

export default Slide1