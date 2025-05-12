
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StaffProfileForm from "@/components/staff/StaffProfileForm";

const StaffProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-education-blue mb-8">Staff Profile</h1>
          <StaffProfileForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StaffProfilePage;
