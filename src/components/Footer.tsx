
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-education-blue text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sai Ashwini Academy</h3>
            <p className="text-gray-300 mb-4">
              Providing quality education for CBSE, State Board, and Engineering Mathematics.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Sai Ashwini Academy. All rights reserved.
            </p>
            <p className="text-gray-300 mt-2">
              <a 
                href="https://linsinfotechscompanyltd.on.drv.tw/www.linsinfotechs.com/#home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Developed by Lin's Infotechs
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/student-form" className="text-gray-300 hover:text-white transition-colors">
                  Student Registration
                </Link>
              </li>
              <li>
                <Link to="/staff-form" className="text-gray-300 hover:text-white transition-colors">
                  Staff Registration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Education Street</p>
              <p className="mb-2">Bangalore, Karnataka</p>
              <p className="mb-2">India - 560001</p>
              <p className="mb-2">Phone: +91 12345 67890</p>
              <p>Email: info@saiashwiniacademy.com</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
