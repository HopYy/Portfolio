import { Camera, Video } from "lucide-react";
import InfoCard from "../components/cards/InfoCard";

const cards = [
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

const AboutMe = () => {
  return (
    <div className="p-8 overflow-auto space-y-8">
      <div>
        <p className="text-gray-200 font-semibold">
          Hi, I'm Stipe Bošnjak, a 19-year-old web developer. My journey into
          coding began four years ago with a playful experiment on YouTube that
          sparked a lasting interest in web development. Over time, I learned
          HTML, CSS, and JavaScript, and spent countless hours improving my
          skills. Although I took a brief break, I returned with even more
          dedication and eventually started freelancing on Upwork and Fiverr,
          gaining valuable experience working with clients.
        </p>
        <br />
        <p className="text-gray-200 font-semibold">
          I focus on creating websites that are both functional and
          user-friendly. I believe in writing clean, efficient code to ensure
          that every site I build works well and provides a smooth experience
          for users. Whether it's designing a simple layout or tackling a more
          complex project, I always aim to deliver a product that meets the
          needs of both clients and users.
        </p>
      </div>
      <div>
        <h1 className="text-2xl text-white font-bold mb-4">
          Languages and Tools:
        </h1>
        <div className="flex gap-4">
          <img
            align="left"
            alt="JavaScript"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          />
          <img
            align="left"
            alt="TypeScript"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          />
          <img
            align="left"
            alt="React"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            align="left"
            alt="Next"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />
          <img
            align="left"
            alt="Redux"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
          />
          <img
            align="left"
            alt="HTML"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          />
          <img
            align="left"
            alt="CSS"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          />
          <img
            align="left"
            alt="TailwindCSS"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
          <img
            align="left"
            alt="NodeJS"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            align="left"
            alt="MongoDB"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <img
            align="left"
            alt="MySQL"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl text-white font-bold whitespace-nowrap my-4">
          More about me
        </h1>
        {cards.map((card) => (
          <InfoCard key={card.title} title={card.title} text={card.text}>
            {card.element}
          </InfoCard>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
