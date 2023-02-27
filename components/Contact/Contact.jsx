import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

function Contact() {
  const [state, handleSubmit] = useForm("moqboojv");

  if (state.succeeded) {
    return (
      <div className="flex h-screen ">
        <span className="m-auto text-2xl tracking-[10px] text-gray-500 ">
          Your message has been received
        </span>
      </div>
    );
  }
  return (
    <div>
      {/* <h3 className="top-24 mt-12 animate-pulse text-center text-2xl uppercase  tracking-[20px] text-[#F7AB0A] ">
        Contact
      </h3> */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-evenly  px-10 md:flex-row ">
        <div className="relative  mt-4 flex max-w-7xl items-center  justify-evenly ">
          <div className="text-left  md:mt-12 md:mr-12  ">
            <img
              src="https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="h-full w-full object-cover sm:h-full sm:w-full"
            />
            {/* <Image
              src="https://images.unsplash.com/photo-1669846840815-eac9fa239eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              layout="fill"
              height={500}
              width={500}
            /> */}
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex max-w-min flex-col items-start justify-evenly ">
          <div className=" flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold underline decoration-[#F7AB0A]/50">
              Get in touch
            </h4>
            <div className="flex flex-col space-y-10 ">
              <span className="">
                Contact the artist by filling out the information below. You may
                contact them through email or filling out the form below. Thanks
                for reaching out!
              </span>
              <span className="">Email: zakzeoli@gmail.com</span>
            </div>
          </div>
          <div className="">
            <form
              className="contact-form mx-auto mt-12 flex  flex-col space-y-2"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/moqboojv"
            >
              <div className="flex space-x-2 ">
                <input
                  placeholder="Name"
                  className="contact-input"
                  type="text"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  placeholder="Email"
                  className="contact-input"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <input
                placeholder="Subject"
                className="contact-input"
                type="text"
                name="subject"
                id="subject-input"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
              <textarea
                placeholder="Message"
                className="contact-input"
                name="message"
                id="message-input"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                className="w-[50%] rounded-md bg-[#F7AB0A] py-5 px-10 font-bold text-black duration-300 hover:scale-105 md:w-[100%]"
                disabled={state.submitting}
              >
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
