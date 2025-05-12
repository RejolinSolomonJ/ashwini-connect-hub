
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const StudentProfileForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [boardType, setBoardType] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real app, we would submit to a backend service
      console.log('Student profile submission:', { 
        name, 
        address, 
        class: classLevel, 
        board: boardType,
        subject, 
        phone 
      });
      
      // Simulate submission success
      setTimeout(() => {
        toast.success('Profile completed successfully!');
        setIsLoading(false);
        navigate('/student-dashboard');
      }, 1500);
    } catch (error) {
      console.error('Profile submission error:', error);
      toast.error('Profile submission failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Complete Your Profile</CardTitle>
        <CardDescription className="text-center">
          Please provide your details as a student
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="student-name">Full Name</Label>
            <Input
              id="student-name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="student-address">Address</Label>
            <Textarea
              id="student-address"
              placeholder="Your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="student-class">Class</Label>
              <Select value={classLevel} onValueChange={setClassLevel} required>
                <SelectTrigger id="student-class">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                  <SelectItem value="11">Class 11</SelectItem>
                  <SelectItem value="12">Class 12</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="student-board">Board</Label>
              <Select value={boardType} onValueChange={setBoardType} required>
                <SelectTrigger id="student-board">
                  <SelectValue placeholder="Select Board" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbse">CBSE</SelectItem>
                  <SelectItem value="state">State Board</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="student-subject">Subject Name</Label>
            <Input
              id="student-subject"
              placeholder="e.g., Mathematics, Physics, All Subjects"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="student-phone">Phone Number</Label>
            <Input
              id="student-phone"
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-education-teal hover:bg-education-teal/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Complete Profile'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default StudentProfileForm;
