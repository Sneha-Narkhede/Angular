import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';




@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  EntryForm= new FormGroup({
    UserId:new FormControl(''),
    id:new FormControl(''),
    title:new FormControl(''),
    body:new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
