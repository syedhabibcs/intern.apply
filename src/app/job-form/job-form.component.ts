import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  constructor() { }

  

  form = new FormGroup({
    organization: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    appDeadline: new FormControl('', Validators.required),
    salary: new FormControl(),
    process: new FormControl(),
    description: new FormControl('', Validators.required)
  });
  
  
  ngOnInit() {
  }

}