const DtButton = ({
  buttonType,
  buttonStyle,
  handleSubmit,
  buttonText,
  buttonIcon = true,
  iconStyle,
}) => {
  return (
    <button
      onSubmit={handleSubmit}
      type={buttonType}
      className={`h-[36.44px] gap-x-2 font-poppins bg-dt-blue rounded-[5px] items-center px-8 flex place-content-center text-[11.56px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ${
        buttonStyle ? buttonStyle : ""
      } `}
    >
      {buttonText}
      <span className={`${iconStyle ? iconStyle : ""}`}>
        {buttonIcon ? buttonIcon : ""}
      </span>
    </button>
  );
};

export default DtButton;
