import React from "react";
import DtButton from "../common/DtButton";
import { BiDesktop, BiLink } from "react-icons/bi";
import {
  FiFacebook,
  FiFigma,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import DtIcon from "../common/DtIcons";
import { Calendly } from "./HomePage";

export const TopSection = () => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="rounded-lg w-[219.56px] lg:mt-24 bottom-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-[256px] lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
        <div className="font-light text-dt-black sm:text-lg">
          <span className="text-dt-blue text-[14.22px] font-poppins">
            About us
          </span>
          <h2 className="my-4 text-[35.56px] tracking-tight font-poppins text-dt-black">
            Digital Tech Pioneers
          </h2>
          <p className="my-4 w-[474px] text-[14.22px] text-center">
            is a team of experienced individuals with hands on skills in UI/UX
            design and software development who specialize in developing
            scalable software that suits your needs
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-[144.89px] gap-2">
        <div>
          <img
            className="max-w-full h-[307.56px] rounded-lg"
            src="andy.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-w-full w-[481.78px] h-[307.56px]  rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export const CardsGroup = ({ InServices }) => {
  return (
    <div
      className={` ${
        InServices
          ? "w-[1069.33px] mt-[64xp] gap-y-12 grid place-content-center"
          : ""
      } pl-[46.33px] pt-[24px]  w-full h-[395px] grid pb-24 grid-cols-2 bg-dt-white gap-4 ml-4 shadow-2xl`}
    >
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiDesktop size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] text-dt-pap bg-dt-pink hover:bg-dt-pink border-none"
          }
        />
        <div className="block">
          <div className="font-medium">
            <h1 className="text-[17.7778px] text-dt-pap">Web development</h1>
          </div>

          {InServices && (
            <div className="text-[14.22px] mt-2 text-dt-black text-opacity-50">
              Have your site online
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiDesktop size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] text-dt-black bg-dt-green bg-opacity-10 hover:bg-dt-green hover:bg-opacity-10 border-none"
          }
        />
        <div className="block">
          <div className="font-medium">
            <h1 className="text-[17.7778px] text-dt-pap">UI/UX Design</h1>
          </div>
          {InServices && (
            <div className="text-[14.22px] mt-2 text-dt-black text-opacity-50">
              Have your site online
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiDesktop size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] text-dt-blue bg-dt-black bg-opacity-10 hover:bg-dt-black hover:bg-opacity-10 border-none"
          }
        />
        <div className="block">
          <div className="font-medium">
            <h1 className="text-[17.7778px] text-dt-pap">Mobile Application</h1>
          </div>
          {InServices && (
            <div className="text-[14.22px] mt-2 text-dt-black text-opacity-50">
              Have your site online
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiDesktop size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] bg-dt-sgreen bg-opacity-20 text-dt-sgreen hover:bg-dt-black hover:bg-opacity-10 border-none"
          }
        />
        <div className="block">
          <div className="font-medium">
            <h1 className="text-[17.7778px] text-dt-pap">SEO</h1>
          </div>
          {InServices && (
            <div className="text-[14.22px] mt-2 text-dt-black text-opacity-50">
              Have your site online
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="mt-[125.22px]">
      <div className="px-[109px]">
        <div className="lg:w-[560px] lg:text-[26.6667px] font-poppins text-dt-black">
          Creating <span className="text-dt-blue"> the best </span> experiences
        </div>
        <div className="text-dt-black text-[14.2222px] mt-[50px] font-poppins leading-[24.18px] lg:w-[740px] w-full">
          Our team is comprised of experienced designers and developers who At
          our agency, we pride ourselves on delivering custom web design
          solutions tailored to meet the unique needs of each of our clients.
          With our team having a combined experience of half a decade in
          software development and deployment you can be assured to expect the
          best .We commit to deliver the best and we stop at nothing till we
          ensure the promise made to the client is fulfilled.
        </div>
      </div>

      <div className="w-full h-[432.33px] flex mt-[100px]">
        <div className="w-[40%] relative h-full bg-dt-white ml-[100px]">
          <hr className="h-[4.44px] bg-dt-pap w-[48px]" />
          <div className="lg:w-[560px] lg:text-[26.6667px] my-[33.73px] font-poppins text-dt-black">
            Delivering on <span className="text-dt-blue"> the promise </span>
          </div>
          <div className="text-dt-black  text-[14.2222px] mt-10 font-poppins leading-[29.06px] w-[451px]">
            At our agency, we pride ourselves on delivering custom web design
            solutions tailored to meet the unique needs of each of our clients
          </div>
          <div className="absolute bottom-[80px]">
            <DtButton
              buttonText={"Contact Us"}
              buttonStyle={"bg-dt-white border border-dt-blue text-dt-blue"}
            />
          </div>
        </div>

        <CardsGroup />
      </div>
    </div>
  );
};

export const OurTeam = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white w-full py-[80px]">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full  px-4">
                <h1 className="lg:text-[26.6667px] mt-[33.73px] font-poppins text-dt-black">
                  Meet the Team
                </h1>
              </div>
            </div>

            <div className="flex">
              <div className="w-full md:w-6/12 lg:w-5/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src="https://media.licdn.com/dms/image/D4D03AQHxauh2UgkiRw/profile-displayphoto-shrink_800_800/0/1666429101465?e=1687392000&v=beta&t=SZiX6bqogm6Tq65AFjfHhZil3i_bLvS6fCeH86FQuHw"
                    />
                  </a>

                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      ALEX MWANGI
                    </h1>

                    <div className="text-gray-700 font-light mb-2">
                      Product Designer & Founder at digital tech solution
                    </div>

                    <div
                      className="flex items-center mt-6 justify-center
                                transition-opacity duration-300"
                    >
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white hover:bg-dt-green hover:bg-opacity-50 bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiLinkedin />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white bg-dt-green hover:bg-dt-blue hover:bg-opacity-80  place-content-center h-10 w-10"
                      >
                        <FiFacebook />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white bg-dt-blue bg-opacity-50 hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiTwitter />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white bg-dt-black hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md hover:text-dt-white text-dt-green bg-dt-pink hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-5/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                    />
                  </a>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      ANDREW MBUGUA
                    </h1>
                    <div className="text-gray-700 font-light mb-2">
                      Software Developer
                    </div>
                    <div
                      className="flex items-center justify-center
                                transition-opacity duration-300 mt-6"
                    >
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white hover:bg-dt-green bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiLinkedin />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white bg-dt-green hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiFacebook />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white bg-dt-blue bg-opacity-50 hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiTwitter />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md text-dt-white bg-dt-black hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="#"
                        className="grid mx-1 rounded-md hover:text-dt-white text-dt-green bg-dt-pink hover:bg-dt-blue place-content-center h-10 w-10"
                      >
                        <FiInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function AboutUsPage(props) {
  return (
    <div>
      <TopSection />
      <AboutUs />
      <div className="mt-[100px]">
        <Calendly />
      </div>
      <OurTeam />
    </div>
  );
}

export default AboutUsPage;
