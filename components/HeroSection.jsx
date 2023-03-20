import React from "react";
import Resume from "../assets/resume.svg";
import Image from "next/image";

function HeroSection() {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen gap-30">
        <div class="flex items-center justify-between text-black">
          <div class="flex flex-col px-20">
            <p class="text-3xl font-semibold uppercase">
              Build a job-winning resume for free
            </p>
            <span class="text-sm text-black-300">
              set yourself apart with a modern resune expert tips customizable
              templates & quick pdf download included
            </span>
          </div>
          <Image
            class="h-80 py-2 pr-4 ml-8 gap-10"
            src={Resume}
            alt="Picture of the author"
            width="350px"
            height="300px"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
