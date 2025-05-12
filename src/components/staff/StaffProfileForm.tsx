
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
import { Checkbox } from "@/components/ui/checkbox";

const subjects = [
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'physics', label: 'Physics' },
  { id: 'chemistry', label: 'Chemistry' },
  { id: 'biology', label: 'Biology' },
  { id: 'english', label: 'English' },
  { id: 'social', label: 'Social Science' },
  { id: 'hindi', label: 'Hindi' },
  { id: 'computer', label: 'Computer Science' },
  { id: 'engineering_math', label: 'Engineering Mathematics' },
];

const StaffProfileForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubjectChange = (subjectId: string, checked: boolean) => {
    if (checked) {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    } else {
      setSelectedSubjects(selectedSubjects.filter(id => id !== subjectId));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedSubjects.length === 0) {
      toast.error('Please select at least one subject that you teach.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, we would submit to a backend service
      console.log('Staff profile submission:', { 
        name, 
        address, 
        subjects: selectedSubjects, 
        phone,
        qualification,
        experience
      });
      
      // Simulate submission success
      setTimeout(() => {
        toast.success('Profile completed successfully!');
        setIsLoading(false);
        navigate('/staff-dashboard');
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
          Please provide your details as a staff member
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="staff-name">Full Name</Label>
            <Input
              id="staff-name"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="staff-address">Address</Label>
            <Textarea
              id="staff-address"
              placeholder="Your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Subjects You Teach</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border rounded-md p-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={subject.id} 
                    checked={selectedSubjects.includes(subject.id)} 
                    onCheckedChange={(checked) => handleSubjectChange(subject.id, checked === true)}
                  />
                  <label
                    htmlFor={subject.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {subject.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="staff-qualification">Qualification</Label>
              <Input
                id="staff-qualification"
                placeholder="e.g., M.Sc., B.Ed."
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="staff-experience">Experience (Years)</Label>
              <Input
                id="staff-experience"
                type="number"
                min="0"
                placeholder="Years of experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="staff-phone">Phone Number</Label>
            <Input
              id="staff-phone"
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
            className="w-full bg-education-blue hover:bg-education-blue/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Complete Profile'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default StaffProfileForm;
