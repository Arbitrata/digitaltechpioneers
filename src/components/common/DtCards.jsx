import React from "react";

export const DtCards = ({ project, to, image, title, description }) => {
  return (
    <>
      {project && (
        <a href={to}>
          <div className="w-[296px] pb-8 rounded-[40px] p-px block hover:shadow-xl hover:translate-y-0.5  scale-110 hover:cursor-pointer">
            <img src={image} alt="andrew" className="rounded-[40px]" />
            <div className="my-[35.55px] px-2 w-full h-fit">
              <h1 className="fornt-poppins text-dt-black text-[20.44px]">
                {title}
              </h1>
            </div>
            <div className="px-2 w-full h-fit">
              <p className="fornt-poppins text-dt-black text-opacity-50 text-[16.33px]">
                {description}
              </p>
            </div>
          </div>
        </a>
      )}
    </>
  );
};
