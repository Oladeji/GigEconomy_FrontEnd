import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form : FormGroup;
  constructor (private router :Router, private formbuilder :FormBuilder, private http:HttpClient){
      this.form = new LoginPageForm(this.formbuilder).createForm();

  }


  register() {
    this.router.navigate(['register'])
  }



  

  login() {
    //this.router.navigate(['home'])
    var url ="https://localhost:7156/Token/Login";
    var body =
    {
      "email": "akomspatrick7@yahoo.com",
      "password": "Deji7@Akoms"
    }
    this.http.post(url,body).subscribe(respose=>{
      console.log(respose)

    })
    
  }

  ngOnInit() {
   
  }


}
