import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { listingProp } from "types/listingInterface";

export function ListingCard({ name, address, price, id, photos }: listingProp) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="md:flex md:flex-col md:items-center">
      <div
        className="md:w-[90%] md:h-[310px] w-[280px] h-[260px] relative group  "
        onScroll={() => console.log("scrolled")}
      >
        <Link href={`/listings/${id}`}>
          <div
            style={{ backgroundImage: `url(${photos[currentIndex]})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
        </Link>
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/100 text-black cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={15} />
        </div>
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/100 text-black cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={15} />
        </div>
        <div className="flex justify-center py-2 absolute bottom-2 right-[40%]">
          {photos.map((slide, slideIndex) => (
            <div key={slideIndex} className="text-white">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[90%]">
        <Link href={`/listings/${id}`}>
          <div>
            <div className="flex justify-between mt-3">
              <h4 className="font-bold text-gray-700 text-medium capitalize ">
                {name}
              </h4>
              <div className="flex items-center">
                <AiOutlineStar
                  size={16}
                  className="fill-gray-600 stroke-gray-600"
                />
                <span className="text-sm ml-1 font-semibold">4</span>
              </div>
            </div>
            <p className="text-sm my-1 font-light text-gray-500 ">{address}</p>
            <div>
              <span className="text-sm font-bold text-gray-700">${price}</span>
              <span className="text-sm font-semibold text-gray-600 capitalize ml-1">
                night
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
