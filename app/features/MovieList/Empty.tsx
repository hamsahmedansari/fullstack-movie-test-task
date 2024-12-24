import React from "react";
import { useRouter } from "next/navigation";

const EmptyList = () => {
  const router = useRouter();

  const addNewMovie = () => {
    router.push("/create");
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" flex flex-col gap-10 justify-center items-center">
        <div className="w-[591px] h-[56px] empty-text-div">
          <h2 className="font-primary text-white font-[600] text-[48px] leading-[56px] text-center empty-text">
            Your movie list is empty
          </h2>
        </div>
        <div className="w-[202px] h-[56px] rounded-[10px] bg-[#2BD17E] flex gap-[5px] items-center justify-center empty-button-div">
          <button
            onClick={addNewMovie}
            className="text-center text-white empty-button"
          >
            Add a new movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;
