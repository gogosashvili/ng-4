import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  students: Student[];
  student: Student;

  constructor(private studentService: StudentService) { 
    this.student = new Student('', '', '');
  }

  getStudents(): void{
    this.students = this.studentService.getStidentList();
  }
  
  addStudent(): void{
    if (this.student.name != '' && this.student.surname !='' && this.student.privateNumber !=''){
    this.studentService.addStudent(this.student);
    this.student.name = '';
    this.student.surname ='';
    this.student.privateNumber = '';
    }
  }

  deleteStudent(student: Student): void{
    this.studentService.deleteStudent(student);
  }

  getStudent(student: Student): void{
    this.student.name = student.name;
    this.student.surname = student.surname;
    this.student.privateNumber = student.privateNumber;
  }

  editStudent(student: Student): void{
    this.studentService.updateStudent(student);

    this.student.name = '';
    this.student.surname ='';
    this.student.privateNumber = '';
  }

  cancel(student: Student): void{
    this.studentService.cancel(student);
  }

  ngOnInit() {
    this.getStudents();
  }
 
}
