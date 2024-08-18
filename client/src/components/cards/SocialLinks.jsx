import { Link } from "react-router-dom";

const SocialLinks = ({ children, href }) => {
  return (
    <Link
      className="bg-third-color transition-colors p-2 rounded-lg border border-transparent hover:border-white"
      to={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

export default SocialLinks;
