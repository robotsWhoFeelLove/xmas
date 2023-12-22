import { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import Snowfall from "react-snowfall";
import "./App.css";
import bow from "./assets/bow-28577.png";
import gift from "./assets/Screenshot 2023-12-22 at 1.20.55 PM.png";
import bill from "./assets/billBur.webp";
import michael from "./assets/Skeesons.png";
import countdown from "./assets/Final Countdown 30 second clip207462-62007b20-06b8-428c-b936-2ef023bc7d94.mp3";
import jingle from "./assets/jingle-bells-bells-only-181672.mp3";
import envelope from "./assets/26ed75ad89dbdac07e7da8b716366214-removebg-preview.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showMike, setShowMike] = useState(false);
  // const [playJingle, setPlayJingle] = useState();
  const [start, setStart] = useState(true);

  function runSlides() {
    // console.log("I ran");
    let jingleBells = document.getElementById("jingle");
    jingleBells.volume = 0.3;
    jingleBells.pause();
    let audio = document.getElementById("countdown");
    console.log({ audio });

    audio.play();
    audio.volume = 0.1;

    setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 2000);
  }

  function startJingle() {
    let jingleBells = document.getElementById("jingle");
    console.log({ jingleBells });
    jingleBells.volume = 0.3;
    jingleBells.play();
  }

  useEffect(() => {
    if (slideIndex == 12) {
      setShowMike(true);
    }
  }, [slideIndex]);

  // useEffect(() => {

  // }, []);

  return (
    <div className={" h-screen w-screen " + (!isOpen && "bg-red-400")}>
      {start && (
        <div
          className="h-screen w-screen flex flex-col justify-center items-center"
          onClick={() => {
            // setPlayJingle(true);
            startJingle();
            setStart(false);
          }}
        >
          <div className="text-4xl text-[#0E6AAD] font-bold -mb-60 md:-mb-28 z-50">
            SOUND ON!
          </div>
          <img
            src={envelope}
            alt=""
            // onClick={() => {

            //   setStart(false);
            // }}
          />
          <div className="text-4xl text-[#0E6AAD] font-bold -mt-60 md:-mt-28 z-20">
            PRESS ME!
          </div>
        </div>
      )}

      <audio className="absolute -top-20" controls loop id="countdown">
        <source src={countdown} type="audio/mpeg" />
        Your browser does not support the audio awesomeness.
      </audio>

      <audio className="absolute -top-20" controls loop id="jingle">
        <source src={jingle} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {slideIndex > 11 && (
        <button
          className="rounded bg-amber-400 absolute right-2 top-2"
          onClick={() => setShowMike((prev) => !prev)}
        >
          {(showMike && "Back to Bill") || "Back to Michael"}
        </button>
      )}
      {!isOpen && (
        <>
          {" "}
          <div className="bg-[#0E6AAD] absolute transform -rotate-45 text-center text-white font-semibold py-1 left-[-100px] top-[32px] w-[350px] h-[70px]"></div>
          {/* <div className="bg-[#0E6AAD] absolute transform -rotate-45 text-center text-white font-semibold py-1 right-[-100px] bottom-[32px] w-[350px] h-[70px]"></div> */}
        </>
      )}
      <div className="flex flex-col justify-center items-center h-screen text-center">
        {!isOpen && !start && (
          <>
            {" "}
            <div className="text-6xl font-bold  text-white font-bold animate-fade-up font-festive animate-duration-800 animate-delay-1000">
              Merry Christmas
            </div>
            <div className="font-bold text-5xl animate-jump-in animate-duration-1000 animate-delay-[1500ms] text-[#0E6AAD]">
              Sweet Pea!
            </div>
            <img
              className="animate-fade-up "
              src={bow}
              alt=""
              onClick={() => {
                setIsOpen(true);
                runSlides();
                // setPlayJingle(false);
              }}
            />
            <div className="text-md text-white animate-jump-in animate-duration-1000 animate-delay-[2000ms]">
              TAP THE BOW!
            </div>
          </>
        )}
        {isOpen && (
          <>
            {slideIndex == 1 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                On March 10th!
              </div>
            )}
            {slideIndex == 2 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                Get your ass ready!
              </div>
            )}
            {slideIndex == 3 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                Put your phone away!
              </div>
            )}
            {slideIndex == 4 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                Prepare to hear some real talk!
              </div>
            )}
            {slideIndex == 5 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                From the Man!
              </div>
            )}
            {slideIndex == 6 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                The Myth!
              </div>
            )}
            {slideIndex == 7 && (
              <div className="text-5xl animate-jump-in animate-duration-1000 animate-delay-500 text-[#0E6AAD]">
                The Curmudgeon!
              </div>
            )}
            {slideIndex == 8 && (
              <div className="text-5xl animate-shake animate-thrice animate-duration-200 animate-delay-500">
                <img src={gift} alt="" />
              </div>
            )}
            {/* {slideIndex == 9 && (
              <div className="animate-jump animate-once animate-duration-500 animate-delay-[1500ms]">
                <img src={gift} alt="" />
              </div>
            )} */}
            {slideIndex > 8 && showMike == false && (
              <>
                <div className="animate-jump-in animate-once animate-duration-500 animate-delay-[1200ms] font-bold text-3xl">
                  BILL BURR
                </div>
                <div className="animate-jump-in animate-once animate-duration-500 animate-delay-[1200ms]">
                  at
                </div>
                <div className="animate-jump-in animate-once animate-duration-500 animate-delay-[1200ms] font-bold text-3xl">
                  Little Caesars Arena
                </div>

                <div className="animate-jump-in animate-once animate-duration-500 md:w-1/4">
                  <img src={bill} alt="" />
                </div>

                <div className="animate-jump-in animate-once animate-duration-500 animate-delay-[1200ms] font-bold text-3xl">
                  March 10th 2024
                </div>
                <div className="animate-jump-in animate-once animate-duration-500 animate-delay-[1200ms]">
                  7 PM
                </div>
                <div className="animate-jump-in animate-once animate-duration-500 animate-delay-[1200ms] font-bold text-3xl">
                  Main Floor
                </div>
              </>
            )}
            {slideIndex > 11 && showMike && (
              <>
                <div className="bg-amber-500 absolute transform -rotate-45 text-center text-white font-semibold py-1 left-[-100px] top-[32px] w-[350px] h-[70px]"></div>

                <div className="font-festive text-red-500 text-5xl mb-6">
                  Ski-sons Greetings
                </div>
                <div className="font-festive text-green-500 text-5xl"></div>
                <div className="animate-jump animate-once animate-duration-500 ">
                  <img src={michael} alt="" />
                </div>
              </>
            )}
          </>
        )}
        {isOpen && <ConfettiExplosion />}
      </div>
      <Snowfall></Snowfall>
    </div>
  );
}
