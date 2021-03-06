import React from "react";
import Colouredtab from "../Colouredtab/Colouredtab";
import Logo from "../Logo/Logo";
import "./Topbar.css";
import assets from "../../assets/assets";

const Topbar = ({ theme }) => {
  const location = "head";
  return (
    <>
      <div
        style={{
          backgroundColor: theme.background,
        }}
        className="App__topbar"
      >
        <div className="App__navbar flex__container">
          <Logo theme={theme} location={location} />
          <div className="Navbar__links">
            <ul className="Navbar__list flex__container p__poppins">
              <li style={{ color: theme.linksColor }}>Home</li>
              <li style={{ color: theme.linksColor }}>Events</li>
              <li style={{ color: theme.linksColor }}>About</li>
              <li style={{ color: theme.linksColor }}>Blog</li>
              <li style={{ color: theme.linksColor }}>Contact</li>
            </ul>
          </div>
          <div className="App__topbar-colouredtab">
            <Colouredtab theme={theme} text={theme.phoneNumber} />
          </div>
        </div>
        <div className="App__topbar-body flex__container">
          <div className="Topbar__body-right">
            <div className="p__nunito ">
              <p>
                <span style={{ color: theme.lifeJourney }}>
                  Life is a journey
                </span>
                , not a destination
              </p>
            </div>
            <div>
              <p
                className="p__nunito"
                style={{ color: theme.primarytextcolour }}
              >
                Let’s start your journey with us, your dream will come true...
              </p>
            </div>
            <div className="Topbar__body-rightbtns flex__container">
              <div className="body__rightbtn-colouredtab">
                <Colouredtab
                  theme={theme}
                  text={theme.notPhoneNumber}
                  phoneIcon={theme.phoneIcon}
                />
              </div>

              <div className="Topbar__body-playbutton">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_16_1)">
                    <circle cx="40" cy="40" r="40" fill="white" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_16_1"
                      x="0"
                      y="0"
                      width="80"
                      height="80"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_16_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_16_1"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  className="triangle"
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848875 27.5899 -1.18502e-06 27.1099 -1.15103e-06 26.3321L-4.37791e-08 1.00124C-9.78233e-09 0.223487 0.848874 -0.256561 1.51538 0.14428L22.5751 12.8097Z"
                    fill="#23BDEE"
                  />
                </svg>
              </div>

              <div className="Topbar__body-subtext">
                <p className="p__poppins" style={{ color: theme.linksColor }}>
                  Watch how it works
                </p>
              </div>
            </div>
          </div>
          <div className="Topbar__body-left">
            <div className="small__tab flex__container">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="8" fill="#EE5060" />
                <g clipPath="url(#clip0_20_72)">
                  <path
                    d="M18.125 11.25C17.5826 11.25 17.1429 11.6897 17.1429 12.2322V14.1964H19.1071V12.2322C19.1071 11.6897 18.6674 11.25 18.125 11.25Z"
                    fill="white"
                  />
                  <path
                    d="M31.875 11.25C31.3325 11.25 30.8928 11.6897 30.8928 12.2322V14.1964H32.8571V12.2322C32.8571 11.6897 32.4174 11.25 31.875 11.25Z"
                    fill="white"
                  />
                  <path
                    d="M35.8036 14.1964H32.8571V18.125C32.8571 18.6675 32.4174 19.1072 31.875 19.1072C31.3325 19.1072 30.8928 18.6675 30.8928 18.125V14.1964H19.1071V18.125C19.1071 18.6675 18.6674 19.1072 18.125 19.1072C17.5825 19.1072 17.1428 18.6675 17.1428 18.125V14.1964H14.1964C12.5692 14.1964 11.25 15.5156 11.25 17.1429V35.8036C11.25 37.4309 12.5692 38.75 14.1964 38.75H35.8036C37.4308 38.75 38.75 37.4309 38.75 35.8036V17.1429C38.75 15.5156 37.4308 14.1964 35.8036 14.1964ZM36.7857 35.8036C36.7857 36.346 36.346 36.7857 35.8035 36.7857H14.1964C13.654 36.7857 13.2143 36.346 13.2143 35.8036V23.0357H36.7857V35.8036Z"
                    fill="white"
                  />
                  <path
                    d="M19.1071 25H17.1428C16.6004 25 16.1607 25.4397 16.1607 25.9822C16.1607 26.5246 16.6004 26.9643 17.1428 26.9643H19.1071C19.6495 26.9643 20.0893 26.5246 20.0893 25.9822C20.0893 25.4397 19.6495 25 19.1071 25Z"
                    fill="white"
                  />
                  <path
                    d="M25.9821 25H24.0179C23.4754 25 23.0357 25.4397 23.0357 25.9822C23.0357 26.5246 23.4754 26.9643 24.0179 26.9643H25.9821C26.5246 26.9643 26.9643 26.5246 26.9643 25.9822C26.9643 25.4397 26.5246 25 25.9821 25Z"
                    fill="white"
                  />
                  <path
                    d="M32.8572 25H30.8929C30.3505 25 29.9107 25.4397 29.9107 25.9822C29.9107 26.5246 30.3505 26.9643 30.8929 26.9643H32.8572C33.3996 26.9643 33.8393 26.5246 33.8393 25.9822C33.8393 25.4397 33.3995 25 32.8572 25Z"
                    fill="white"
                  />
                  <path
                    d="M19.1071 28.9286H17.1428C16.6004 28.9286 16.1607 29.3683 16.1607 29.9107C16.1607 30.4532 16.6004 30.8929 17.1428 30.8929H19.1071C19.6495 30.8929 20.0893 30.4532 20.0893 29.9107C20.0893 29.3683 19.6495 28.9286 19.1071 28.9286Z"
                    fill="white"
                  />
                  <path
                    d="M25.9821 28.9286H24.0179C23.4754 28.9286 23.0357 29.3683 23.0357 29.9107C23.0357 30.4532 23.4754 30.8929 24.0179 30.8929H25.9821C26.5246 30.8929 26.9643 30.4532 26.9643 29.9107C26.9643 29.3683 26.5246 28.9286 25.9821 28.9286Z"
                    fill="white"
                  />
                  <path
                    d="M32.8572 28.9286H30.8929C30.3505 28.9286 29.9107 29.3683 29.9107 29.9107C29.9107 30.4532 30.3505 30.8929 30.8929 30.8929H32.8572C33.3996 30.8929 33.8393 30.4532 33.8393 29.9107C33.8393 29.3683 33.3995 28.9286 32.8572 28.9286Z"
                    fill="white"
                  />
                  <path
                    d="M19.1071 32.8571H17.1428C16.6004 32.8571 16.1607 33.2968 16.1607 33.8393C16.1607 34.3817 16.6004 34.8214 17.1428 34.8214H19.1071C19.6495 34.8214 20.0893 34.3817 20.0893 33.8392C20.0893 33.2968 19.6495 32.8571 19.1071 32.8571Z"
                    fill="white"
                  />
                  <path
                    d="M25.9821 32.8571H24.0179C23.4754 32.8571 23.0357 33.2968 23.0357 33.8393C23.0357 34.3817 23.4754 34.8214 24.0179 34.8214H25.9821C26.5246 34.8214 26.9643 34.3817 26.9643 33.8393C26.9643 33.2968 26.5246 32.8571 25.9821 32.8571Z"
                    fill="white"
                  />
                  <path
                    d="M32.8572 32.8571H30.8929C30.3505 32.8571 29.9107 33.2968 29.9107 33.8393C29.9107 34.3817 30.3505 34.8214 30.8929 34.8214H32.8572C33.3996 34.8214 33.8393 34.3817 33.8393 33.8393C33.8393 33.2968 33.3995 32.8571 32.8572 32.8571Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_72">
                    <rect
                      width="27.5"
                      height="27.5"
                      fill="white"
                      transform="translate(11.25 11.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="small__tab-text">
                <p className="p__nunito">250k</p>
                <p className="p__nunito">Plan Your Trip</p>
              </div>
            </div>
            <div>
              <img
                src={assets.plane}
                alt="Travel"
                className="background__plane"
              />
            </div>
            <div className="large__tab flex__container">
              <svg
                width="82"
                height="93"
                viewBox="0 0 82 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="82" height="93" rx="8" fill="#F0C53E" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5 67.1282C18.149 67.1282 17.05 66.2921 17.05 65.2643V42.3659C17.05 41.3381 18.149 40.5021 19.5 40.5021H61.5C62.851 40.5021 63.95 41.3381 63.95 42.3659V65.2643C63.95 66.2921 62.851 67.1282 61.5 67.1282H19.5Z"
                  fill="#EE5060"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.6 67.9263C20.9077 67.9263 20.2311 68.0825 19.6555 68.3751C19.0799 68.6676 18.6313 69.0835 18.3664 69.57C18.1015 70.0565 18.0322 70.5919 18.1672 71.1084C18.3023 71.6249 18.6356 72.0993 19.1251 72.4717C19.6146 72.8441 20.2382 73.0977 20.9172 73.2004C21.5961 73.3032 22.2998 73.2504 22.9394 73.0489C23.5789 72.8474 24.1255 72.5061 24.5101 72.0682C24.8947 71.6304 25.1 71.1156 25.1 70.589V67.9263H21.6Z"
                  fill="#2C2D32"
                />
                <path
                  d="M21.6 72.1875C22.7598 72.1875 23.7 71.4722 23.7 70.5898C23.7 69.7073 22.7598 68.992 21.6 68.992C20.4402 68.992 19.5 69.7073 19.5 70.5898C19.5 71.4722 20.4402 72.1875 21.6 72.1875Z"
                  fill="#495E74"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.4 67.9263C60.0923 67.9263 60.769 68.0825 61.3445 68.3751C61.9201 68.6676 62.3687 69.0835 62.6336 69.57C62.8985 70.0565 62.9678 70.5919 62.8328 71.1084C62.6977 71.6249 62.3644 72.0993 61.8749 72.4717C61.3854 72.8441 60.7618 73.0977 60.0828 73.2004C59.4039 73.3032 58.7002 73.2504 58.0606 73.0489C57.4211 72.8474 56.8745 72.5061 56.4899 72.0682C56.1053 71.6304 55.9 71.1156 55.9 70.589V67.9263H59.4Z"
                  fill="#2C2D32"
                />
                <path
                  d="M59.4 72.1875C60.5598 72.1875 61.5 71.4722 61.5 70.5898C61.5 69.7073 60.5598 68.992 59.4 68.992C58.2402 68.992 57.3 69.7073 57.3 70.5898C57.3 71.4722 58.2402 72.1875 59.4 72.1875Z"
                  fill="#495E74"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.6 39.7033V23.7277C49.6 23.304 49.3787 22.8976 48.9849 22.598C48.5911 22.2984 48.0569 22.1301 47.5 22.1301H33.5C32.943 22.1301 32.4089 22.2984 32.0151 22.598C31.6212 22.8976 31.4 23.304 31.4 23.7277V39.7033H28.6V22.6626C28.6 21.9564 28.9687 21.2792 29.6251 20.7799C30.2815 20.2805 31.1717 20 32.1 20H48.9C49.8282 20 50.7185 20.2805 51.3748 20.7799C52.0312 21.2792 52.4 21.9564 52.4 22.6626V39.7033H49.6Z"
                  fill="#495E74"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.3706 23.1952V22.4422C52.2215 21.0768 50.734 20 48.9 20H32.1C31.1717 20 30.2815 20.2805 29.6251 20.7799C28.9687 21.2792 28.6 21.9565 28.6 22.6626V24.7927C28.6 25.0752 28.7475 25.3461 29.01 25.5458C29.2726 25.7456 29.6287 25.8578 30 25.8578C30.3713 25.8578 30.7274 25.7456 30.9899 25.5458C31.2525 25.3461 31.4 25.0752 31.4 24.7927V23.7277C31.4 23.304 31.6212 22.8976 32.0151 22.598C32.4089 22.2984 32.943 22.1301 33.5 22.1301H47.5C48.0569 22.1301 48.5911 22.2984 48.9849 22.598C49.3787 22.8976 49.6 23.304 49.6 23.7277V24.7927C49.6 25.0752 49.7475 25.3461 50.01 25.5458C50.2726 25.7456 50.6287 25.8578 51 25.8578C51.3713 25.8578 51.7274 25.7456 51.9899 25.5458C52.2525 25.3461 52.4 25.0752 52.4 24.7927V23.1952H52.3706Z"
                  fill="#2C2D32"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.6294 39.7033H55.242L59.4 42.8665L46.7517 52.4886L39.7874 47.1905L49.6294 39.7033Z"
                  fill="#EBECED"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.6 39.7033H31.4V64.7319H28.6V39.7033ZM49.6 39.7033H52.4V64.7319H49.6V39.7033Z"
                  fill="#B25A59"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.4 52.4838H28.6C28.2287 52.4838 27.8726 52.596 27.6101 52.7958C27.3475 52.9956 27.2 53.2665 27.2 53.549V55.6793C27.2 55.9618 27.3475 56.2328 27.6101 56.4325C27.8726 56.6323 28.2287 56.7445 28.6 56.7445H31.4C31.7713 56.7445 32.1274 56.6323 32.3899 56.4325C32.6525 56.2328 32.8 55.9618 32.8 55.6793V53.549C32.8 53.2665 32.6525 52.9956 32.3899 52.7958C32.1274 52.596 31.7713 52.4838 31.4 52.4838ZM31.4 55.6793H28.6V53.549H31.4V55.6793Z"
                  fill="#F0C419"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M51 62.6017L49.6 61.5367V67.9269H52.4V61.5367L51 62.6017ZM28.6 61.5367V67.9269H31.4V61.5367L30 62.6017L28.6 61.5367ZM30 52.4838C30.1856 52.4838 30.3637 52.4277 30.4949 52.3279C30.6262 52.228 30.7 52.0925 30.7 51.9513C30.7 51.8101 30.6262 51.6746 30.4949 51.5748C30.3637 51.4749 30.1856 51.4188 30 51.4188C29.8143 51.4188 29.6363 51.4749 29.505 51.5748C29.3737 51.6746 29.3 51.8101 29.3 51.9513C29.3 52.0925 29.3737 52.228 29.505 52.3279C29.6363 52.4277 29.8143 52.4838 30 52.4838ZM30 49.8212C30.1856 49.8212 30.3637 49.7651 30.4949 49.6653C30.6262 49.5654 30.7 49.4299 30.7 49.2887C30.7 49.1475 30.6262 49.012 30.4949 48.9122C30.3637 48.8123 30.1856 48.7562 30 48.7562C29.8143 48.7562 29.6363 48.8123 29.505 48.9122C29.3737 49.012 29.3 49.1475 29.3 49.2887C29.3 49.4299 29.3737 49.5654 29.505 49.6653C29.6363 49.7651 29.8143 49.8212 30 49.8212ZM30 47.1586C30.1856 47.1586 30.3637 47.1025 30.4949 47.0026C30.6262 46.9028 30.7 46.7673 30.7 46.6261C30.7 46.4849 30.6262 46.3494 30.4949 46.2495C30.3637 46.1497 30.1856 46.0936 30 46.0936C29.8143 46.0936 29.6363 46.1497 29.505 46.2495C29.3737 46.3494 29.3 46.4849 29.3 46.6261C29.3 46.7673 29.3737 46.9028 29.505 47.0026C29.6363 47.1025 29.8143 47.1586 30 47.1586ZM30 44.496C30.1856 44.496 30.3637 44.4399 30.4949 44.34C30.6262 44.2402 30.7 44.1047 30.7 43.9635C30.7 43.8223 30.6262 43.6868 30.4949 43.5869C30.3637 43.4871 30.1856 43.431 30 43.431C29.8143 43.431 29.6363 43.4871 29.505 43.5869C29.3737 43.6868 29.3 43.8223 29.3 43.9635C29.3 44.1047 29.3737 44.2402 29.505 44.34C29.6363 44.4399 29.8143 44.496 30 44.496ZM51 52.4838C51.1856 52.4838 51.3637 52.4277 51.4949 52.3279C51.6262 52.228 51.7 52.0925 51.7 51.9513C51.7 51.8101 51.6262 51.6746 51.4949 51.5748C51.3637 51.4749 51.1856 51.4188 51 51.4188C50.8143 51.4188 50.6363 51.4749 50.505 51.5748C50.3737 51.6746 50.3 51.8101 50.3 51.9513C50.3 52.0925 50.3737 52.228 50.505 52.3279C50.6363 52.4277 50.8143 52.4838 51 52.4838ZM51 49.8212C51.1856 49.8212 51.3637 49.7651 51.4949 49.6653C51.6262 49.5654 51.7 49.4299 51.7 49.2887C51.7 49.1475 51.6262 49.012 51.4949 48.9122C51.3637 48.8123 51.1856 48.7562 51 48.7562C50.8143 48.7562 50.6363 48.8123 50.505 48.9122C50.3737 49.012 50.3 49.1475 50.3 49.2887C50.3 49.4299 50.3737 49.5654 50.505 49.6653C50.6363 49.7651 50.8143 49.8212 51 49.8212ZM51 47.1586C51.1856 47.1586 51.3637 47.1025 51.4949 47.0026C51.6262 46.9028 51.7 46.7673 51.7 46.6261C51.7 46.4849 51.6262 46.3494 51.4949 46.2495C51.3637 46.1497 51.1856 46.0936 51 46.0936C50.8143 46.0936 50.6363 46.1497 50.505 46.2495C50.3737 46.3494 50.3 46.4849 50.3 46.6261C50.3 46.7673 50.3737 46.9028 50.505 47.0026C50.6363 47.1025 50.8143 47.1586 51 47.1586ZM51 44.496C51.1856 44.496 51.3637 44.4399 51.4949 44.34C51.6262 44.2402 51.7 44.1047 51.7 43.9635C51.7 43.8223 51.6262 43.6868 51.4949 43.5869C51.3637 43.4871 51.1856 43.431 51 43.431C50.8143 43.431 50.6363 43.4871 50.505 43.5869C50.3737 43.6868 50.3 43.8223 50.3 43.9635C50.3 44.1047 50.3737 44.2402 50.505 44.34C50.6363 44.4399 50.8143 44.496 51 44.496ZM30 55.1464C30.1856 55.1464 30.3637 55.0903 30.4949 54.9905C30.6262 54.8906 30.7 54.7551 30.7 54.6139C30.7 54.4727 30.6262 54.3372 30.4949 54.2374C30.3637 54.1375 30.1856 54.0814 30 54.0814C29.8143 54.0814 29.6363 54.1375 29.505 54.2374C29.3737 54.3372 29.3 54.4727 29.3 54.6139C29.3 54.7551 29.3737 54.8906 29.505 54.9905C29.6363 55.0903 29.8143 55.1464 30 55.1464ZM51 55.1464C51.1856 55.1464 51.3637 55.0903 51.4949 54.9905C51.6262 54.8906 51.7 54.7551 51.7 54.6139C51.7 54.4727 51.6262 54.3372 51.4949 54.2374C51.3637 54.1375 51.1856 54.0814 51 54.0814C50.8143 54.0814 50.6363 54.1375 50.505 54.2374C50.3737 54.3372 50.3 54.4727 50.3 54.6139C50.3 54.7551 50.3737 54.8906 50.505 54.9905C50.6363 55.0903 50.8143 55.1464 51 55.1464Z"
                  fill="#90241D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.4 53.549V55.6793H28.6L27.6102 56.4324C27.8636 56.6252 28.2136 56.7445 28.6 56.7445H31.4C31.7713 56.7445 32.1274 56.6323 32.39 56.4325C32.6525 56.2328 32.8 55.9618 32.8 55.6793V53.549C32.8 53.255 32.6432 52.9887 32.3898 52.7959L31.4 53.549Z"
                  fill="#FCF062"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.4 52.4838H49.6C49.2287 52.4838 48.8726 52.596 48.6101 52.7958C48.3475 52.9956 48.2 53.2665 48.2 53.549V55.6793C48.2 55.9618 48.3475 56.2328 48.6101 56.4325C48.8726 56.6323 49.2287 56.7445 49.6 56.7445H52.4C52.7713 56.7445 53.1274 56.6323 53.3899 56.4325C53.6525 56.2328 53.8 55.9618 53.8 55.6793V53.549C53.8 53.2665 53.6525 52.9956 53.3899 52.7958C53.1274 52.596 52.7713 52.4838 52.4 52.4838ZM52.4 55.6793H49.6V53.549H52.4V55.6793Z"
                  fill="#F0C419"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.4 53.549V55.6793H49.6L48.6102 56.4324C48.8636 56.6252 49.2136 56.7445 49.6 56.7445H52.4C52.7713 56.7445 53.1274 56.6323 53.39 56.4325C53.6525 56.2328 53.8 55.9618 53.8 55.6793V53.549C53.8 53.255 53.6432 52.9887 53.3898 52.7959L52.4 53.549Z"
                  fill="#FCF062"
                />
                <path
                  d="M61.5 41.3009C62.2721 41.3009 62.9 41.7785 62.9 42.3659V65.2643C62.9 65.8517 62.2721 66.3294 61.5 66.3294H19.5C18.7279 66.3294 18.1 65.8517 18.1 65.2643V42.3659C18.1 41.7785 18.7279 41.3009 19.5 41.3009H61.5ZM61.5 39.7033H19.5C18.5717 39.7033 17.6815 39.9838 17.0251 40.4832C16.3687 40.9825 16 41.6597 16 42.3659V65.2643C16 65.9705 16.3687 66.6477 17.0251 67.1471C17.6815 67.6464 18.5717 67.9269 19.5 67.9269H61.5C62.4283 67.9269 63.3185 67.6464 63.9749 67.1471C64.6313 66.6477 65 65.9705 65 65.2643V42.3659C65 41.6597 64.6313 40.9825 63.9749 40.4832C63.3185 39.9838 62.4283 39.7033 61.5 39.7033Z"
                  fill="#B25A59"
                />
              </svg>
              <div className="small__tab-text">
                <p className="p__nunito">Upcoming Trips</p>
                <p className="p__nunito">Today at 12.00PM</p>
                <Colouredtab
                  theme={theme}
                  phoneIcon={theme.phoneIcon}
                  text={theme.text}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="App__topbar__curve"
        style={{
          backgroundColor: theme.background,
        }}
      ></div>
    </>
  );
};

export default Topbar;
