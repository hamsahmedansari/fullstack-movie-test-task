import Image from "next/image";
import React from "react";

const BottomImage = () => {
  return (
    <div className="flex flex-col relative" style={{ zIndex: -1 }}>
      <div className="absolute bottom-0 w-[100%]">
      <img src="/assets/Vector.png" alt="" className="w-[100%] image_height-1" />
      <img src="/assets/Vector (1).png" alt="" className="w-[100%] image_height" />
      </div>
      <div className="absolute bottom-0 w-[100%]">
      <img src="/assets/Vector (3).png" alt="" className="w-[100%] image_height-1" />
      <img src="/assets/Vector (2).png" alt="" className="w-[100%] image_height" />
      </div>
    </div>
  );
};

export default BottomImage;
