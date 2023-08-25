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
      <div className="gap-16 items-center py-8 md:px-[80px] px-4 mx-auto max-w-screen-xl lg:grid block lg:grid-cols-2 md:grid-cols-2 grid-cols-1  lg:py-16 lg:px-6">
        <div className="grid lg:grid-cols-2 lg:gap-0 gap-4 md:grid-cols-2 grid-cols-1 lg:mt-8 mt-[100px]">
          <img
            className="rounded-lg lg:w-[219.56px] w-auto lg:mt-24 mt-8 bottom-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 lg:w-[256px] w-auto lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>

        <div className="font-light text-dt-black lg:mt-0 mt-10 sm:text-lg">
          <span className="text-dt-blue text-[18.22px] sm:text-center font-poppins">
            About us
          </span>
          <h2 className="my-4 text-[35.56px] tracking-tight sm:text-center font-poppins text-dt-black">
            Digital Tech Pioneers
          </h2>
          <p className="my-4 lg:w-[474px] w-full text-[18.22px] font-poppins text-center">
            is a team of experienced individuals with hands on skills in UI/UX
            design and software development who specialize in developing
            scalable software that suits your needs
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-[144.89px] md:px-[80px] px-4 gap-8">
        <div>
          <img
            className="max-w-full lg:h-[307.56px] h-auto rounded-lg"
            src="andy.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-w-full lg:w-[481.78px] sm:w-full md:w-[70%] h-[307.56px]  rounded-lg"
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
          ? "lg:w-[1069.33px] mt-[64xp] gap-y-12 grid place-content-center"
          : ""
      } lg:pl-[46.33px] pl-4 pt-[24px] w-full lg:h-[395px] h-fit grid pb-24 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-dt-white gap-4 lg:ml-4 ml-0 shadow-2xl lg:px-0 md:px-[80px]`}
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
            <div className="text-[18.22px] mt-2 text-dt-black text-opacity-50">
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
            <div className="text-[18.22px] mt-2 text-dt-black text-opacity-50">
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
            <div className="text-[18.22px] mt-2 text-dt-black text-opacity-50">
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
            <div className="text-[18.22px] mt-2 text-dt-black text-opacity-50">
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
      <div className="lg:px-[109px] md:px-[80px] px-4">
        <div className="lg:w-[560px] lg:text-[26.6667px] md:text-[23px] font-poppins text-dt-black">
          Creating <span className="text-dt-blue"> the best </span> experiences
        </div>
        <div className="text-dt-black text-[18.2222px] my-[50px] font-poppins leading-[24.18px] lg:w-[740px] w-full">
          Our team is comprised of experienced designers and developers who At
          our agency, we pride ourselves on delivering custom web design
          solutions tailored to meet the unique needs of each of our clients.
          With our team having a combined experience of half a decade in
          software development and deployment you can be assured to expect the
          best .We commit to deliver the best and we stop at nothing till we
          ensure the promise made to the client is fulfilled.
        </div>
      </div>

      <div className="w-full lg:h-[432.33px] lg:mb-0  h-fit lg:flex block mt-[100px]">
        <div className="lg:w-[40%] mb-[100px] relative h-full bg-dt-white lg:ml-[100px] ml-0 lg:px-0 md:px-[80px] px-4">
          <hr className="h-[4.44px] bg-dt-pap w-[48px]" />
          <div className="lg:w-[560px] lg:text-[26.6667px] my-[33.73px] font-poppins text-dt-black">
            Delivering on <span className="text-dt-blue"> the promise </span>
          </div>
          <div className="text-dt-black  text-[18.2222px] mt-10 font-poppins leading-[29.06px] lg:w-[451px] w-full">
            At our agency, we pride ourselves on delivering custom web design
            solutions tailored to meet the unique needs of each of our clients
          </div>
          <div className="lg:absolute lg:bottom-[80px] lg:mt-0 mt-10">
            <DtButton
              buttonText={"Contact Us"}
              buttonStyle={"bg-dt-white border border-dt-blue text-dt-blue"}
            />
          </div>
        </div>
        <div className="relative w-full right-0">
          <CardsGroup />
        </div>
      </div>
    </div>
  );
};

export const OurTeam = (andy, alex) => {
  const icons = [
    {
      icon: <FiLinkedin />,
      style:
        "grid mx-1 rounded-md text-dt-white hover:bg-dt-green hover:bg-opacity-50 bg-dt-blue place-content-center h-10 w-10",
      andy: "https://www.linkedin.com/in/andrew-mbugua-04a575237/",
      alex: "https://www.linkedin.com/in/waweru-mwangi-8994a9231/",
    },
    {
      icon: <FiFacebook />,
      style:
        "grid mx-1 rounded-md text-dt-white bg-dt-green hover:bg-dt-blue hover:bg-opacity-80  place-content-center h-10 w-10",
      andy: "https://www.facebook.com/profile.php?id=100083791382825",
    },
    {
      icon: <FiTwitter />,
      style:
        "grid mx-1 rounded-md text-dt-white bg-dt-blue bg-opacity-50 hover:bg-dt-blue place-content-center h-10 w-10",
      andy: "https://twitter.com/AndrewMbugua19",
    },
    {
      icon: <FiGithub />,
      style:
        "grid mx-1 rounded-md text-dt-white bg-dt-black hover:bg-dt-blue place-content-center h-10 w-10",
      andy: "https://github.com/Arbitrata",
      alex: "https://github.com/Waweru001",
    },
    {
      icon: <FiInstagram />,
      style:
        "grid mx-1 rounded-md hover:text-dt-white text-dt-green bg-dt-pink hover:bg-dt-blue place-content-center h-10 w-10",
      andy: "https://www.instagram.com/andy_andrew76/",
      alex: "https://www.instagram.com/wawerumwangi867",
    },
  ];

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

            <div className="lg:flex md:flex block">
              <div className="w-full md:w-6/12 lg:w-5/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src=""
                    />
                  </a>

                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      ALEX MWANGI
                    </h1>

                    <div className="text-gray-700 font-light mb-2">
                      Product Designer & Founder at digital tech solution
                    </div>

                    <div className="flex items-center mt-6 justify-center transition-opacity duration-300">
                      {icons.map((icon) => (
                        <div key={Math.random(500)}>
                          <DtIcon
                            icon={icon.icon}
                            iconStyle={icon.style}
                            to={alex ? icon.alex : ""}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-5/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img className="https://media.licdn.com/dms/image/D4D03AQHxauh2UgkiRw/profile-displayphoto-shrink_800_800/0/1666429101465?e=1687392000&v=beta&t=SZiX6bqogm6Tq65AFjfHhZil3i_bLvS6fCeH86FQuHw" />
                  </a>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      ANDREW MBUGUA
                    </h1>
                    <div className="text-gray-700 font-light mb-2">
                      Software Developer
                    </div>
                    <div className="flex items-center justify-center transition-opacity duration-300 mt-6">
                      {icons.map((icon) => (
                        <div key={Math.random(400)}>
                          <DtIcon
                            icon={icon.icon}
                            iconStyle={icon.style}
                            to={andy ? icon.andy : ""}
                          />
                        </div>
                      ))}
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
    <div className="overflow-x-hidden">
      <TopSection />
      <AboutUs />
      <div className="mt-[100px]">
        <Calendly />
      </div>
      {/* <OurTeam /> */}
    </div>
  );
}

export default AboutUsPage;
