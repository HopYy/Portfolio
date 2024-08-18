import { Mail, Smartphone, Cake, MapPin, Linkedin, Github } from "lucide-react";

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
  return (
    <div className="max-w-80 grow rounded-xl bg-second-color 2xl:pt-16 p-5 flex flex-col items-center">
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
      <div className="pt-5 flex-1 flex flex-col justify-between space-y-2 overflow-auto">
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
  );
};

export default Sidebar;
