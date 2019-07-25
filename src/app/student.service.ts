import { Injectable } from '@angular/core';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public Students: Student[];

  constructor() {
         this.Students = [
      new Student('name1', 'surname1', '1111111'),
      new Student('name2', 'surname2', '2222222'),
      new Student('name3', 'surname3', '3333333'),
      new Student('name4', 'surname4', '4444444')
    ] }

  getStidentList(): Student[]{
    return this.Students;
  }

  addStudent(student: Student): boolean{
    var existingStudent = this.Students.find(e => e.privateNumber == student.privateNumber);

    if(existingStudent == null){
    this.Students.push(new Student(student.name, student.surname, student.privateNumber));
    }
    return true;
  }

  deleteStudent(student: Student): void{

    var index = this.Students.indexOf(student);
    this.Students.splice(index, 1);

    //პორკე არ მუშაობს //გავიგეთ რატომაც არ მუშაობს :დ 
    // this.Students = this.Students.filter(e => e.privateNumber == student.privateNumber);
  }

  updateStudent(student: Student): void{
    var editedStudent = this.Students.find(e => e.privateNumber == student.privateNumber);

    editedStudent.name = student.name;
    editedStudent.surname = student.surname;
  }

  cancel(student: Student): void{
    var st = this.Students.find(e => e.privateNumber == student.privateNumber);

    student.name = st.name;
    student.surname = st.surname;
  }
}
