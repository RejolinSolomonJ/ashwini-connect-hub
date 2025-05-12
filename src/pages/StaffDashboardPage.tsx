
import StaffDashboard from "@/components/staff/StaffDashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StaffDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 bg-gray-50">
        <StaffDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default StaffDashboardPage;
