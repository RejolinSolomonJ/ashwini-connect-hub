
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentProfileForm from "@/components/student/StudentProfileForm";

const StudentProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-education-blue mb-8">Student Profile</h1>
          <StudentProfileForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentProfilePage;
