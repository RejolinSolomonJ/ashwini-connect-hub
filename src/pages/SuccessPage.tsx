
import { Link, useLocation, Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  const location = useLocation();
  const { type, name } = location.state || {};

  if (!type || !name) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-md text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-education-blue mb-4">Registration Successful!</h1>
          <p className="text-lg mb-8 text-gray-700">
            Thank you, {name}! Your {type === 'student' ? 'student' : 'staff'} registration has been 
            successfully submitted. We will get in touch with you shortly.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full">Back to Home</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="w-full">Explore Courses</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
