import React from "react";
import "./Colouredtab.css";

const Colouredtab = ({ theme, text, phoneIcon }) => {
  if (phoneIcon === false) {
    return (
      <div
        style={{ backgroundColor: theme.tabBackground }}
        className="Colouredtab__container flex__container"
      >
        <p className="p__poppins">{text}</p>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: theme.tabBackground }}
      className="Colouredtab__container flex__container"
    >
      <svg
        width="33"
        height="40"
        viewBox="0 0 33 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.45972 0.873418L7.94561 0.188712C10.279 -0.452205 12.7672 0.584807 13.7676 2.61106L15.7522 6.64764C16.6162 8.40519 16.138 10.4732 14.5647 11.7591L10.1889 15.3378C10.4569 17.4795 11.2933 19.5874 12.6933 21.6614C14.0235 23.6682 15.8077 25.4246 17.94 26.8266L23.196 25.3139C25.1898 24.7426 27.3592 25.4014 28.579 26.948L31.4276 30.5507C32.8485 32.35 32.5943 34.8301 30.8316 36.3547L28.9417 37.9889C27.0611 39.6151 24.3742 40.2062 21.8907 39.5374C16.0248 37.961 10.6325 33.2815 5.71154 25.499C0.783648 17.7045 -0.956017 11.0883 0.494859 5.6584C1.10478 3.37339 2.99231 1.55215 5.45972 0.873418Z"
          fill="white"
        />
      </svg>
      <p className="p__poppins">{text}</p>
    </div>
  );
};

export default Colouredtab;
