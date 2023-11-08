import React from 'react';
import {
  HiOutlinePhone,
  HiOutlineArrowSmRight,
  HiChip,
  HiOutlineSupport,
} from 'react-icons/hi';
import supportImg from '../Assets/support.jpg';

function Support() {
  return (
    <div name="support" className="w-full mt-24 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] min-[2000px]:max-w-[1800px] mx-auto text-white/95 relative">
        <div className="px-4 py-12">
          <h2 className="mt-4 mb-16 text-white/80 font-extralight text-3xl min-[2000px]:text-4xl tracking-widest uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl min-[2000px]:text-6xl mb-8 font-bold text-center  tracking-wide">
            Finding the right team
          </h3>
          <p className="py-4 text-xl min-[2000px]:text-2xl text-white/80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            corrupti saepe exercitationem debitis praesentium placeat soluta
            dignissimos accusantium, veniam ipsa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 rleative gap-x-8  gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiOutlinePhone
                size={50}
                className="p-2 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
              />
              <h3 className="font-bold text-2xl min-[2000px]:text-3xl my-6">
                Sales
              </h3>
              <p className="text-gray-600 text-xl min-[2000px]:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                repellendus.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 min-[2000px]:text-xl">
                Contact Us <HiOutlineArrowSmRight className="ml-1" size={25} />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiOutlineSupport
                size={50}
                className="p-2 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
              />
              <h3 className="font-bold text-2xl min-[2000px]:text-3xl my-6">
                Technical Support
              </h3>
              <p className="text-gray-600 text-xl min-[2000px]:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                repellendus.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 min-[2000px]:text-xl">
                Contact Us <HiOutlineArrowSmRight className="ml-1" size={25} />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiChip
                size={50}
                className="p-2 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
              />
              <h3 className="font-bold text-2xl min-[2000px]:text-3xl my-6">
                Media Inquiries
              </h3>
              <p className="text-gray-600 text-xl min-[2000px]:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                repellendus.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 min-[2000px]:text-xl">
                Contact Us <HiOutlineArrowSmRight className="ml-1" size={25} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
