import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

function Contact() {
  const [state, handleSubmit] = useForm("moqboojv");

  if (state.succeeded) {
    return (
      <div className="flex h-screen ">
        <span className="m-auto text-center text-2xl tracking-[10px] text-[#F7AB0A] ">
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
              src="https://res.cloudinary.com/notio/image/upload/v1677490573/zaksartstudio/contact_image_hma9y8.png"
              alt="contact image"
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
                Contact the artist by filling out the information below - he
                will reply promptly by email.
              </span>
              <span className="">
                Please reach out with questions regarding specific orders or
                pieces, payment or shipping (click here for shipping policy).*
              </span>
              <span className="">
                Please put the word “commission” in the subject line if you wish
                to propose a commissioned piece, gallery show, public
                mural/installation, or commercial work et al.
              </span>
              <span className="">
                Whereas, if your inquiry is of a time sensitive issue please
                copy and paste the following into the subject line:
              </span>
              <address>
                {/* <a href="mailto:zakzeoli@gmail.com">zakzeoli@gmail.com</a> */}
                zakzeoliart.com - *urgent customer need* He will get back to you
                within 24 business hours.
              </address>
            </div>
          </div>
          <div className="">
            <form
              className="contact-form mx-auto mt-12 flex  flex-col space-y-3"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/moqboojv"
            >
              {/* <div className="flex space-x-2 ">
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
              </div> */}
              <label> Name *</label>
              <div className="flex space-x-2">
                <div>
                  <input name="first-name" className=" contact-input" />
                  <label
                    for="first-name"
                    className="mt-1 inline-block text-sm text-white sm:text-xs"
                  >
                    First Name
                  </label>
                </div>
                <div>
                  <input name="first-name" className=" contact-input" />
                  <label
                    for="first-name"
                    className="mt-1 inline-block text-sm text-white sm:text-xs"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <label for="email"> Your Email *</label>
              <div>
                <input
                  name="email"
                  className=" contact-input contact-full-width-input"
                />
              </div>
              <label for="subject"> Subject Line *</label>
              <div>
                <input
                  name="subject"
                  className=" contact-input contact-full-width-input"
                />
              </div>
              <label for="message">Message *</label>
              <div>
                <input
                  className=" contact-input contact-full-width-input"
                  name="message"
                />
              </div>
              {/* <input
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
              /> */}
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
