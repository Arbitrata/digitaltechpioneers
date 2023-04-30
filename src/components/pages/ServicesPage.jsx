import React from "react";
import { CardsGroup } from "./AboutUsPage";
import { BiArrowFromLeft, BiArrowFromRight, BiFace } from "react-icons/bi";
import DtButton from "../common/DtButton";
import { CallToAction } from "./HomePage";
import { DtCards } from "../common/DtCards";
import { Link } from "react-router-dom";

export const TopSection = () => {
  return (
    <div className="w-full h-screen bg-dt-blue bg-opacity-10 px-[106px] relative mb-[400px] top-[100px] pt-16">
      <div className="md:mb-0 grid place-content-center mb-[64.45px]">
        <div className="flex justify-center mb-6">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
            className="rounded-full shadow-lg w-32"
          />
        </div>
        <h1 className="font-bold my-[16.33px] text-center text-[35.56px]">
          Our <span className="text-dt-blue">Services</span>
        </h1>
        <p className="mb-4 pb-[23px] w-[391.11px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      <CardsGroup InServices={true} />
    </div>
  );
};

export const Secondsection = () => {
  return (
    <div className="w-full lg:h-[454.22px] h-fit lg:mb-[140.89px] px-[106px] mb-10 relative lg:flex block">
      <div className="lg:w-[50%] w-full h-full">
        <div className="lg:w-[458.67px] w-[100%] lg:text-[26.6667px] font-poppins text-dt-black lg:mt-[40.22px] lg:pt-0 pt-[80px] font-semibold ">
          <span className="text-dt-blue"> Get started </span> with us today .
        </div>
        <div className="text-dt-black text-opacity-50 text-[16.2222px] pr-6 lg:mt-[50px] mt-10 leading-[24.18px] lg:w-[423.11px] w-full">
          Our team will help you in the design and deployment of your site that
          we will help you create that unforgettable first impression for
          visitors on your site and ensure that your site has maximum engagement
          from visitors who visit your site Book a discovery call with us and
          get to learn how to create a custom site that suits your needs
        </div>

        <div className="absolute bottom-[80px]">
          <DtButton
            buttonText={"Contact Us"}
            buttonStyle={"bg-dt-white border border-dt-blue text-dt-blue"}
          />
        </div>
      </div>
      <div className="lg:w-[50%] w-full h-full">
        <img src="service.png" className="lg:w-full w-[80%]" />
      </div>
    </div>
  );
};

export const SocialProof = () => {
  return (
    <section className="bg-dt-blue relative lg:mb-[100.89px] h-[344.89px] dark:bg-dt-white">
      <img
        src="Succlent angle 1.png"
        alt=""
        className="absolute -bottom-6 left-[100px]"
      />
      <img
        src="Bell Angle 1.png"
        alt=""
        className="absolute -top-16 right-[130px]"
      />
      <div className="max-w-screen-xl h-full mx-auto lg:px-6">
        <dl className="grid mx-auto h-full items-center text-dt-white sm:grid-cols-4">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-[57.78px] font-extrabold">3</dt>
            <dd className="font-light text-dt-white">Happy clients</dd>
          </div>

          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-[57.78px] font-extrabold">5</dt>
            <dd className="font-light text-dt-white">Completed projects</dd>
          </div>

          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-[57.78px] font-extrabold">1M</dt>
            <dd className="font-light text-dt-white">Spent</dd>
          </div>

          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-[57.78px] font-extrabold">100+</dt>
            <dd className="font-light text-dt-white">Community Members</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  return (
    <div className="h-fit pb-[80px] w-full ">
      <div className="px-[9%] flex items-center justify-between w-full">
        <h1 className="text-dt-black font-poppins text-[32px] my-[55px]">
          Our latest Projects
        </h1>
        <Link to={"contactus"} className="flex items-center text-dt-blue gap-2 hover:underline">Explore more projects
        <BiArrowFromLeft size={25}/>
        </Link>
      </div>

      <div className="grid grid-cols-3 px-[9%] justify-between gap-[74.67px] h-fit py-[40px]">
        <DtCards
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf2Jx9ZnIE_SkZaYXdxBRrpGEwhfDyI6dg&usqp=CAU"
          }
          project={true}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry."
          }
          title={"Lorem Ipsum is simply dummy text of the printing."}
        />

        <DtCards
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSC-0YrEvC6x5QVS4gZbGFrhF1-EZi2jyg&usqp=CAU"
          }
          project={true}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry."
          }
          title={"Lorem Ipsum is simply dummy text of the printing."}
        />

        <DtCards
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf2Jx9ZnIE_SkZaYXdxBRrpGEwhfDyI6dg&usqp=CAU"
          }
          project={true}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry."
          }
          title={"Lorem Ipsum is simply dummy text of the printing."}
        />
      </div>
    </div>
  );
};

function ServicesPage(props) {
  return (
    <div>
      <TopSection />
      <Secondsection />
      <SocialProof />
      <ProjectsSection />
      <CallToAction />
    </div>
  );
}

export default ServicesPage;
