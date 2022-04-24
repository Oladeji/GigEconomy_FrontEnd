import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { HttpClient } from '@angular/common/http';
import {MystorageService} from '../../services/mystorage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form : FormGroup;
  constructor (private router :Router, private formbuilder :FormBuilder, private http:HttpClient,private storageService :MystorageService){
      this.form = new LoginPageForm(this.formbuilder).createForm();

  }




  login() {
    //this.router.navigate(['home'])
    var url ="https://localhost:7156/Token/Login";
    var body =
    {
      "email": this.form.value.email,
      "password": this.form.value.password
    }
    console.log(body)
    this.http.post(url,body).subscribe((response:any)=>{
    var x= response;
    console.log(response)
    console.log(x.token.token)

    this.storageService.Deletekey("token").then(
      ()=>{    this.storageService.Savekey("token","Bearer "+response.token.token).then(
      ()=>{

        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(response)
          }
        };

        if(response.usertype=="CLIENT")
        {this.router.navigate(['/clienthome'],navigationExtras)}
        if(response.usertype=="PROVIDER")
        {this.router.navigate(['/serviceproviderhome'],navigationExtras)}
      })
    
    }
    )

    

    })
    
  }

  ngOnInit() {
   
  }


}
