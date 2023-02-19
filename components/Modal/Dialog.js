import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { sanityClient, urlFor } from "../../lib/sanity";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function MyModal(currentPiece, currentIndex) {
  let [isOpen, setIsOpen] = useState(true);
  console.log(currentPiece.defaultProductVariant, currentIndex);
  console.log(currentPiece, currentIndex);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-full  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="group relative m-auto h-full w-full max-w-[1400px] py-16 px-4 ">
                    <div
                      //       style={{
                      //         backgroundImage: `url(
                      //     ${urlFor(
                      //       currentPiece.defaultProductVariant.images[0]
                      //     ).url()}
                      //   )`,
                      //       }}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MyModal;
