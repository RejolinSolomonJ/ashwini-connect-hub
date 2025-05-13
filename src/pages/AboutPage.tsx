
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-education-blue text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Sai Ashwini Academy</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Providing excellence in education for CBSE, State Board, and Engineering Mathematics since 2010.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-education-blue mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At Sai Ashwini Academy, our mission is to provide high-quality education that empowers students
                  to achieve academic excellence and develop a strong foundation in mathematics and sciences.
                </p>
                <p className="text-gray-700 mb-4">
                  We are committed to nurturing the intellectual growth of every student through personalized
                  attention, innovative teaching methods, and a supportive learning environment.
                </p>
                <p className="text-gray-700">
                  Our goal is to instill a love for learning and to equip students with the knowledge, skills,
                  and confidence they need to succeed in their academic pursuits and beyond.
                </p>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 italic">Mission Image Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-education-blue mb-12">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-education-teal mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in all aspects of our educational services, always aiming to exceed expectations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-education-teal mb-4">Integrity</h3>
                <p className="text-gray-700">
                  We uphold the highest standards of honesty, ethics, and transparency in all our dealings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-education-teal mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We embrace innovative teaching methods and technologies to enhance the learning experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-education-teal mb-4">Compassion</h3>
                <p className="text-gray-700">
                  We provide a nurturing environment where every student feels valued, supported, and encouraged.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-education-blue mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-6">
                  <p className="text-gray-500 italic pt-20">Photo</p>
                </div>
                <h3 className="text-xl font-bold text-education-blue mb-1">Dr. Ramesh Kumar</h3>
                <p className="text-gray-600 mb-4">Founder & Director</p>
                <p className="text-gray-700">
                  Ph.D. in Mathematics with over 20 years of teaching experience across various boards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-6">
                  <p className="text-gray-500 italic pt-20">Photo</p>
                </div>
                <h3 className="text-xl font-bold text-education-blue mb-1">Mrs. Sujatha Reddy</h3>
                <p className="text-gray-600 mb-4">Academic Head</p>
                <p className="text-gray-700">
                  M.Sc. in Physics with specialized expertise in CBSE curriculum development.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-6">
                  <p className="text-gray-500 italic pt-20">Photo</p>
                </div>
                <h3 className="text-xl font-bold text-education-blue mb-1">Prof. Venkat Rao</h3>
                <p className="text-gray-600 mb-4">Engineering Mathematics Expert</p>
                <p className="text-gray-700">
                  Former professor at NIE with extensive experience in teaching engineering mathematics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
