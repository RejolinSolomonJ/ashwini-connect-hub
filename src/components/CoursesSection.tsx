
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Class 9-10 CBSE",
    description: "All subjects including Mathematics, Science, Social Science, English, and Hindi.",
    image: "/placeholder.svg",
    link: "/courses/cbse-9-10"
  },
  {
    title: "Class 9-10 State Board",
    description: "Complete coaching for all State Board subjects with expert faculty.",
    image: "/placeholder.svg",
    link: "/courses/state-9-10"
  },
  {
    title: "Class 11-12 Science",
    description: "Specialized coaching in Mathematics, Physics, and Chemistry for Science students.",
    image: "/placeholder.svg",
    link: "/courses/11-12-science"
  },
  {
    title: "Engineering Mathematics",
    description: "Comprehensive coaching in all Mathematics subjects for engineering students.",
    image: "/placeholder.svg",
    link: "/courses/engineering-math"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-education-blue mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to help students excel in their academics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={course.image} 
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
                <Link to={course.link} className="w-full">
                  <Button className="w-full bg-education-teal hover:bg-education-teal/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
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
