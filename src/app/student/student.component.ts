import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() myinputMsg:string='';
  @Output() myOutput:EventEmitter<string> = new EventEmitter<string>();
  outputMessage:string="I am child component";
  message:string="I am child component from viewchild";

  constructor(private data:DataService) { }

  ngOnInit() {
    console.log(this.myinputMsg);
    this.sendValues();
    this.changeMessage();
  }

  sendValues(){
    this.myOutput.emit(this.outputMessage);
  }

  changeMessage(){
    this.data.changeMessage("I am a student component");
  }

}
