import React from 'react';
import { HiOutlineCheck } from 'react-icons/hi';

function Pricing() {
  return (
    <div name="pricing" className="w-full text-white/95 my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] min-[2000px]:max-w-[1500px] mx-auto py-12">
        <div className="text-center py-8 text-slate-200">
          <h2 className="text-3xl min-[2000px]:text-4xl mb-16 uppercase">
            Pricing
          </h2>
          <h3 className="text-5xl min-[2000px]:text-6xl font-bold text-white/95 mb-12">
            The right price for your research.
          </h3>
          <p className="text-2xl min-[2000px]:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            expedita eos est accusamus qui tempore consequatur cum, sunt laborum
            voluptatem.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white/95 text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm min-[2000px]:text-lg">
              Standard
            </span>
            <div>
              <p className="text-6xl min-[2000px]:text-7xl font-bold py-4 flex">
                $49
                <span className="text-xl min-[2000px]:text-2xl text-slate-700 self-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl min-[2000px]:text-3xl py-8 text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-xl min-[2000px]:text-3xl md:text-2xl ">
              <p className="flex py-4 ">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4 ">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4 ">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white/95 text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm min-[2000px]:text-lg">
              Premium
            </span>
            <div>
              <p className="text-6xl min-[2000px]:text-7xl font-bold py-4 flex">
                $99
                <span className="text-xl min-[2000px]:text-2xl text-slate-700 self-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl min-[2000px]:text-3xl py-8 text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-xl min-[2000px]:text-3xl md:text-2xl ">
              <p className="flex py-4">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <HiOutlineCheck size={30} className="mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
