import React from "react";
import Resume from "../assets/template_one.webp";
import Image from "next/image";
import Link from "next/link";

function Template() {
  return (
    <div className="bg-bg_color flex justify-center">
      <Link href="/form">
        <Image
          src={Resume}
          alt="Picture of the author"
          width={500}
          height={500}
        ></Image>
      </Link>
    </div>
  );
}

export default Template;
