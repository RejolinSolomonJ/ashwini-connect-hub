
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "sonner";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real app, we would authenticate with a backend service
      console.log('Login attempt:', { email, password, userType });
      
      // Simulate login success
      setTimeout(() => {
        toast.success(`${userType === 'student' ? 'Student' : 'Staff'} logged in successfully!`);
        setIsLoading(false);
        
        // Redirect based on user type
        if (userType === 'student') {
          navigate('/student-dashboard');
        } else {
          navigate('/staff-dashboard');
        }
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.');
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        <CardDescription className="text-center">
          Login to your account to continue
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="student" onValueChange={(value) => setUserType(value)}>
        <TabsList className="grid grid-cols-2 mb-4 w-full">
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>
        
        <TabsContent value="student">
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-email">Email</Label>
                <Input
                  id="student-email"
                  type="email"
                  placeholder="student@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="student-password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-education-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="student-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-education-teal hover:bg-education-teal/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login as Student'}
              </Button>
              <p className="text-center text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-education-blue hover:underline">
                  Register
                </Link>
              </p>
            </CardFooter>
          </form>
        </TabsContent>
        
        <TabsContent value="staff">
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="staff-email">Email</Label>
                <Input
                  id="staff-email"
                  type="email"
                  placeholder="staff@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="staff-password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-education-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="staff-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-education-blue hover:bg-education-blue/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login as Staff'}
              </Button>
              <p className="text-center text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-education-blue hover:underline">
                  Register
                </Link>
              </p>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default LoginForm;
