import React from "react";
import Resume from "../assets/resume.svg";
import Image from "next/image";

function HeroSection() {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-bg_color">
        <div class="flex items-center justify-between text-#3F497F">
          <div class="flex flex-col px-20 p-20 mt-20">
            <p class="font-bold text-6xl text-main_text">
              Build a job-winning
              <br /> resume for free.
            </p>
            <span class="text-xl text-gray p-0 ">
              set yourself apart with a modern resume.
              <br /> Expert tips customizable templates & quick PDF download
              included.
            </span>
            <button className="font-bold mt-10 py-3 px-0 w-56 border-btn_bg text-white rounded-full bg-btn_bg">
              Try for free
            </button>
          </div>
          <Image
            class="h-80 py-2 pr-4 ml-8 gap-10"
            src={Resume}
            alt="Picture of the author"
            width="1000px"
            height="1000px"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
