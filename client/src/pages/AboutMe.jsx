import { Link } from "react-router-dom";
import { Camera, Github, Linkedin, Video } from "lucide-react";

import InfoCard from "../components/cards/InfoCard";
import NoteCard from "../components/cards/NoteCard";

const personalInfo = [
  { note: "Stipe Bošnjak", golden: false },
  { note: "19-year-old developer", golden: false },
  { note: "Frontend", golden: true },
  { note: "3 years of experience", golden: false },
  { note: "Sinj, Croatia", golden: false },
];

const technologies = [
  { note: "JavaScript", golden: true },
  { note: "TypeScript", golden: false },
  { note: "React", golden: true },
  { note: "Redux", golden: false },
  { note: "Next.js", golden: false },
  { note: "Angular", golden: false },
  { note: "SCSS", golden: false },
  { note: "Tailwind", golden: false },
  { note: "Node.js", golden: true },
  { note: "Express.js", golden: false },
  { note: "MongoDB", golden: true },
  { note: "MySQL", golden: false },
  { note: "Git", golden: false }
];

const aboutCards = [
  {
    title: "PHOTOSHOP",
    text: "I have experience with Photoshop, where I focus on creating high-quality images.",
    element: <Camera color="white" size={20} />,
  },
  {
    title: "VIDEO EDITING",
    text: "I enjoy video editing and take pride in producing well-edited videos.",
    element: <Video color="white" size={20} />,
  },
];

const socialCards = [
  {
    title: "LINKEDIN",
    text: "Follow me on LinkedIn",
    href: "https://www.linkedin.com/in/stipe-bo%C5%A1njak/",
    element: <Linkedin color="white" size={20} />,
  },
  {
    title: "GITHUB",
    text: "Follow me on Github",
    href: "https://github.com/HopYy",
    element: <Github color="white" size={20} />,
  },
];

const AboutMe = () => {
  return (
    <div className="pb-8 px-8 overflow-auto space-y-8">
      <div className="flex items-center gap-4">
        <div className="bg-yellow-400 rounded-full w-3 h-3" />
        <span className="text-xs text-white font-semibold">specialized in</span>
      </div>
      <div>
        <h1 className="text-xl text-white font-semibold my-4">
          Personal Information 
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          {personalInfo.map((info) => (
            <NoteCard note={info.note} golden={info.golden} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl text-white font-semibold my-4">
          Languages and Tools
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          {technologies.map((info) => (
            <NoteCard note={info.note} golden={info.golden} />
          ))}
        </div>
      </div>
      <div className="space-y-4 max-lg:hidden">
        <h1 className="text-2xl text-white font-bold whitespace-nowrap my-4">
          More About Me
        </h1>
        {aboutCards.map((card) => (
          <InfoCard key={card.title} title={card.title} text={card.text}>
            {card.element}
          </InfoCard>
        ))}
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl text-white font-bold whitespace-nowrap my-4">
          Find Me Online
        </h1>
        {socialCards.map((card) => (
          <Link to={card.href} target="_blank" rel="noopener noreferrer">
            <InfoCard key={card.title} title={card.title} text={card.text}>
              {card.element}
            </InfoCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
