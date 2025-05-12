
import StudentDashboard from "@/components/student/StudentDashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StudentDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 bg-gray-50">
        <StudentDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default StudentDashboardPage;
