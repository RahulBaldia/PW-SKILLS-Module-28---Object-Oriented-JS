// Class representing a Student
class Student {
    constructor(studentName) {
        this.studentName = studentName;
        this.courses = [];
    }

    // Method to enroll the student in a course
    enrollInCourse(courseName) {
        if (!this.courses.includes(courseName)) {
            this.courses.push(courseName);
            console.log(`${this.studentName} has enrolled in ${courseName}.`);
        } else {
            console.log(`${this.studentName} is already enrolled in ${courseName}.`);
        }
    }

    // Method to display the courses the student is enrolled in
    displayEnrolledCourses() {
        if (this.courses.length > 0) {
            console.log(`${this.studentName} is enrolled in the following courses: ${this.courses.join(", ")}`);
        } else {
            console.log(`${this.studentName} is not enrolled in any courses.`);
        }
    }
}

// Class handling Admission and tracking of enrollments
class Admission {
    constructor() {
        this.students = [];
    }

    // Method to add a student to the system
    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
            console.log(`Student ${student.studentName} has been added.`);
        } else {
            console.log("Invalid student.");
        }
    }

    // Method to enroll a student in a course
    admitStudentToCourse(studentName, courseName) {
        const student = this.students.find(s => s.studentName === studentName);
        if (student) {
            student.enrollInCourse(courseName);
        } else {
            console.log(`Student ${studentName} not found.`);
        }
    }

    // Method to display all enrolled students and their courses
    displayEnrolledStudents() {
        if (this.students.length > 0) {
            console.log("Enrolled Students and their Courses:");
            this.students.forEach(student => {
                student.displayEnrolledCourses();
            });
        } else {
            console.log("No students are enrolled.");
        }
    }
}

// Example usage
const admissionSystem = new Admission();

const student1 = new Student("Alice Johnson");
const student2 = new Student("Bob Smith");

admissionSystem.addStudent(student1); // Student Alice Johnson has been added.
admissionSystem.addStudent(student2); // Student Bob Smith has been added.

admissionSystem.admitStudentToCourse("Alice Johnson", "Math 101"); // Alice Johnson has enrolled in Math 101.
admissionSystem.admitStudentToCourse("Alice Johnson", "Physics 201"); // Alice Johnson has enrolled in Physics 201.
admissionSystem.admitStudentToCourse("Bob Smith", "Chemistry 101"); // Bob Smith has enrolled in Chemistry 101.

admissionSystem.displayEnrolledStudents();
// Enrolled Students and their Courses:
// Alice Johnson is enrolled in the following courses: Math 101, Physics 201
// Bob Smith is enrolled in the following courses: Chemistry 101
