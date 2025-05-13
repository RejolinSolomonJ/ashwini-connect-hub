import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-education-blue text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Get in touch with us for enrollment inquiries or any other information.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-education-blue mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full"
                  />
                  <Input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    className="w-full min-h-[150px]"
                  />
                  <Button 
                    type="submit" 
                    className="bg-education-teal hover:bg-education-teal/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-education-blue mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-education-teal mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-medium mb-2">Our Address</h4>
                      <p className="text-gray-600">
                        Kamalapuram Colony<br />
                        Red Hills High Road<br />
                        Ambattur, Chennai - 53<br />
                        Near Baba Temple<br />
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
                    <p className="text-gray-600">Monday to Sunday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Embed */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-education-blue mb-8">Find Us</h2>
            <div className="rounded-lg overflow-hidden h-[450px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6053833717956!2d80.14740941037563!3d13.124167111462167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52630769837c45%3A0xddfd4bc485e054f2!2sShri%20Shirdi%20Sai%20Baba%20Trust%20Temple!5e0!3m2!1sen!2sin!4v1747110277428!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
