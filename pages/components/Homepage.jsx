import React from "react";
import Image from "next/image";
import style from "../../styles/Homepage.module.css";

function Homepage() {
  return (
    <div>
      <div className={style.intro_Container}>
        <div className={style.Home_text}>
          <p className={style.main_Heading}>Banerasoft</p>
          <p className={style.second_heading}>
            Specializes in onsite and offshore IT consulting,
          </p>
          <button className={style.CaseStudy_btn}>
          Try for free »
          </button>
		  <p>No account needed</p>
        </div>
        <div className={style.landing_page_cover}>
          {/* <Image
            src="/img/AboutCover.avif"
            width={600}
            height={500}
            className={style.cover_img}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
