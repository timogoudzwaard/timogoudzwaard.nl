import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { github } from '../config/values';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="p-6 md:p-8">
          <ol className="list-none flex items-center justify-center space-x-12">
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="fill-current text-gray-800 hover:text-gray-500 transform hover:scale-110 transition"
                  icon={faGithub}
                  size="3x"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/timo-goudzwaard/"
              >
                <FontAwesomeIcon
                  className="fill-current text-blue-600 hover:text-blue-800 transform hover:scale-110 transition"
                  icon={faLinkedin}
                  size="3x"
                />
              </a>
            </li>
          </ol>
        </nav>
        <div className="border-b-2 max-w-6xl mx-auto" />
      </div>
    </header>
  );
};

export default Header;
