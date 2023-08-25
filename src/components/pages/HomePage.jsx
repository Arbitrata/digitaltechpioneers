import React from "react";
import { InlineWidget } from "react-calendly";
import DtButton from "../common/DtButton";
import DtIcon from "../common/DtIcons";
import {
  BiFace,
  BiDesktop,
  BiDevices,
  BiMobile,
  BiSearchAlt2,
  BiMobileAlt,
} from "react-icons/bi";
import { FiMail } from "react-icons/fi";

export const HeroSection = () => {
  return (
    <div className="lg:h-[660.44px] h-fit lg:w-full  lg:relativew-full lg:px-[80px] md:px-[80px] px-4 lg:pb-0 pb-10 bg-dt-blue bg-opacity-10">
      <div className="w-[350px] lg:visible md:visible invisible absolute z-10 rounded-full right-6 top-[200px] h-[450px] bg-gradient-to-b opacity-20 via-dt-white from-dt-pink to-dt-pink"></div>
      <div className="lg:w-[350px] w-[100%] lg:visible invisible absolute z-10 rounded-full left-0 top-[200px] lg:h-[350px] bg-gradient-to-r opacity-10 via-dt-pap from-dt-white to-dt-white"></div>
      <div className="lg:w-[200px] lg:visible absolute z-10 rounded-full left-[-150px] bottom-[-150px] lg:h-[100px] bg-dt-green"></div>
      <div className="lg:w-[50px] lg:visible absolute z-10 rounded-l-full lg:h-[200px] bg-dt-blue  right-0 bottom-[100px]"></div>

      <div className="lg:flex block w-full h-full">
        <div className="lg:w-[50%] w-[100%] lg:mr-[70px]  h-full block text-left lg:pl-[29.33px] pl-0">
          <div className="lg:w-[560px] md:text-[35px] w-full lg:text-[35.56px] mx-auto font-poppins text-dt-black lg:mt-[80px] lg:pt-0 pt-[80px] font-semibold ">
            Designing
            <span className="text-dt-blue"> Websites </span>
            that bring your <span className="text-dt-blue"> vision </span> to
            life.
          </div>
          <div className="text-dt-black lg:text-[18.22px] md:text-[23px] font-poppins lg:pr-6 pr-0 lg:mt-[70px] mt-10 leading-[29.06px] lg:w-[544.89px] w-full">
            Did you know that the general average time spent on a website is 53
            seconds? First impression matters and @Digital Tech pioneers we help
            create that great first impression by creating a great digital
            experience for visitors of your site
          </div>
          <div className="mt-[57.78px] lg:visible md:invisible invisible flex lg:gap-x-6 gap-x-0 lg:justify-normal justify-between h-fit w-full">
            <DtButton
              buttonText={"Learn more"}
              buttonStyle={"lg:w-[171.56px] w-fit z-20 text-dt-white"}
            />
            <DtButton
              buttonText={"See services"}
              buttonStyle={
                "lg:w-[171.56px] w-fit bg-dt-white border border-dt-blue text-dt-blue"
              }
            />
          </div>
        </div>
        <div className="lg:w-[50%] md:w-full relative  w-full lg:static h-full lg:pb-[100px] lg:grid place-content-center">
          <img
            src="h.png"
            className="lg:w-full z-30 w-auto lg:h-full h-auto"
          ></img>
        </div>
        <div className="mt-[100px] lg:invisible md:visible lg:hidden md:flex flex gap-12 justify-around h-fit w-full">
          <DtButton
            buttonText={"Learn more"}
            buttonStyle={"lg:w-[171.56px] w-fit z-20 text-dt-white"}
          />
          <DtButton
            buttonText={"See services"}
            buttonStyle={
              "lg:w-[171.56px] w-fit bg-dt-white border border-dt-blue text-dt-blue"
            }
          />
        </div>
      </div>
    </div>
  );
};

export const BudgeSection = () => {
  return (
    <div className="grid lg:grid-cols-4 justify-between md:grid-cols-2 grid-cols-1 lg:px-[100px] lg:py-20 py-[50px] px-[33px] lg:h-fit h-fit lg:gap-y-0 gap-6 sm:gap-12 md:gap-12 w-full">
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiDesktop size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] bg-dt-black bg-opacity-10 hover:bg-dt-black hover:bg-opacity-10 border-none"
          }
        />
        <div className="font-medium">
          <div className="text-[17.7778px]">WEB DEVELOPMENT</div>
          <div className="text-[15.33px] text-dt-black text-opacity-50">
            Have your site online
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiSearchAlt2 size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] bg-dt-green bg-opacity-20 hover:bg-dt-black hover:bg-opacity-10 border-none"
          }
        />
        <div className="font-medium">
          <div className="text-[17.7778px]">SEO</div>
          <div className="text-[15.33px] text-dt-black text-opacity-50">
            Appear more on serach
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiDevices size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] bg-dt-sgreen bg-opacity-20 hover:bg-dt-blue hover:bg-opacity-10 border-none"
          }
        />
        <div className="font-medium">
          <div className="text-[17.7778px]">UI/UX DESIGN</div>
          <div className="text-[15.33px] text-dt-black text-opacity-50">
            Create professional Mockups
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <DtIcon
          icon={<BiMobile size={40} />}
          borderPresent={true}
          iconStyle={
            "w-[73.78px] h-[73.78px] rounded-[17.7778px] bg-dt-pink hover:bg-dt-pink border-none"
          }
        />
        <div className="font-medium">
          <div className="text-[17.7778px]">MOBILE APPLICATION</div>
          <div className="text-[15.33px] text-dt-black text-opacity-50">
            Have your mobile App online
          </div>
        </div>
      </div>
    </div>
  );
};

