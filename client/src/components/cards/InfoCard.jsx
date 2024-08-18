const InfoCard = ({ children, title, text }) => {
  return (
    <div className="flex items-center w-full max-w-full space-x-4">
      <div className="p-4 rounded-lg bg-third-color w-fit">{children}</div>
      <div className="flex flex-col justify-center flex-1 overflow-hidden">
        <h1 className="text-gray-300 text-sm font-semibold">{title}</h1>
        <h1 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default InfoCard;
