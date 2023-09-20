import Image from "next/image";
import logo from "@/assets/logo.svg";
import banner from "@/assets/BANNER.png";
import icon from "@/assets/icon.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import swipperImage1 from "@/assets/main-swiper-img-1.png";
import swipperImage2 from "@/assets/main-swiper-img-2.png";
import swipperImage3 from "@/assets/main-swiper-img-3.png";
import swipperImage4 from "@/assets/main-swiper-img-4.png";
import star from "@/assets/star.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function Home() {
  const [swipper, setSwipper] = useState<any>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTo = (index: number) => {
    if (swipper) {
      setSlideIndex(index);
      swipper?.slideTo(index);
    }
  };

  const slides = [swipperImage1, swipperImage2, swipperImage3, swipperImage4];

  return (
    <main className="relative h-screen overflow-auto aspect-[9/19.5] my-0 mx-auto">
      <div className="bg-[#F19D2F] text-[#2C2B31] flex items-center justify-center text-[12.694px] font-normal uppercase h-[33px]">
        🇿🇦 SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA 🇿🇦
      </div>
      <div className="h-[92px] bg-[#FFD1AC] flex items-center justify-center">
        <Image src={logo} alt="" />
      </div>
      <div className="w-full relative">
        <Image src={banner} alt="" className="w-full" />
        <div className="absolute bottom-0 left-0 w-[calc(100%_-_26px)] my-0 mx-[13px] mb-4 flex justify-between items-center ">
          <div className="h-[58px] bg-[#F19D2F] grid items-center justify-center px-2 text-white text-[10.599px] font-bold uppercase rounded-md">
            <div className="mt-[9px]">Limited offer</div>
            <Timer />
          </div>
          <div className="h-[58px] bg-[#37D997] text-white text-[18.077px] font-bold uppercase rounded-md grid items-center justify-center px-2">
            <div className="text-center relative flex items-center justify-center">
              R 250.00
              <div className="absolute w-[100%] r-[-5px] h-[3.5px] bg-[#E27500]" />
            </div>
            <div className="text-[22.301px]">R 160.00</div>
          </div>
        </div>
      </div>
      <div className="w-full px-[16px] relative bg-[#fff] items-center py-[11px] pb-[50px]">
        <div className="w-full flex h-[20px] justify-center">
          <div className="absolute left-[16px] text-[#2C2B31] text-[12.067px]">
            Excellent 4.8/5
          </div>
          <Image src={icon} alt="" />
          <div className="text-[#37D997] text-[12.067px] underline absolute right-[16px]">
            best selling
          </div>
        </div>
        <div className="pt-[20px]">
          <div className="text-[#2C2B31] text-[19.168px] font-bold uppercase mb-[20px]">
            Orthopedic Slippers
          </div>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            onSwiper={setSwipper}
          >
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image} alt="" className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`grid grid-cols-4 gap-[12px] mt-[20px]`}>
          {slides.map((image, index) => (
            <div className="relative" key={index}>
              <Image
                src={image}
                alt=""
                className="w-full"
                onClick={() => slideTo(index)}
              />
              {slideIndex === index ? (
                <div className="absolute w-full h-full top-0 left-0 bg-[rgba(255,255,255,0.6)] blur-[5px]" />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className="mt-[20px] grid grid-cols-1 gap-[12px]">
          <div className="flex text-black text-[15.29px]">
            <div className="font-bold mr-1">Fast Delivery: </div>
            <div>2-4 days from SA 🇿🇦</div>
          </div>
          <div className="flex text-black text-[15.29px]">
            <div className="font-bold  mr-1">In Stock: </div>
            <div>Shipping from Johannesburg 🇿🇦</div>
          </div>
          <div className="flex">
            <Image src={star} alt="star" className="mr-1" />
            <Image src={star} alt="star" className="mr-1" />
            <Image src={star} alt="star" className="mr-1" />
            <Image src={star} alt="star" className="mr-1" />
            <Image src={star} alt="star" className="mr-2" />
            (10)
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[16px] mt-[20px] mb-[20px]">
          <div>
            <div className="text-[#2C2B31] text-center text-[14px] mb-1">
              color
            </div>
            <Select defaultValue="Black">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="Orange">Orange</SelectItem>
                  <SelectItem value="Pink">Pink</SelectItem>
                  <SelectItem value="Yellow">Yellow</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-[#2C2B31] text-center text-[14px] mb-1">
              size
            </div>
            <Select defaultValue="2">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Link href="https://youtube.com">
          <div className="text-white flex justify-center items-center text-3xl uppercase h-[50px] w-full bg-[#37D997] rounded-[15px]">
            buy now
          </div>
        </Link>
      </div>
    </main>
  );
}

const Timer = () => {
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <>0</>;
    } else {
      return (
        <span className="text-[21.254px] font-bold uppercase">
          {hours}:{minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </span>
      );
    }
  };

  return <Countdown date={Date.now() + 17476000} renderer={renderer} />;
};
