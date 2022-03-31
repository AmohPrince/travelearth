import React from "react";
import "./Watchtour.css";
import images from "../../assets/assets";
import Subtitle from "../../Components/Subtitle/Subtitle";

const textGroup = {
  text1: "Watch,",
  text2: "our lattest tour",
};
const Watchtour = ({ theme }) => {
  return (
    <div className="Watchtour__container flex__container">
      <div className="Watchtour__left flex__container-v">
        <div className="Sub__container-Head">
          <Subtitle theme={theme} textGroup={textGroup} />
        </div>
        <div className="circle-topright">
          <svg
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="36.5" cy="36.5" r="36.5" fill="#F0C53E" />
          </svg>
        </div>
        <div className="circle-rightmid">
          <svg
            width="30"
            height="30"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="36.5" cy="36.5" r="36.5" fill="#F0C53E" />
          </svg>
        </div>
        <div className="Watchtour__left-text">
          <p className="p__poppins">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, distinctio! Voluptas ducimus tenetur a. Possimus
            tempora quia delectus vero minus, esse provident iure libero ipsa
            odio numquam distinctio est nesciunt dolores commodi atque enim.
            Odio accusamus quas explicabo debitis mollitia.
          </p>
        </div>
        <div className="Watchtour__left-link p__poppins">
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="Watchtour__right">
        <div className="Square__topright">
          <svg
            width="138"
            height="138"
            viewBox="0 0 138 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="138" height="138" rx="20" fill="#EE5060" />
          </svg>
        </div>
        <div className="Square__bottomleft">
          <svg
            width="231"
            height="231"
            viewBox="0 0 231 231"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="231" height="231" rx="20" fill="#F0C53E" />
          </svg>
        </div>
        <div className="Watchtour__right-video">
          <video src={images.flying} muted autoPlay loop></video>
        </div>
        <div className="Center__playbutton">
          <svg
            width="190"
            height="190"
            viewBox="0 0 190 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <circle cx="93" cy="75" r="35" fill="white" />
            </g>
            <path
              d="M105.575 74.7264C106.221 75.115 106.221 76.0517 105.575 76.4403L87.5154 87.3015C86.8489 87.7024 86 87.2223 86 86.4446L86 64.7221C86 63.9444 86.8489 63.4643 87.5154 63.8652L105.575 74.7264Z"
              fill="#23BDEE"
            />
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="190"
                height="190"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="20" />
                <feGaussianBlur stdDeviation="30" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Watchtour;
