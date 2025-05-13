
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Contact form submitted");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-education-blue mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for enrollment inquiries or any other information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-education-blue mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="bg-education-teal hover:bg-education-teal/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-education-blue mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-education-teal mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-2">Our Address</h4>
                  <p className="text-gray-600">
                    Kamalapuram Colony<br />
                    Red Hills High Road<br />
                    Ambattur, Chennai - 53<br />
                    (Near Baba Temple)<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-education-teal mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-2">Phone Number</h4>
                  <p className="text-gray-600">+91 70103 36298</p>
                  <p className="text-gray-600">+91 81248 01551</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-education-teal mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-2">Email</h4>
                  <p className="text-gray-600">saiashwiniacademy@gmail.com</p>
                  <p className="text-gray-600">kraman841@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium mb-2">Hours of Operation</h4>
                <p className="text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
