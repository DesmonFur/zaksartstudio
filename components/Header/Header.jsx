import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";

function Header() {
  return (
    <Popover
      className={
        "container z-50 mx-auto flex h-24 items-center border-b-2 px-6 py-2 font-playFairDisplay  "
      }
    >
      <h1 className="text-[#000 text-xl">Zachary Zeoli</h1>
      <div className="grow">
        <div className="hidden items-end justify-end gap-2 sm:flex md:gap-24">
          <Link href="/">Home</Link>
          {/* <Link href="/about">About</Link> */}
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <RiMenuLine className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className="fixed inset-0 bg-[#0E0E0E] opacity-30 sm:hidden" />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-black">Zachary Zeoli</h1>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close Menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    ></XMarkIcon>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 text-black">
                <nav className="grid gap-y-8">
                  <Link
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    href="/"
                  >
                    Home
                  </Link>
                  {/* <Link
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    href="about"
                  >
                    About
                  </Link> */}

                  <Link
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    href="contact"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
