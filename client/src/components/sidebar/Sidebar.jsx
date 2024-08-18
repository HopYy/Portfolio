import { Mail, Smartphone, Cake, MapPin, Linkedin, Github } from "lucide-react";

import Avatar from "../../assets/avatar.jpg";

const Sidebar = () => {
  return (
    <div className="max-w-80 grow rounded-xl bg-second-color pt-16 p-5 flex flex-col items-center">
      <div className="flex flex-col items-center border-b-2 border-third-color pb-5">
        <div className="w-36 h-w-36 overflow-hidden rounded-3xl">
          <img
            className="object-cover object-center"
            src={Avatar}
            alt="Avatar"
            loading="lazy"
          />
        </div>
        <h1 className="text-3xl text-white font-bold my-5 select-none">
          Stipe Bošnjak
        </h1>
        <div className="px-5 py-2 bg-third-color rounded-xl">
          <span className="text-sm text-white select-none">Web developer</span>
        </div>
      </div>
      <div className="pt-5 flex-1 flex flex-col justify-between">
        <div className="flex items-center w-full max-w-full space-x-4">
          <div className="bg-third-color p-3.5 rounded-xl shrink-0">
            <Mail color="white" size={20} />
          </div>
          <div className="flex flex-col justify-center flex-1 overflow-hidden">
            <h1 className="text-gray-300 text-sm font-semibold">EMAIL</h1>
            <h1 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              stipebosnjakweb@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex items-center w-full max-w-full  space-x-4">
          <div className="bg-third-color p-3.5 rounded-xl shrink-0">
            <Smartphone color="white" size={20} />
          </div>
          <div className="flex flex-col justify-center flex-1 overflow-hidden">
            <h1 className="text-gray-300 text-sm font-semibold">PHONE</h1>
            <h1 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              +385 99 487 0052
            </h1>
          </div>
        </div>
        <div className="flex items-center w-full max-w-full space-x-4">
          <div className="bg-third-color p-3.5 rounded-xl shrink-0">
            <Cake color="white" size={20} />
          </div>
          <div className="flex flex-col justify-center flex-1 overflow-hidden">
            <h1 className="text-gray-300 text-sm font-semibold">BIRTHDAY</h1>
            <h1 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              May 26, 2005
            </h1>
          </div>
        </div>
        <div className="flex items-center w-full max-w-full space-x-4">
          <div className="bg-third-color p-3.5 rounded-xl shrink-0">
            <MapPin color="white" size={20} />
          </div>
          <div className="flex flex-col justify-center flex-1 overflow-hidden">
            <h1 className="text-gray-300 text-sm font-semibold">LOCATION</h1>
            <h1 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              Sinj, Croatia
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 my-10">
        <a
          href="https://www.linkedin.com/in/stipe-bo%C5%A1njak/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-third-color transition-colors p-2 rounded-lg border border-transparent hover:border-white"
        >
          <Linkedin color="gray" size={17} />
        </a>
        <a
          href="https://github.com/HopYy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-third-color transition-colors p-2 rounded-lg border border-transparent hover:border-white"
        >
          <Github color="gray" size={17} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
