
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const studentData = {
  name: "Student Name",
  class: "10",
  board: "CBSE",
  subject: "All Subjects",
  enrollmentDate: "2023-08-15",
  nextFeeDate: "2023-12-15",
  attendance: "85%",
  upcomingTests: [
    { id: 1, name: "Mathematics Weekly Test", date: "2023-11-05" },
    { id: 2, name: "Science Monthly Test", date: "2023-11-15" },
  ],
  assignments: [
    { id: 1, name: "Physics Assignment", subject: "Physics", dueDate: "2023-11-10", status: "Pending" },
    { id: 2, name: "Mathematics Assignment", subject: "Mathematics", dueDate: "2023-11-12", status: "Submitted" },
  ]
};

const StudentDashboard = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {studentData.name}</h1>
        <Button variant="outline" asChild>
          <Link to="/logout">Logout</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Class & Board</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Class {studentData.class} - {studentData.board}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{studentData.subject}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{studentData.attendance}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Fee Due</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{new Date(studentData.nextFeeDate).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tests</CardTitle>
            <CardDescription>Your scheduled tests and exams</CardDescription>
          </CardHeader>
          <CardContent>
            {studentData.upcomingTests.length > 0 ? (
              <div className="space-y-4">
                {studentData.upcomingTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">{test.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Date: {new Date(test.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No upcoming tests scheduled.</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Assignments</CardTitle>
            <CardDescription>Your current and pending assignments</CardDescription>
          </CardHeader>
          <CardContent>
            {studentData.assignments.length > 0 ? (
              <div className="space-y-4">
                {studentData.assignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">{assignment.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Subject: {assignment.subject} | Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </p>
                      <p className={`text-sm ${assignment.status === 'Submitted' ? 'text-green-600' : 'text-amber-600'} font-medium`}>
                        {assignment.status}
                      </p>
                    </div>
                    <Button size="sm" variant={assignment.status === "Submitted" ? "outline" : "default"}>
                      {assignment.status === "Submitted" ? "View" : "Submit"}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No assignments due.</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Your personal and academic information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Full Name</span>
                    <span>{studentData.name}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Enrollment Date</span>
                    <span>{new Date(studentData.enrollmentDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Academic Details</h3>
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Class & Board</span>
                    <span>Class {studentData.class} - {studentData.board}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Subject</span>
                    <span>{studentData.subject}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
