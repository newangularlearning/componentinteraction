import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage(){
    this.data.message.subscribe((result)=>{
      console.log(result);
    })
  }

}
