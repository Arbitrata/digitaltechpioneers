import React from "react";
import { Link } from "react-router-dom";
import { DtCards } from "../common/DtCards";
import { CallToAction } from "./HomePage";

export const TopSection = () => {
  return (
    <div className="top-[90px] w-full h-fit pb-[100px] pt-[140px] lg:px-[106px] md:px-[80px] px-4">
      <h1 className="text-center font-poppins text-[37.3333px] text-dt-blue">
        Our Latest Projects
      </h1>
      <div className="lg:flex w-full h-fit gap-x-[53.33px] mt-[96.89px]">
        <div className="lg:w-[484.44px] h-[302.22px] object-cover">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgerZoYn1W5-c1KpP3FYiucFrE6_N7IPhxw&usqp=CAU"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="font-poppins text-dt-black py-5">
          <h1 className="text-[24px] lg:w-[466.67px] w-full lg:h-[81.78px] h-full">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>

          <p className="lg:w-[466.67px] w-full opacity-50 lg:h-[93.33px] h-full text-[18.22px] pt-[29.33px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the .
          </p>

          <div className="grid grid-cols-2 mt-10 justify-between">
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQHxauh2UgkiRw/profile-displayphoto-shrink_200_200/0/1666429101465?e=1689206400&v=beta&t=Iy20h2ub3VHnQJIur16i_d_RO4IyUeGfryRp0m7u-28"
                alt=""
              />
              <div className="font-medium dark:text-white">
                <div>Alex Mwangi</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  August 2014
                </div>
              </div>
            </div>

            <div className="w-full text-center text-dt-blue hover:underline">
              <Link to={"/projects"}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectSection = () => {
  const projects = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf2Jx9ZnIE_SkZaYXdxBRrpGEwhfDyI6dg&usqp=CAU",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry.",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSC-0YrEvC6x5QVS4gZbGFrhF1-EZi2jyg&usqp=CAU",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry.",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf2Jx9ZnIE_SkZaYXdxBRrpGEwhfDyI6dg&usqp=CAU",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry.",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf2Jx9ZnIE_SkZaYXdxBRrpGEwhfDyI6dg&usqp=CAU",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry.",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSC-0YrEvC6x5QVS4gZbGFrhF1-EZi2jyg&usqp=CAU",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry.",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf2Jx9ZnIE_SkZaYXdxBRrpGEwhfDyI6dg&usqp=CAU",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printingand typesetting industry.",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-[9%] md:px-[80px] px-4 justify-between gap-[74.67px] gap-y-[100px] h-fit mb-[139.33px] py-[40px]">
      {projects.map((project) => (
        <div key={Math.random(200)} className="lg:px-0 md:px-0 px-4">
          <DtCards
            project={true}
            description={project.description}
            image={project.image}
            title={project.title}
          />
        </div>
      ))}
    </div>
  );
};

function ProjectPage(props) {
  return (
    <div>
      <TopSection />
      <ProjectSection />
      <CallToAction />
    </div>
  );
}

export default ProjectPage;
