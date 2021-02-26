import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { email, linkedIn } from '../config/values';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="p-6 md:p-8">
          <ol className="list-none flex items-center justify-center space-x-12">
            <li className="border p-4 rounded-full">
              <a href={email}>
                <FontAwesomeIcon
                  className="w-6 fill-current text-gray-800 hover:text-gray-500 transform hover:scale-110 transition"
                  icon={faEnvelope}
                />
              </a>
            </li>
            <li className="border p-4 rounded-full">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/timo-goudzwaard/"
              >
                <FontAwesomeIcon
                  className="w-6 fill-current text-blue-600 hover:text-blue-800 transform hover:scale-110 transition"
                  icon={faLinkedin}
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
