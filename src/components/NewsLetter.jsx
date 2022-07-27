import useMediaQuery, { breakPoints } from "../hooks/useMediaQuery";
import decor from "../assets/decor.png"

function NewsLetter() {
  const isDesktop = useMediaQuery(breakPoints.xl);
    
  const scrollToTop = () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
  };

  return (
    <div name="newsletter" className='col-span-full relative mb-[150px]'>
        <div className="flex flex-col gap-[65px] text-center bg-[#0C0C0C] border border-[#DCCA8733] py-[45px] px-[40px] tab:px-[100px] md:px-[200px] max-w-[1000px] mx-auto shadow-3xl">
            <div className="flex flex-col gap-[8px]">
                <p className='fontFam text-white font-bold text-[23px]'>Newsletter</p>
                <img src={decor} alt="/" className="w-[40px] mx-auto"/>
                <p className="fontFam text-[#DCCA87] text-[32px] tab:text-[45px] md:text-[50px] font-semibold">Subscribe to Our Newsletter</p>
                <p className="OpenSans text-white font-normal">And never miss latest Updates!</p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-[32px] items-center">
                <input type="text" placeholder="Email Address" className="w-full h-[40px] border border-[#F5EFDB] outline-none bg-transparent pl-[15px] text-white"/>
                <button className="fontFam bg-[#dcca87] w-[169px] py-[8px] px-[32px] font-bold">Subscribe</button>
            </div>  
       
        </div>
        {isDesktop ? 
        <div className="w-full flex" 
        >
            <div className='ml-auto mr-[50px] flex flex-col items-center gap-[24px] cursor-pointer' onClick={scrollToTop}>
            <div className="w-[1px] h-[61px] bg-[#dcca87]"/>
            <p className="fontFam text-[#dcca87]">TOP</p>
            </div>
        </div>
        :null}
    </div>
  )
}

export default NewsLetter