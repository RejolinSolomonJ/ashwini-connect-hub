
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="hero-pattern relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-education-blue mb-6">
          Welcome to Sai Ashwini Academy
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
          Providing excellence in education for CBSE, State Board, and Engineering Mathematics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link to="/register">
            <Button size="lg" className="bg-education-teal hover:bg-education-teal/90 text-white px-8 py-6 text-lg">
              Register Now
            </Button>
          </Link>
          <Link to="/courses">
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
