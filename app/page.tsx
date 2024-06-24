import { AboutMeCard, DescriptionCard, NavCard, SocialsCard } from "@/components";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="w-[80%] min-h-screen flex items-center justify-center flex-col mx-auto gap-y-6 py-5">
        <DescriptionCard/>
        <NavCard/>
        <AboutMeCard/>
        <SocialsCard/>
        <Footer/>
      </div>
    </div>
  );
}
