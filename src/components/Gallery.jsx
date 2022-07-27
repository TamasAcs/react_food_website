import decor from "../assets/decor.png"
import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
import gallery4 from "../assets/gallery4.png"
import {
    FaInstagram,
  } from "react-icons/fa";

function Gallery() {
  return (
    <div name="gallery"
    className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] bg-[#0c0b08] px-[1rem] md:px-[0.5rem] py-[100px] overflow-hidden">
        <div className="col-span-full lg:col-start-2 lg:col-end-15 flex flex-col tab:flex-row gap-[50px]">
            <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[8px]">
                <p className="fontFam text-white text-[23px]">Instagram</p>
                <img src={decor} alt="/" className="w-[40px]"/>
                <p className="fontFam text-[#dcca87] text-[60px] font-bold">Photo Gallery</p>
                </div>
                <p className="openSans font-normal text-[#AAAAAA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button className="fontFam bg-[#dcca87] w-[169px] py-[8px] px-[32px] font-bold">View More</button>
            </div>
            <div className="flex gap-[32px] overflow-scroll scrollbar-hide">
                <div className="group relative">
                <img src={gallery1} alt="gallery1" className="w-[200px] tab:w-[300px] max-w-[300px] h-auto"/>
                 <div
            class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-[80%] duration-500 text-white cursor-pointer">
                <FaInstagram className="w-[30px] h-[30px]" />
        </div>
                </div>
                <div className="group relative">
                <img src={gallery2} alt="gallery2" className="w-[200px] tab:w-[300px] max-w-[300px] h-auto"/>
                 <div
            class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-[80%] duration-500 text-white cursor-pointer">
                <FaInstagram className="w-[30px] h-[30px]" />
        </div>
                </div>
                <div className="group relative">
                <img src={gallery3} alt="gallery3" className="w-[200px] tab:w-[300px] max-w-[300px] h-auto"/>
                 <div
            class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-[80%] duration-500 text-white cursor-pointer">
                <FaInstagram className="w-[30px] h-[30px]" />
        </div>
                </div>
                <div className="group relative">
                <img src={gallery4} alt="gallery4" className="w-[200px] tab:w-[300px] max-w-[300px] h-[297px] tab:h-[445px]"/>
                 <div
            class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-[80%] duration-500 text-white cursor-pointer">
                <FaInstagram className="w-[30px] h-[30px]" />
        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery