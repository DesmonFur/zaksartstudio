import React, { useState, Fragment, useEffect } from "react";
// import { sanityClient, urlFor } from "@sanity/client";
import { Dialog, Transition } from "@headlessui/react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Modal from "../Modal/Modal";
import MyModal from "../Modal/Dialog";
import { sanityClient, urlFor } from "../../lib/sanity";
import { createClient } from "next-sanity";
import Image from "next/image";
import ArtPiece from "./ArtPiece";
import { PortableText } from "@portabletext/react";

import { XMarkIcon } from "@heroicons/react/24/solid";
function Artwork({ pieces }) {
  const [fullScreenGallery, setFullScreenGallery] = useState(false);
  const [currentPiece, setCurrentPiece] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMainImage, setCurrentMainImage] = useState(null);
  const setPiece = (piece, index) => {
    setCurrentPiece(piece);
    setCurrentIndex(index);
    setCurrentMainImage(piece.defaultProductVariant.images[0]);
    setFullScreenGallery(true);
    console.log(currentPiece);
  };
  const setCurrentModalImage = (image) => {
    setCurrentMainImage(image);
  };
  const setFullScreenPiece = (direction) => {
    if (currentIndex === pieces.length - 1) {
      setCurrentIndex(0);
      setCurrentPiece(pieces.at(0));
    } else {
      setCurrentIndex(
        direction == "right" ? currentIndex + 1 : currentIndex - 1
      );
      setCurrentPiece(
        direction == "right"
          ? pieces.at(currentIndex + 1)
          : pieces.at(currentIndex - 1)
      );
    }
  };

  const closeFullScreenGallery = () => {
    setFullScreenGallery(false);
  };
  const components = {
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul className="mt-xl list-disc	marker:text-white ">{children}</ul>
      ),
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
  };
  return (
    <div className="font-climateCrisis ">
      <h3 className="top-12 mx-auto w-[90%] text-center  font-playFairDisplay text-2xl tracking-[15px] text-white">
        Tap Paintings for Details
      </h3>{" "}
      <main className=" ">
        <div className=" mt-12 flex flex-col  flex-wrap items-center justify-center  gap-12 gap-x-[2vw] sm:flex-row ">
          {pieces.length > 0 && (
            <>
              {pieces.map((piece, index) => (
                <div
                  key={piece._id}
                  className="max-h-[800px]  max-w-[300px] cursor-pointer  md:max-h-[500px] md:max-w-[350px] lg:ml-[2vw] lg:mr-[2vw] lg:max-w-[450px] "
                  onClick={() => setPiece(piece, index)}
                >
                  <ArtPiece
                    piece={piece}
                    onClick={() => setPiece(piece, index)}
                  />
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex  flex-wrap items-center justify-center">
          {fullScreenGallery && (
            <Transition appear show={fullScreenGallery} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10 font-playFairDisplay"
                onClose={closeFullScreenGallery}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-800 bg-opacity-50" />
                </Transition.Child>

                <div className=" fixed inset-0 h-full overflow-y-auto">
                  <div className="flex h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="h-full w-full transform rounded-2xl bg-[#0E0E0E] p-6 text-left align-middle shadow-xl transition-all sm:h-[90vh] md:w-[80vw] lg:w-[70vw]">
                        <Dialog.Title
                          as="h3"
                          className="top-24 mt-2 animate-pulse text-center text-2xl uppercase tracking-[20px] text-[#F7AB0A] sm:mt-12"
                        >
                          {currentPiece.title ? currentPiece.title : "Untitled"}
                        </Dialog.Title>
                        <XMarkIcon
                          className="absolute left-0 top-0 h-12 w-12 cursor-pointer py-2"
                          aria-hidden="true"
                          onClick={() => setFullScreenGallery(false)}
                        ></XMarkIcon>
                        <div className="relative mx-auto flex h-[90%] flex-col  items-center justify-around md:h-[85%] md:flex-row">
                          <div
                            className="mx-auto flex  items-center justify-between"
                            onClick={() => setPiece(currentPiece, currentIndex)}
                          >
                            <div className=" mt-2 flex w-[18rem] flex-col text-center text-white sm:h-64 sm:w-64 md:h-[25rem] md:w-[20rem] lg:h-[30rem] lg:w-[25rem] ">
                              <Image
                                src={urlFor(currentMainImage).url()}
                                layout=""
                                width={500}
                                height={500}
                              />
                            </div>
                          </div>
                          <div className="flex justify-center gap-4 py-2">
                            {currentPiece.defaultProductVariant.images.map(
                              (piece, index) => (
                                <div
                                  key={index}
                                  className=" cursor-pointer"
                                  onClick={() => setCurrentModalImage(piece)}
                                >
                                  {/* <Image
                                    src={urlFor(piece).url()}
                                    layout=""
                                    width={50}
                                    height={50}
                                  /> */}
                                </div>
                              )
                            )}
                          </div>
                          {/* piece info */}
                          <div className=" md: mb-24 h-[30%] text-center text-[#fefefe] md:m-0 md:mt-2 md:h-[35rem] lg:h-full">
                            <div className="flex flex-col items-center justify-center ">
                              <div className=" absolute right-0 left-0 top-[90%] border-t-4 border-white md:mx-auto md:w-[50%]"></div>
                              <ul>
                                {currentPiece.description && (
                                  <li className="h-30 mx-auto mt-10 w-[100%]  overflow-y-auto text-lg sm:w-[70%] sm:text-xl md:w-[70%] md:text-xl">
                                    {/* {
                                      currentPiece.description[0].children[0]
                                        .text
                                    } */}
                                    <div className=" h-[6rem] overflow-y-auto md:h-[24rem] ">
                                      <PortableText
                                        value={currentPiece.description}
                                        components={components}
                                      />
                                    </div>
                                  </li>
                                )}
                                {currentPiece.defaultProductVariant.grams >=
                                  1 && (
                                  <li className="absolute bottom-[10%] right-0 mb-2 text-sm md:right-[25%]">
                                    {" "}
                                    {currentPiece.defaultProductVariant.grams}g
                                  </li>
                                )}
                                {currentPiece.defaultProductVariant
                                  .dimensions && (
                                  <li className="absolute bottom-[10%] left-0  mb-2 text-sm md:left-[25%]">
                                    {
                                      currentPiece.defaultProductVariant
                                        .dimensions
                                    }
                                  </li>
                                )}
                                <li className="absolute bottom-[10%] left-0 right-0  mb-2 text-3xl text-[#F7AB0A] ">
                                  {" "}
                                  {currentPiece.defaultProductVariant.price
                                    ? ` $${currentPiece.defaultProductVariant.price}`
                                    : "Contact"}
                                </li>
                                <li></li>
                              </ul>
                            </div>
                          </div>
                          <div className="absolute bottom-0">
                            <a
                              href={
                                currentPiece.defaultProductVariant.paymentLink
                                  ? currentPiece.defaultProductVariant
                                      .paymentLink
                                  : "/contact"
                              }
                              target="_blank"
                            >
                              <button className="btn btn-background-slide  ">
                                Purchase
                              </button>
                            </a>
                          </div>

                          {/* <div className="top-4 flex justify-center py-2">
                            {pieces.map((piece, index) => (
                              <div key={index}>
                                <RxDotFilled
                                  size={40}
                                  onClick={() => setCurrentPiece(piece)}
                                />
                              </div>
                            ))}
                          </div> */}
                          {/* <div className="top-4 flex justify-start py-2">
                            <div className=" absolute right-[100%]  top-[45%]  -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-white p-2 text-2xl text-black ">
                              <BsChevronCompactLeft
                                size={30}
                                onClick={() => setFullScreenPiece("left")}
                              />
                            </div>
                            <div className="absolute left-[100%] top-[45%]  -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-white p-2 text-2xl text-black ">
                              <BsChevronCompactRight
                                size={30}
                                onClick={() => setFullScreenPiece("right")}
                              />
                            </div>
                          </div> */}
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          )}
          {/* {fullScreenGallery && (
            <div className="group relative m-auto h-full w-full max-w-[1400px] py-16 px-4 ">
              <div
                style={{
                  backgroundImage: `url(
                    ${urlFor(
                      currentPiece.defaultProductVariant.images[0]
                    ).url()}
                  )`,
                }}
                className="h-full w-full bg-cover bg-center bg-no-repeat duration-500"
              >
                <div
                  className="mx-auto flex w-[30vw] items-center justify-center "
                  onClick={() => setPiece(currentPiece, currentIndex)}
                >
                  <ArtPiece piece={currentPiece} />
                </div>
                <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-black p-2 text-2xl text-white group-hover:block">
                  <BsChevronCompactLeft
                    size={30}
                    onClick={() => setFullScreenPiece("left")}
                  />
                </div>
                <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-black p-2 text-2xl text-white group-hover:block">
                  <BsChevronCompactRight
                    size={30}
                    onClick={() => setFullScreenPiece("right")}
                  />
                </div>
              </div>
              <div className="top-4 flex justify-center py-2">
                {pieces.map((piece, index) => (
                  <div key={index}>
                    <RxDotFilled
                      size={40}
                      onClick={() => setCurrentPiece(piece)}
                    />
                  </div>
                ))}
              </div>
              <h1>Hello</h1>
            </div>
          )} */}
        </div>
      </main>
    </div>
  );
}

export default Artwork;
