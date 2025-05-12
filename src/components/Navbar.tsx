
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-education-blue text-xl font-heading font-bold">Sai Ashwini Academy</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-education-teal px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-education-teal px-3 py-2 rounded-md font-medium">
              About
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-education-teal px-3 py-2 rounded-md font-medium">
              Courses
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-education-teal px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-education-teal hover:bg-education-teal/90 text-white">
                Register
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link to="/" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link to="/about" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link to="/courses" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link to="/contact" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-education-teal hover:bg-education-teal/90 text-white">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
