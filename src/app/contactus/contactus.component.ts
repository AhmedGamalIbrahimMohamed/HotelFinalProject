import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Validators } from '@angular/forms';
import {FormControl } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  ContactForm = new FormGroup({

    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required),
  });

constructor() { }

  
ngOnInit(): void {
}
  get username(){
    return this.ContactForm.get('username');
  }
  get email(){
    return this.ContactForm.get('email');
  }
  get message(){
    return this.ContactForm.get('message');
  }

  onUserSubmit():void{
    console.log(this.ContactForm.value);
  }
}