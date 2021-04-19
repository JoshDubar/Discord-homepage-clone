import React from "react";
import NavBar from "./NavBar";
import Button from "./Button";
import Download from "./svgs/Download";
import BlueRay from "./svgs/BlueRay";
import BigBlueRay from "./svgs/BigBlueRay";
import TransparentRay from "./svgs/TransparentRay";
import CurveRay from "./svgs/CurveRay";
import LeftHero from "./svgs/LeftHero";
import MidHero from "./svgs/MidHero";
import HeroRight from "./svgs/HeroRight";

const Hero = () => {
  return (
    <div
      className="min-h-hero flex flex-col items-center relative"
      style={{
        background: "linear-gradient(0deg,#7196ff -.45%,#2a5ee8 71.18%)",
      }}
    >
      <NavBar />
      <div className="px-12 py-section-y flex flex-col items-center max-w-screen-xl">
        <div className="flex flex-col items-center text-center w-full max-w-screen-lg z-10">
          <h1 className="text-hero-title font-bold text-white">
            Your place to talk
          </h1>
          <div className="mt-10 text-xl text-white w-full">
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </div>
          <div className="mt-6 w-full">
            <Button size="xl" className="mr-6">
              <div className="flex items-center">
                <Download /> Download for Windows
              </div>
            </Button>
            <Button size="xl" inverted>
              Open Discord in your browser
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 ">
        <BlueRay className="absolute top-0 left-1/2 ml-svg-blue-ray" />
        <BigBlueRay className="absolute top-0 left-1/2 ml-svg-big-blue-ray" />
        <TransparentRay className="absolute top-0 left-1/2 ml-svg-transparent-ray" />
        <CurveRay className="absolute top-0 left-1/2 mt-4 ml-svg-curve-ray" />
        <LeftHero className="absolute bottom-0 left-1/2 ml-svg-left-hero z-10" />
        <MidHero className="absolute bottom-0 left-1/2 ml-svg-mid-hero z-0" />
        <HeroRight className="absolute bottom-0 left-1/2 ml-svg-right-hero z-0" />
      </div>
    </div>
  );
};

export default Hero;
