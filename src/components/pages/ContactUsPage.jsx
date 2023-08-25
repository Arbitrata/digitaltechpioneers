import React from "react";
import DtIcon from "../common/DtIcons";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BiArrowToRight, BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import DtButton from "../common/DtButton";

export const ContactUsForm = () => {
  return (
    <div className="w-full h-[762.67px] font-poppins bg-dt-blue pt-[48px] bg-opacity-10 block">
      <div className="w-full text-center">
        <h1 className="text-[26.67px] pb-2 ">Say hello</h1>
        <p>We will be more than happy to hear from you</p>
      </div>

      <div className="w-full mt-[70px] grid place-content-center">
        <form className="space-y-4 w-[596.44px]">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Fisrt name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="outline-none h-[49.78px] placeholder:stroke-dt-green text-sm rounded-lg block w-full p-2.5"
                placeholder="firstname"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Last name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="outline-none h-[49.78px] placeholder:stroke-dt-green text-sm rounded-lg block w-full p-2.5"
                placeholder="lastname"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="outline-none h-[49.78px] placeholder:stroke-dt-green text-sm rounded-lg block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 h-[206.22px] outline-none w-full text-sm rounded-lg"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <DtButton
            buttonText={"Send Message"}
            buttonStyle={"item-center text-dt-white"}
            buttonIcon={<BiArrowToRight size={20} />}
          />
        </form>
      </div>
    </div>
  );
};

export const ContactUsPage = () => {
  const iconStyle =
    "text-dt-black p-3 rounded-full shadow shadow-dt-black hover:shadow-dt-blue";
  return (
    <div>
      <div className="block h-fit w-full relative top-[100px] mb-[139.33px]">
        <div className="grid grid-cols-3 h-[90.67px] pt-10 items-center mx-[10%] mb-[74px]">
          <div className="inline-block h-full w-full border-r ">
            <h1 className="p-3">Follow us</h1>
            <div className="flex gap-x-6">
              <DtIcon icon={<FiFacebook size={20} />} iconStyle={iconStyle} />
              <DtIcon icon={<FiTwitter size={20} />} iconStyle={iconStyle} />
              <DtIcon icon={<FiInstagram size={20} />} iconStyle={iconStyle} />
              <DtIcon icon={<FiLinkedin size={20} />} iconStyle={iconStyle} />
            </div>
          </div>

          <div className="h-full w-full border-r items-center gap-x-4 text-[17.78px] flex place-content-center">
            <BiPhoneCall size={25} />
            +254 700462499
          </div>

          <div className="h-full w-full items-center gap-x-4 text-[17.78px] flex place-content-center">
            <BiLocationPlus size={25} />
            Nairobi, Kenya
          </div>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
};
