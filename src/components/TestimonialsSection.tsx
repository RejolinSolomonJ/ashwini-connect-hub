
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CBSE Class 12 Student",
    quote: "Thanks to Sai Ashwini Academy, I was able to score over 95% in my CBSE board exams. The teachers are exceptionally knowledgeable and supportive.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Rahul Kumar",
    role: "Engineering Student",
    quote: "The Mathematics coaching here helped me excel in my engineering entrance exams. The faculty's teaching methods make complex concepts easy to understand.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Meera Patel",
    role: "State Board Class 10 Student",
    quote: "I joined Sai Ashwini Academy for my 10th board preparation and saw a significant improvement in my grades. The study materials and test series are excellent.",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-education-blue mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experience at Sai Ashwini Academy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <h3 className="font-semibold text-education-blue">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
