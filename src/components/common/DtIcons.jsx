import React from "react";

export default function DtIcon({
  onClickIconHandler,
  badgePresent,
  badgeNumber,
  icon,
  to,
  iconStyle,
  borderPresent,
  borderStyle,
}) {
  return (
    <a href={to} onClick={onClickIconHandler}>
      <div className={`${badgePresent && "flex mr-[-13px]"} cursor-pointer `}>
        <div
          className={`text-dt-darkgreen grid place-items-center ${
            iconStyle ? iconStyle : ""
          } ${
            borderPresent &&
            `border-solid border text-dt-green hover:bg-dt-green rounded-[5px] ${
              borderStyle ? borderStyle : ""
            } `
          }`}
        >
          {icon}
        </div>

        {badgeNumber > 0 && badgePresent && (
          <div className="grid place-items-center border border-dt-green hover:border-dt bg-dt-white text-dt-green text-[10px] text-center rounded-[20px] mt-[16px] ml-[-13px] h-fit w-fit px-1">
            {badgeNumber}
          </div>
        )}
      </div>
    </a>
  );
}
