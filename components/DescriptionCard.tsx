import { description } from "@/constants";
import Image from "next/image";
import React from "react";

const DescriptionCard = () => {
  return (
    <>
      {/* PROFILE AREA */}
      <div className="w-full h-[300px] rounded-2xl bg-card px-4 py-12 border-t-[6px] border-t-indigo-500 flex items-center justify-between max-md:flex-col max-md:h-fit" role="row" id="start">
        {/* BADGE START */}
        <div className="w-[100px] h-[inherit] mx-2 flex items-center justify-center relative max-md:hidden">
          <div className="floating-item-animation">
            <Image
              src="/id-card-line.png"
              width={102}
              height={102}
              alt="User"
            />
          </div>
        </div>
        {/* BADGE END */}
        {/* DESCRIPTION START */}
        <div className="w-fit h-[inherit] flex items-center justify-center gap-x-5 max-md:flex-col-reverse">
          {/* TEXT CONTENTS */}
          <div className="w-[500px] h-[inherit] text-right py-7 max-md:w-full max-md:text-left">
            <div
              className="w-full h-fit mb-2 text-[2.6rem] font-extrabold"
              role="heading"
            >
              Hagop Hovaguimian
            </div>
            <p className="text-[15px] text-zinc-300 px-2">
              {description}
            </p>
          </div>
          {/* Profile Image */}
          <div className="w-fit h-[inherit] flex items-center justify-center max-md:w-full max-md:justify-start">
            <Image
              src="/me.png"
              width={208}
              height={208}
              className="object-contain rounded-xl"
              alt="Me"
            />
          </div>
        </div>
        {/* DESCRIPTION END */}
      </div>
    </>
  );
};

export default DescriptionCard;
