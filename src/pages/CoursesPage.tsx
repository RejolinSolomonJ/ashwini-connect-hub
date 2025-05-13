
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  level: string;
  board: string;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>("all");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select('*');
        
        if (error) throw error;
        
        if (data) {
          setCourses(data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);
  
  const filteredCourses = selectedTab === "all" 
    ? courses 
    : courses.filter(course => 
        course.board.toLowerCase() === selectedTab || 
        course.level.toLowerCase() === selectedTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-education-blue text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Explore our comprehensive range of courses designed to help students excel in their academics.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="cbse">CBSE</TabsTrigger>
                  <TabsTrigger value="state">State Board</TabsTrigger>
                  <TabsTrigger value="11-12">11-12 Science</TabsTrigger>
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={selectedTab}>
                {loading ? (
                  <div className="text-center py-12">
                    <p>Loading courses...</p>
                  </div>
                ) : filteredCourses.length === 0 ? (
                  <div className="text-center py-12">
                    <p>No courses found for this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                      <Card key={course.id} className="h-full">
                        <div className="h-48 bg-gray-100 overflow-hidden">
                          <img 
                            src={course.image_url || "/placeholder.svg"} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-education-blue">{course.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-500">
                            Level: {course.level} | Board: {course.board}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{course.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center text-education-blue mb-8">Course Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-education-teal mb-4">Expert Faculty</h3>
                  <p className="text-gray-700">
                    Learn from experienced teachers with proven track records of student success in board exams.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-education-teal mb-4">Comprehensive Study Material</h3>
                  <p className="text-gray-700">
                    Get access to well-structured study materials, practice questions, and solved examples.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-education-teal mb-4">Regular Assessments</h3>
                  <p className="text-gray-700">
                    Track your progress with regular tests, mock exams, and personalized feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
