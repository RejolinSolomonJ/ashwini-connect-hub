
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "CBSE & State Board Classes",
    description: "Comprehensive coaching for classes 9-12 in all subjects with expert faculty and study materials."
  },
  {
    title: "Engineering Mathematics",
    description: "Specialized coaching in all mathematics subjects for engineering students."
  },
  {
    title: "Experienced Faculty",
    description: "Learn from qualified and experienced teachers who are experts in their respective subjects."
  },
  {
    title: "Interactive Learning",
    description: "Engaging teaching methods with practical examples and regular doubt-clearing sessions."
  },
  {
    title: "Regular Assessments",
    description: "Periodic tests and assessments to track progress and improve performance."
  },
  {
    title: "Personalized Attention",
    description: "Small batch sizes to ensure individual attention and personalized learning experience."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-education-blue mb-4">Why Choose Sai Ashwini Academy?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing quality education and nurturing the academic growth of our students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="text-education-teal mr-3 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold text-education-blue">{feature.title}</h3>
              </div>
              <p className="text-gray-600 ml-9">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
