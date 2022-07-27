import useMediaQuery, { breakPoints } from "../hooks/useMediaQuery";
import decor from "../assets/decor.png"
import menuImg from "../assets/menuImg.png"

function Menu() {
  const isDesktop = useMediaQuery(breakPoints.xl);
  return (
    <div
      name="menu"
      className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] md:px-[0.5rem] bg-[#0c0b08] relative py-[130px] px-[1rem] md:px-[0.5rem]"
    >
      <div className="col-span-full md:col-start-2 md:col-end-14 text-[#FFFFFF] flex flex-col items-center gap-[50px]">

        <div className="top flex flex-col items-center gap-[16px]">
          <p className="fontFam text-[23px]">Menu that fits your palatte</p>
          <img src={decor} alt="/" className="w-[40px]"/>
          <p className="fontFam text-[#dcca87] text-[50px] md:text-[60px] font-bold">Today’s Special</p>
        </div>

        <div className="middle flex flex-col tab:flex-row gap-[40px] items-center justify-center">
          <div className="flex flex-col items-center lg:min-w-[380px] gap-[40px] w-[300px]">
            <p className="fontFam text-[40px]">Wine & Beer</p>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Chapel Hill Shiraz <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 56</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">AU | Bottle</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Catena Malbec <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 59</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">AR | Bottle</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">La Vieille Rosé <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 44</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">FR | Bottle</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Rhino Pale Ale <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 31</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">CA | Bottle</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Irish Guinness
             <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 26</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">IE | Bottle</p>
            </div>
          </div>

          {isDesktop ? 
          <img src={menuImg} alt="menuImg" className="max-w-[400px]"/>
            :null}

          <div className="flex flex-col items-center lg:min-w-[380px] gap-[40px] w-[300px]">
            <p className="fontFam text-[40px]">Cocktails</p>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Aperol Spritz <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 56</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">Aperol | Villa Marchesi prosecco | soda | 30ml</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Dark 'N' Stormy <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 59</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">Dark rum | Ginger beer | Slice of lime. </p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Daiquiri <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 44</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">Rum | Citrus juice | Sugar</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Old Fashioned <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 31</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">Bourbon | Brown sugar | Angostura Bitters</p>
            </div>
            <div className="w-full">
            <p className="fontFam text-[#DCCA87] text-[23px] flex items-center w-full">Negroni <span className="h-[1px] w-[50px] lg:w-[100px] bg-[#FAFAFA] ml-auto mr-[32px] block"/><span className="text-[#FFFFFF]">$ 26</span></p>
              <p className="text-[16px] text-[#AAAAAA] mt-[8px]">Gin | Sweet Vermouth | Campari | Orange garnish</p>
          </div>
          </div>
        </div>
        <button className="fontFam bg-[#dcca87] w-[169px] py-[8px] px-[32px] font-bold text-[#0C0C0C]">View More</button>
      </div>
    </div>
  );
}

export default Menu;