export const QuickSection = () => {
  return (
    <div className="lg:w-full w-full h-fit block lg:px-[140px] md:px-[100px] relative px-4">
      <div className="lg:w-[280px] w-[100%] lg:visible invisible absolute rounded-l-full right-0 top-[200px] lg:h-[400px] bg-gradient-to-b opacity-5 via-dt-pap from-dt-white to-dt-white"></div>

      <div className="lg:w-[350px] w-[100%] lg:visible invisible absolute rounded-l-full right-0 bottom-0 lg:h-[350px] bg-gradient-to-b opacity-10 via-dt-pap from-dt-white to-dt-white"></div>

      <div className="w-full lg:h-[115.67px] lg:mt-0 mt-12 h-fit mb-[47.78px] text-dt-black font-poppins text-center lg:grid place-content-center">
        <h1 className="text-[29.33px] mb-[25.78px]">
          How we help you build and maintain digital presence
        </h1>
        <span className="text-dt-black text-opacity-50 text-[18.333px] lg:w-[615.11px] w-full">
          we are a full-service web design agency that creates beautiful,
          user-friendly websites for businesses of all sizes ensuring you make
          the best first impression this is how...
        </span>
      </div>
      <div className="lg:block block">
        <div className="w-full lg:h-[454.22px] h-fit lg:mb-[160.89px] mb-10 lg:flex block">
          <div className="lg:w-[50%] w-full h-full">
            <div className="flex items-center space-x-4 w-full pt-[93.33px]">
              <DtIcon
                icon={<BiFace size={30} />}
                borderPresent={true}
                iconStyle={
                  "w-[51.56px] h-[51.56px] text-dt-white rounded-full bg-dt-green hover:bg-dt-green border-none"
                }
              />
              <div className="font-medium">
                <div className="text-[18.1111px]">New to Digital space?</div>
                <div className="text-[15.33px] text-dt-black text-opacity-50">
                  Worry no more....
                </div>
              </div>
            </div>
            <div className="lg:w-[458.67px] w-[100%] lg:text-[26.6667px] font-poppins text-dt-black lg:mt-[40.22px] lg:pt-0 pt-[80px] font-semibold ">
              Looking to get your
              <span className="text-dt-blue"> site online? </span> or looking to
              explore digital space?
            </div>
            <div className="text-dt-black text-opacity-50 text-[18.2222px] pr-6 lg:mt-[29.33px] mt-10 leading-[24.18px] lg:w-[423.11px] w-full">
              Our team will help you in the design and deployment of your site
              that will suit your needs, company culture and ensuring that the
              customers visiting your site will have the best experience
            </div>
          </div>
          <div className="lg:w-[50%] w-full h-full">
            <img src="./mob.png" className="h-[100%] lg:w-auto w-[80%]" />
          </div>
        </div>
        <div className="w-full lg:h-[454.22px] h-fit lg:mb-[160.89px] mb-10 lg:flex block">
          <div className="lg:w-[50%] w-full lg:block hidden h-full ">
            <img src="./mockup.png" className="lg:w-auto w-[80%]" />
          </div>

          <div className="lg:w-[50%] w-full h-full lg:pl-[101.33px]">
            <div className="flex items-center space-x-4 w-full pt-[93.33px]">
              <DtIcon
                icon={<BiFace size={30} />}
                borderPresent={true}
                iconStyle={
                  "w-[51.56px] h-[51.56px] text-dt-white rounded-full bg-dt-blue hover:bg-dt-blue border-none"
                }
              />
              <div className="font-medium">
                <div className="text-[18.1111px]">Looking for an upgrade?</div>
                <div className="text-[15.33px] text-dt-black text-opacity-50">
                  We gat you
                </div>
              </div>
            </div>
            <div className="lg:w-[458.67px] w-[100%] lg:text-[26.6667px] font-poppins text-dt-black lg:mt-[40.22px] lg:pt-0 pt-[80px] font-semibold ">
              <span className="text-dt-blue"> Looking </span> to get an upgrade
              for your site?
            </div>
            <div className="text-dt-black text-opacity-50 text-[18.2222px] lg:mt-[29.33px] mt-10 leading-[24.18px] lg:w-[423.11px] w-full">
              our team is comprised of experienced designers and developers who
              will ensure that your site gets that exclusive touch and an
              elegant finish to ensure that the customers have the best
              experience while interacting with your site
            </div>
            <div className="lg:w-[50%] w-full visible lg:hidden h-full ">
              <img src="./mockup.png" className="lg:w-auto w-[80%]" />
            </div>
          </div>
        </div>
        <div className="w-full lg:h-[454.22px] h-fit mb-[73px] lg:flex block">
          <div className="lg:w-[50%] w-full lg:h-full">
            <div className="flex items-center space-x-4 w-full pt-[93.33px]">
              <DtIcon
                icon={<BiFace size={30} />}
                borderPresent={true}
                iconStyle={
                  "w-[51.56px] h-[51.56px] text-dt-white rounded-full bg-dt-pap hover:bg-dt-green border-none"
                }
              />
              <div className="font-medium">
                <div className="text-[18.1111px]">Still not decided yet?</div>
                <div className="text-[15.33px] text-dt-black text-opacity-50">
                  Worry not ...
                </div>
              </div>
            </div>
            <div className="lg:w-[458.67px] w-[100%] lg:text-[26.6667px] font-poppins text-dt-black lg:mt-[40.22px] lg:pt-0 pt-[80px] font-semibold ">
              Still hard figuring out what is
              <span className="text-dt-blue"> best for You? </span>
            </div>
            <div className="text-dt-black text-opacity-50 text-[18.2222px] pr-6 lg:mt-[29.33px] mt-10 leading-[24.18px] lg:w-[423.11px] w-full">
              Our team will ensure you get to find the best solution that suits
              your company and user needs to ensure delivery of maximum value to
              your organisation
            </div>
          </div>
          <div className="lg:w-[50%] w-full lg:h-full grid place-content-end pb-20">
            <img src="./ui.jpeg" className="h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Calendly = () => {
  return (
    <div className="w-full">
      <InlineWidget url="https://calendly.com/digitaltechpioneers/30min?month=2023-04&date=2023-04-21" />
    </div>
  );
};

export const BookingSection = () => {
  return (
    <div className="lg:w-full w-full lg:px-[10px] md:px-[33px] px-4 mb-10 h-fit">
      <div className="inline-flex items-center lg:justify-center w-full">
        <hr className="lg:w-[70%] lg:visible invisible h-px my-8 bg-dt-blue border-0" />
        <span className="absolute px-3 font-medium text-dt-black bg-dt-white lg:-translate-x-1/2 bg-white lg:left-1/2">
          Book a <span className="text-dt-blue"> free discovery </span> call
        </span>
      </div>
      <Calendly />
    </div>
  );
};

export const OurPartners = () => {
  return (
    <section className="bg-dt-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 font-poppins tracking-tight leading-tight text-center text-dt-black dark:text-white text-[21.33px]">
          You’ll be in good company
        </h2>
        <div className="grid grid-cols-2 gap-8 text-dt-black sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          <a href="#" className="flex justify-center items-center">
            <img src="apprentice.jpeg" />
          </a>
          {/* <a href="#" className="flex justify-center items-center">
            <img src="dt logo2.png" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <img src="dt logo2.png" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export const CallToAction = () => {
  return (
    <div className="h-[474.67px] w-full bg-dt-blue bg-opacity-10 relative">
      <img src="Star 1.png" className="absolute -top-10 left-[200px]" />
      <img
        src="Pai Chart 1.png"
        className="absolute lg:top-14 md:top-[380px] sm:top-[20px] right-[230px]"
      />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 mt-[60px] text-3xl tracking-tight font-poppins text-dt-black text-[26.67px] sm:text-4xl">
            Join our Newsletter for updates and new releases
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-dt-black md:mb-12 sm:text-xl">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="submit">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FiMail size={20} style={{ color: "#1090CB" }} />
                </div>
                <input
                  className="block p-3 pl-10 w-full outline-none h-[59.56px] text-sm text-dt-black bg-gray-50 rounded-[8.89px] sm:rounded-lg"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                />
              </div>
              <div>
                <DtButton
                  buttonStyle={"h-[59.56px] right-0 ml-2 text-dt-white"}
                  buttonText={"Subscribe"}
                />
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-dt-black newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.
              {/* <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="block pt-[90.89px]">
      <HeroSection />
      <BudgeSection />
      <hr className="w-full h-[2x] lg:mb-[105px] opacity-20" />
      <QuickSection />
      <BookingSection />
      <OurPartners />
      <div className="h-[120px]"></div>
      <CallToAction />
    </div>
  );
}
