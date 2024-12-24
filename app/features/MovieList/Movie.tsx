import Image from "next/image";
import React from "react";

interface MovieProps {
  id: string;
  img: string;
  title: string;
  year: string;

  onClick: (id: string) => void;
}

const Movie: React.FC<MovieProps> = ({ id, img, title, year, onClick }) => {
  return (
    <div
      className="mb-r w-[282px] h-[504px] cursor-pointer rounded-[12px] flex flex-col gap-[16px] bg-[#092C39]"
      onClick={() => onClick(id)}
    >
      <div className="flex justify-center">
        <img
          src={img}
          alt=""
          width={266}
          height={400}
          className="rounded-[12px] mt-2 h-[400px] mb-r-img"
        />
      </div>
      <div className="pl-3">
        <p className="font-primary text-white font-[500] text-[20px] leading-[32px]">
          {title}
        </p>
        <p className="font-primary text-white font-[400] text-[14px] leading-[24px]">
          {year}
        </p>
      </div>
    </div>
  );
};

export default Movie;
