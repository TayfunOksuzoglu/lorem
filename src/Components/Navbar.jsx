import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';
//prettier-ignore
import { Link} from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  function handleClose() {
    setNav(!nav);
  }
  return (
    <nav className="w-full h-20 z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl min-[2000px]:text-5xl tracking-widest">
            <Link
              className="cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
            >
              LOREM.
            </Link>
          </h1>
          <ul className="hidden min-[920px]:flex">
            <li className="cursor-pointer m-2 min-[2000px]:text-2xl">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer m-2 min-[2000px]:text-2xl">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer m-2 min-[2000px]:text-2xl">
              <Link to="support" smooth={true} offset={-80} duration={500}>
                Support
              </Link>
            </li>
            <li className="cursor-pointer m-2 min-[2000px]:text-2xl">
              <Link to="platforms" smooth={true} offset={-140} duration={500}>
                Platforms
              </Link>
            </li>
            <li className="cursor-pointer m-2 min-[2000px]:text-2xl">
              <Link to="pricing" smooth={true} offset={-80} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden min-[920px]:flex mr-4">
          <button className="whitespace-nowrap border-none bg-transparent text-black mr-4 min-[2000px]:text-2xl">
            Sign In
          </button>
          <button className="px-8 py-3 whitespace-nowrap min-[2000px]:text-2xl">
            Sign Up
          </button>
        </div>
        <div
          onClick={handleClick}
          className="min-[920px]:hidden mr-4 cursor-pointer"
        >
          {!nav ? <HiMenu size={30} /> : <HiX size={30} />}
        </div>
      </div>

      <ul
        className={
          !nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 text-center'
        }
      >
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-140}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="whitespace-nowrap bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="whitespace-nowrap px-8 py-3">Sign Out</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
