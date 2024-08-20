import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import {
  Mail,
  Smartphone,
  Cake,
  MapPin,
  Linkedin,
  Github,
  X,
} from "lucide-react";

import InfoCard from "../cards/InfoCard";
import Avatar from "../../assets/avatar.jpg";
import SocialLinks from "../cards/SocialLinks";

const cards = [
  {
    title: "EMAIL",
    text: "stipebosnjakweb@gmail.com",
    element: <Mail color="white" size={20} />,
  },
  {
    title: "PHONE",
    text: "+385 99 487 0052",
    element: <Smartphone color="white" size={20} />,
  },
  {
    title: "BIRTHDAY",
    text: "May 26, 2005",
    element: <Cake color="white" size={20} />,
  },
  {
    title: "LOCATION",
    text: "Sinj, Croatia",
    element: <MapPin color="white" size={20} />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  return (
    <>
      <div
        className="xl:hidden w-10 h-10 overflow-hidden rounded-full absolute right-32 top-20 max-md:top-8 max-md:right-20 border-2 border-white"
        onClick={() => {
          setOpen(true);
        }}
      >
        <img
          className="object-cover object-center"
          src={Avatar}
          alt="Avatar"
          loading="lazy"
        />
      </div>
      <div
        ref={ref}
        className={`transition-all duration-150 ease-in-out max-xl:absolute max-xl:inset-y-0 max-xl:left-0 max-xl:z-50 bg-second-color p-5 flex flex-col items-center xl:static xl:flex xl:max-w-80 xl:rounded-xl ${
          open
            ? "max-sm:w-screen max-xl:w-96 max-xl:opacity-100"
            : "max-xl:w-0 max-xl:opacity-0"
        }`}
      >
        <div
          className="xl:hidden bg-third-color rounded-lg w-fit absolute top-0 right-0 m-4 p-1"
          onClick={() => {
            setOpen(false);
          }}
        >
          <X color="white" size={30} />
        </div>
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
            <span className="text-sm text-white select-none">
              Web developer
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between overflow-auto">
          <div className="pt-5 xl:flex-1 flex flex-col justify-between space-y-4 max-w-full min-w-0">
            {cards.map((card) => (
              <InfoCard key={card.title} title={card.title} text={card.text}>
                {card.element}
              </InfoCard>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 my-2 2xl:my-10">
            <SocialLinks href="https://www.linkedin.com/in/stipe-bo%C5%A1njak/">
              <Linkedin color="gray" size={17} />
            </SocialLinks>
            <SocialLinks href="https://github.com/HopYy">
              <Github color="gray" size={17} />
            </SocialLinks>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
