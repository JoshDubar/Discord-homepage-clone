import React, { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

import Hero from "./Hero";
import Footer from "./Footer";
import SectionOne from "./svgs/SectionOne";
import SectionTwo from "./svgs/SectionTwo";
import SectionThree from "./svgs/SectionThree";
import SectionFinal from "./svgs/SectionFinal";
import WaveBreak from "./WaveBreak";
import Button from "./Button";
import Download from "./svgs/Download";
import Sparkles from "./svgs/Sparkles";
import "../css/tailwind.css";

function App() {
  const sectionOneRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && sectionOneRef) {
      sectionOneRef.current.classList.add("opacity-100");
    }
  }, [inView]);

  const setRefs = useCallback(
    (node) => {
      sectionOneRef.current = node;
      ref(node);
    },
    [] //--> empty dependencies
  );

  return (
    <main>
      <Hero />
      <section className="flex flex-col w-full transition">
        <div
          ref={setRefs}
          className="w-full px-10 py-section-y flex flex-row items-center justify-center transition duration-1000 opacity-0"
        >
          <SectionOne />
          <div className="flex flex-col max-w-section-txt ml-32 mr-24 text-black">
            <h2 className="text-section-title font-bold leading-section ">
              An invite-only place with plenty of room to talk
            </h2>
            <div className="mt-6 text-xl leading-p-text">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </div>
          </div>
        </div>
      </section>
      <WaveBreak />
      <section className="flex flex-col w-full bg-grey">
        <div className="w-full px-10 py-section-y flex flex-row items-center justify-center">
          <div className="flex flex-col max-w-section-txt mr-32 text-black">
            <h2 className="text-section-title font-bold leading-section ">
              Where hanging out is easy
            </h2>
            <div className="mt-6 text-xl leading-p-text">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </div>
          </div>
          <SectionTwo />
        </div>
      </section>
      <WaveBreak color="white" />
      <section className="flex flex-col w-full">
        <div className="w-full px-10 py-section-y flex flex-row items-center justify-center">
          <SectionThree />
          <div className="flex flex-col max-w-section-txt ml-32 mr-24 text-black">
            <h2 className="text-section-title font-bold leading-section ">
              From a few to a fandom
            </h2>
            <div className="mt-6 text-xl leading-p-text">
              Get a community of any size running with moderation tools and
              custom member access. Give members special powers, set up private
              channels, and more.
            </div>
          </div>
        </div>
      </section>
      <WaveBreak />
      <section className="flex flex-col w-full bg-grey">
        <div className="w-full px-10 pt-section-y pb-20 flex flex-col items-center justify-center ">
          <div className="flex flex-col text-black text-center max-w-section-final ">
            <h2 className="text-section-title font-bold leading-section ">
              Reliable tech for staying close
            </h2>
            <div className="mt-6 text-xl leading-p-text">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </div>
          </div>
          <SectionFinal className="object-cover mt-4 w-full" />
        </div>
      </section>
      <section className="bg-grey pb-section-y">
        <div className="flex flex-col justify-center relative items-center ">
          <div className="absolute top-0 w-full flex items-center justify-center">
            <Sparkles />
          </div>
          <h4 className="text-section-mini-title font-semibold mt-7.5">
            Ready to start your journey?
          </h4>
          <Button size="xl" className="mr-6 mt-12" color="blue" inverted>
            <div className="flex items-center">
              <Download /> Download for Windows
            </div>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
