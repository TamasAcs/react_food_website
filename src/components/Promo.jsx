import promoBg from "../assets/promoBg.png"
import play from "../assets/Play.png"

function Promo() {
  return (
        <div name="promo" className='w-full min-h-[300px] relative'>
        <img src={promoBg} alt="promoBg" className="w-full min-h-[300px] object-cover"/>
        <img src={play} alt="play" className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]" />
        </div>
  )
}

export default Promo