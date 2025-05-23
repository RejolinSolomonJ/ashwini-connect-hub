
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  level: string;
  board: string;
}

const CoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .limit(4);
        
        if (error) throw error;
        
        if (data) {
          // Map the courses to include better default images if none provided
          const coursesWithImages = data.map(course => ({
            ...course,
            image_url: course.image_url === '/placeholder.svg' ? getCourseDefaultImage(course.level, course.board) : course.image_url
          }));
          setCourses(coursesWithImages);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  // Helper function to get a default image based on course level and board
  const getCourseDefaultImage = (level: string, board: string) => {
    if (level === '11-12' || level.includes('11')) {
      return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800";
    } else if (level === 'Engineering' || level.includes('Engineering')) {
      return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800";
    } else if (board === 'CBSE') {
      return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
    } else {
      return "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-education-blue mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to help students excel in their academics.
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <p>Loading courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={course.image_url} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="mb-2 text-education-blue">{course.title}</CardTitle>
                  <CardDescription className="h-20">{course.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/courses" className="w-full">
                    <Button className="w-full bg-education-teal hover:bg-education-teal/90 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link to="/courses">
            <Button variant="outline" size="lg" className="font-medium">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
