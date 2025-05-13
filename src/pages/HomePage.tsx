
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-12 bg-education-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join Sai Ashwini Academy and take the first step towards academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/student-form">
                <Button size="lg" className="bg-white text-education-teal hover:bg-gray-100 px-8">
                  Register as Student
                </Button>
              </Link>
              <Link to="/staff-form">
                <Button size="lg" className="bg-education-blue hover:bg-education-blue/90 text-white px-8">
                  Register as Staff
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
