import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() myinputMsg:string='';
  @Output() myOutput:EventEmitter<string> = new EventEmitter<string>();
  outputMessage:string="I am child component";

  constructor() { }

  ngOnInit() {
    console.log(this.myinputMsg);
    this.sendValues();
  }

  sendValues(){
    this.myOutput.emit(this.outputMessage);
  }

}
