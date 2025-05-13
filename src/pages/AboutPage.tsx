
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
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Student studying" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800" 
                  alt="Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-education-blue mb-6">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  We envision Sai Ashwini Academy as a premier educational institution that is recognized for its 
                  excellence in teaching and learning, particularly in mathematics and sciences.
                </p>
                <p className="text-gray-700 mb-4">
                  We aim to create a learning environment that fosters critical thinking, problem-solving skills, 
                  and a growth mindset that prepares students not just for exams but for life's challenges.
                </p>
                <p className="text-gray-700">
                  Our vision is to be a catalyst in transforming students into confident, capable individuals who 
                  can contribute meaningfully to society and excel in their chosen fields.
                </p>
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
              {/* Member 1 */}
              <div className="text-center">
                <img
                  src="kothandaraman.jpg"
                  alt="Dr. Kothandaraman"
                  className="h-48 w-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-education-blue mb-1">Dr. Kothandaraman</h3>
                <p className="text-gray-600 mb-4">Founder & Director</p>
                <p className="text-gray-700">
                  Ph.D. in Mathematics with over 20 years of teaching experience across various boards.
                </p>
              </div>

              {/* Member 2 */}
              <div className="text-center">
                <img
                  src="pexels-andrea-piacquadio-845434.png"
                  alt="Rejolin Solomon J"
                  className="h-48 w-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-education-blue mb-1">Rejolin Solomon J</h3>
                <p className="text-gray-600 mb-4">Academic Head</p>
                <p className="text-gray-700">
                  M.Sc. in Physics with specialized expertise in CBSE curriculum development.
                </p>
              </div>

              {/* Member 3 */}
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
                  alt="Prof. Venkat Rao"
                  className="h-48 w-48 rounded-full mx-auto mb-6 object-cover"
                />
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
