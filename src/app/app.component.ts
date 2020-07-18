import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {StudentComponent} from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngApp';
  myInputMessage:string="I am parent component.";
  @ViewChild(StudentComponent) student:StudentComponent;

  getChildData(data){
    console.log(data);
  }

  ngAfterViewInit(){
    console.log(this.student.message);
  }
}
