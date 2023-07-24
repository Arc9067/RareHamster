import React from "react";

function Header() {
  return (
    <header className="py-4 w-full absolute top-0">
      <div className="container flex items-center justify-between">
        <a href="" className="">
          <div className="text-white text-3xl font-kidGames">RARE-HAMSTER</div>
        </a>
        <a href="" className="hidden md:block hover:scale-90 transition">
          <div className="w-[253px] h-[54px] px-8 py-4 bg-gradient-to-r from-teal-300 to-teal-400 rounded shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-slate-950 text-base font-kidGames leading-snug tracking-tight">
              BUY RARE HAMSTER
            </div>
          </div>
        </a>
        <a href="" className="md:hidden transition hover:scale-90">
          <svg
            width="42"
            height="49"
            viewBox="0 0 42 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1269_442)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7642 3.23937C12.9079 4.72727 10.5711 5.98633 10.5716 6.03754C10.5729 6.16971 17.4268 9.6408 17.67 9.63234C17.7807 9.62863 18.5835 9.25911 19.4539 8.81127L21.0367 7.99717L22.7653 8.88571L24.4938 9.77441L27.3246 8.50241C31.5901 6.5857 32.0331 6.37566 31.9636 6.30509C31.8715 6.21147 30.3416 5.38957 26.1908 3.20431C24.1847 2.14815 22.2377 1.11262 21.8639 0.903082C21.4902 0.693543 21.1334 0.524982 21.0711 0.528245C21.0087 0.531508 18.6206 1.75153 15.7642 3.23937ZM3.23655 9.72663L0.263177 11.2625V18.003C0.263177 21.7104 0.30222 24.7435 0.350112 24.7435C0.397837 24.7435 1.86074 24.1094 3.60093 23.3343L6.76492 21.9251V14.8201L8.31106 15.6625C9.50249 16.311 10.6946 16.9582 11.8875 17.6041L13.9177 18.7033L14.8212 18.2948C15.3877 18.0382 15.9532 17.7791 16.5175 17.5175C16.9535 17.3144 18.024 16.8323 18.8961 16.4459C19.7683 16.0593 20.5757 15.6706 20.6901 15.582C20.8422 15.4643 18.9878 14.4396 13.8313 11.7916C9.9444 9.79559 6.6395 8.16883 6.48709 8.17662C6.33467 8.18442 4.87194 8.88184 3.23655 9.72663ZM32.4995 10.1579C30.4744 11.0721 28.8162 11.8566 28.8143 11.9014C28.8125 11.9461 29.9162 12.6023 31.2671 13.3595C32.618 14.1169 33.7232 14.777 33.7232 14.8267C33.7232 14.8764 32.5279 15.4555 31.0671 16.1141C29.606 16.7724 25.9132 18.4401 22.8606 19.8201L12.6323 24.4434C10.0594 25.6065 7.74018 26.6549 7.47854 26.7734C2.22319 29.1525 0.778702 29.8126 0.580334 29.9259C0.380859 30.04 0.335678 30.7028 0.300174 34.0294L0.257812 37.997L2.91673 39.3518L5.5756 40.7065L9.26253 39.0426C11.2904 38.1275 12.9495 37.3308 12.9495 37.2721C12.9495 37.2136 12.5747 36.9695 12.1169 36.7293C11.6589 36.4892 10.7135 35.9576 10.0157 35.5479C9.31805 35.138 8.62235 34.762 8.46961 34.7121C8.31692 34.6624 8.1942 34.5754 8.19669 34.5187C8.19924 34.4621 9.82279 33.6909 11.8044 32.8048C15.6532 31.084 18.5987 29.7577 24.9221 26.8981C27.7498 25.6196 30.5777 24.342 33.4061 23.0651C35.8918 21.9431 38.7819 20.6327 39.8285 20.1532L41.7315 19.2812L41.7738 15.2684L41.8163 11.2558L39.1195 9.87163C37.6362 9.1104 36.3683 8.48941 36.3018 8.49168C36.2354 8.49378 34.5244 9.24351 32.4995 10.1579ZM41.0089 24.6344C40.6115 24.8286 39.8266 25.192 39.2646 25.442C38.7026 25.692 37.6362 26.1732 36.8948 26.5115L35.5469 27.1263L35.5161 30.6492C35.4991 32.5867 35.4278 34.1633 35.3576 34.1531C35.198 34.1294 32.6717 32.8337 30.1322 31.473C28.2994 30.491 28.1842 30.4519 27.7535 30.6652C27.5046 30.7886 26.0163 31.4561 24.4464 32.1487C22.8764 32.8413 21.5408 33.4531 21.478 33.5085C21.4153 33.5638 24.575 35.2764 28.4997 37.3144L35.6352 41.0198L38.6834 39.4429C40.3597 38.5758 41.7852 37.7848 41.8508 37.6853C41.9986 37.4616 41.986 24.2508 41.838 24.2687C41.7795 24.2757 41.4063 24.4403 41.0089 24.6344ZM24.1293 40.1406C23.6005 40.368 23.0719 40.5956 22.5435 40.8236C20.9477 41.514 21.2604 41.5368 19.3619 40.5917C18.0974 39.9623 17.5524 39.7681 17.3158 39.8624C17.1383 39.933 15.611 40.6202 13.9216 41.3892C12.2322 42.1583 10.7914 42.7876 10.7197 42.7876C10.0109 42.7876 11.1893 43.4916 15.7364 45.7853L21.069 48.475L23.3127 47.3673C24.5468 46.7581 27.0358 45.5381 28.8441 44.6562C30.6522 43.7741 32.1092 43.0296 32.082 43.0015C32.0545 42.9735 30.5394 42.1955 28.715 41.2727L25.3979 39.5949L24.1293 40.1406Z"
                fill="#05A3C9"
              />
            </g>
            <defs>
              <clipPath id="clip0_1269_442">
                <rect
                  width="41.7408"
                  height="48"
                  fill="white"
                  transform="translate(0.257812 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
