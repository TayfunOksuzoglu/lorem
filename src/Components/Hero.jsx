import React from 'react';
import bgImg from '../Assets/cyber-bg.png';

function Hero() {
  return (
    <section
      name="home"
      className="w-full h-full bg-zinc-200 flex flex-col justify-between pt-24"
    >
      <div className="grid min-[920px]:grid-cols-2 max-w-[1240px] min-[2000px]:max-w-[2000px] m-auto">
        <div className="flex flex-col justify-center md:items-start min-[425px]:text-center min-[920px]:text-start w-full px-2 py-8">
          <p className="text-2xl min-[2000px]:text-3xl">
            Unique Sequencing & Production
          </p>
          <h1 className="py-3 text-5xl md:text-7xl min-[2000px]:text-8xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl min-[2000px]:text-3xl">
            This is our Tech brand.
          </p>
          <button className="py-3 px-6 min-[425px]:max-w-[450px] min-[920px]:w-full min-[425px]:self-center min-[768px]:self-start my-4 min-[2000px]:text-2xl">
            Get Started
          </button>
        </div>
        <div className="mx-auto">
          <img
            className="w-full max-[1024px]:max-w-[500px] min-[2000px]:max-w-full"
            src={bgImg}
            alt="background with cyber security elements"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
