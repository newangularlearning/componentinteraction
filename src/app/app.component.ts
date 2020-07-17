import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngApp';
  myInputMessage:string="I am parent component.";

  getChildData(data){
    console.log(data);
  }
}
