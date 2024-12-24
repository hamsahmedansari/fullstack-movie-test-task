import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/authContext";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const {signOut} = useAuth()

  const handleCreateNewMovie = () => {
    router.push("create");
  };

  return (
    <div className="flex justify-between items-center mb-heading-main p-[50px]">
      <div className="flex items-center gap-2 mb-heading-div">
        <h2 className="font-primary text-white font-[600] text-[48px] leading-[56px] text-center mb-heading">
          My movies
        </h2>
        <div onClick={handleCreateNewMovie}>
          <img
            src="/assets/svg/circle.svg"
            alt="Plus-Icon"
            className="mt-2 cursor-pointer mb-heading-image"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={signOut}>
        <p className="font-primary text-white font-[700] text-[16px] leading-[24px] text-center mb-logout">
          Logout
        </p>
        <img src="/assets/svg/logout.svg" alt="Logout-Icon" />
      </div>
    </div>
  );
};

export default Header;
