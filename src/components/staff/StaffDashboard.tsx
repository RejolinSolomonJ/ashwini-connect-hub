
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const staffData = {
  name: "Staff Name",
  subjects: ["Mathematics", "Physics"],
  schedule: [
    { id: 1, class: "Class 10 - CBSE", subject: "Mathematics", time: "9:00 AM - 10:30 AM", day: "Monday" },
    { id: 2, class: "Class 11 - CBSE", subject: "Physics", time: "11:00 AM - 12:30 PM", day: "Monday" },
    { id: 3, class: "Class 12 - CBSE", subject: "Mathematics", time: "9:00 AM - 10:30 AM", day: "Tuesday" },
    { id: 4, class: "Engineering", subject: "Engineering Mathematics", time: "11:00 AM - 12:30 PM", day: "Tuesday" },
  ],
  students: [
    { id: 1, name: "Student 1", class: "10", board: "CBSE", subject: "Mathematics", attendance: "90%" },
    { id: 2, name: "Student 2", class: "11", board: "CBSE", subject: "Physics", attendance: "85%" },
    { id: 3, name: "Student 3", class: "12", board: "CBSE", subject: "Mathematics", attendance: "95%" },
    { id: 4, name: "Student 4", class: "Engineering", board: "Engineering", subject: "Engineering Mathematics", attendance: "80%" },
  ],
  assignments: [
    { id: 1, name: "Weekly Assignment 1", subject: "Mathematics", class: "Class 10", dueDate: "2023-11-15", status: "Published" },
    { id: 2, name: "Monthly Test", subject: "Physics", class: "Class 11", dueDate: "2023-11-20", status: "Draft" },
  ]
};

const StaffDashboard = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {staffData.name}</h1>
        <Button variant="outline" asChild>
          <Link to="/logout">Logout</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Subjects Teaching</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{staffData.subjects.join(", ")}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Classes Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{staffData.schedule.filter(s => s.day === "Monday").length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{staffData.students.length}</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Teaching Schedule</CardTitle>
              <CardDescription>Your upcoming classes this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffData.schedule.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">{item.class} - {item.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.day} | {item.time}
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2 md:mt-0">
                      <Button size="sm">View Details</Button>
                      <Button size="sm" variant="outline">Mark Attendance</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Students</CardTitle>
              <CardDescription>List of students in your classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffData.students.map((student) => (
                  <div key={student.id} className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Class {student.class} {student.board} | {student.subject}
                      </p>
                      <p className="text-sm">Attendance: <span className="font-medium">{student.attendance}</span></p>
                    </div>
                    <div className="flex space-x-2 mt-2 md:mt-0">
                      <Button size="sm">View Profile</Button>
                      <Button size="sm" variant="outline">Contact</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="assignments">
          <Card>
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <CardTitle>Assignments & Tests</CardTitle>
                <CardDescription>Manage your assignments and tests</CardDescription>
              </div>
              <Button className="mt-4 md:mt-0">Create New</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffData.assignments.map((assignment) => (
                  <div key={assignment.id} className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">{assignment.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {assignment.subject} | {assignment.class}
                      </p>
                      <p className="text-sm">
                        Due: {new Date(assignment.dueDate).toLocaleDateString()} | 
                        <span className={`ml-2 ${assignment.status === 'Published' ? 'text-green-600' : 'text-amber-600'} font-medium`}>
                          {assignment.status}
                        </span>
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2 md:mt-0">
                      <Button size="sm">Edit</Button>
                      {assignment.status === 'Published' ? (
                        <Button size="sm" variant="outline">View Submissions</Button>
                      ) : (
                        <Button size="sm" variant="outline">Publish</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>Your personal and professional information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Full Name</span>
                  <span>{staffData.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Subjects Teaching</span>
                  <span>{staffData.subjects.join(", ")}</span>
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
  );
};

export default StaffDashboard;
