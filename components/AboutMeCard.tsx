import { AboutMeRows } from "@/constants";
import Image from "next/image";
import React from "react";

const AboutMeCard = () => {
  return (
    <>
      <div className="w-full h-fit rounded-2xl bg-card px-4 py-5 flex items-center justify-between max-md:flex-col max-md:h-fit" role="row" id="about">
        <div className="w-full h-[inherit] text-center py-2">
          <div className="text-indigo-300 font-light text-3xl mb-4">
            About Me
          </div>

          {AboutMeRows.map((v) => (
            <>
              <p className="text-[15px]">
                <span className="text-zinc-400">{v.key}:</span>
                <span className="text-zinc-300">&nbsp; {v.value}</span>
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMeCard;
