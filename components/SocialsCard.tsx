import { socials } from "@/constants";
import Image from "next/image";
import React from "react";

const SocialsCard = () => {
  return (
    <>
      <div
        className="w-full h-fit rounded-2xl bg-card px-4 py-5 flex items-center justify-between max-md:flex-col max-md:h-fit"
        role="row"
        id="socials"
      >
        <div className="w-full h-[inherit] text-center py-2">
          <div className="text-indigo-300 font-light text-3xl mb-4">
            My Socials
          </div>

          <ul className="w-full h-fit flex items-center justify-center flex-wrap gap-5">
            {socials.map((v) => (
              <li>
                <a href={v.url} target="_blank">
                  <div
                    className="w-[120px] h-[40px] flex items-center justify-start gap-x-2 px-2 py-5 rounded-lg"
                    style={{backgroundColor: v.bg}}
                  >
                    <Image
                      src={v.imgURL}
                      width={22}
                      height={22}
                      className="object-contain"
                      alt={`${v.title} Logo`}
                    />
                    <span>{v.title}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialsCard;
