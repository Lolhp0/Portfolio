import { socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavCard = () => {
  return (
    <>
      <div
        className="w-full h-fit rounded-2xl bg-card px-4 py-5 flex items-center justify-between flex-col"
        role="row"
      >
        <div className="w-full h-fit mb-5 text-center">
        <div className="text-indigo-300 font-light text-3xl mb-4">Navigate</div>
        </div>
        <nav className="w-full h-[inherit]">
            <ul className="w-fit h-[inherit] mx-auto my-0 flex items-center justify-center gap-5">
                <li>
                    <div className="w-fit h-[inherit] p-4 flex items-center justify-center bg-zinc-900 rounded-xl max-[400px]:p-3">
                        <Link href="#start" className="duration-[320ms] text-zinc-600 hover:text-zinc-300 max-[400px]:text-[15px]">Home</Link>
                    </div>
                </li>
                <li>
                    <div className="w-fit h-[inherit] p-4 flex items-center justify-center bg-zinc-900 rounded-xl max-[400px]:p-3">
                        <Link href="#about" className="duration-[320ms] text-zinc-600 hover:text-zinc-300 max-[400px]:text-[15px]">About</Link>
                    </div>
                </li>
                <li>
                    <div className="w-fit h-[inherit] p-4 flex items-center justify-center bg-zinc-900 rounded-xl max-[400px]:p-3">
                        <Link href="#socials" className="duration-[320ms] text-zinc-600 hover:text-zinc-300 max-[400px]:text-[15px]">Socials</Link>
                    </div>
                </li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default NavCard;
