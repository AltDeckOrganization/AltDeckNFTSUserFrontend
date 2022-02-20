/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { IoIosRocket } from "react-icons/io";

const slides = [
  { 
    src: "https://placeimg.com/640/400/tech", 
    name: "Bit Brawl", 
    desc: "Brawlers from 4 regions fighting for glory. Brawl online with your favorite NFTs and earn rewards"
  },
  {
    src: "https://placeimg.com/640/400/animals",
    name: "Boss Bulls Club",
    desc: "An Ultra-Realistic 3D Generative Art"
  }
]

const SlideShow = () => {
  const sliderSettings = {
    dots: true,
    dotsClass: "custom-slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: true
  }

  return (
    <div className="lg:hidden">
      <Slider {...sliderSettings}>
        {slides.map((item, index) => (
          <div key={index} className="relative h-[590px]">
            <img src={item.src} alt="" className="w-full h-full"/>
            <div className="top-[30%] absolute left-6">
              <h1 className="text-[50px] font-bold text-white m-0">{item.name}</h1>
              <p className="text-[16px] text-white w-[80%]">{item.desc}</p>
              <button 
                className="flex flex-row items-center px-8 py-3 mt-4 font-semibold text-white border-2 border-white rounded-3xl"
              >
                <IoIosRocket className="mr-2" size={25}/>
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlideShow;
