import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chooseregistrationtype',
  templateUrl: './chooseregistrationtype.page.html',
  styleUrls: ['./chooseregistrationtype.page.scss'],
})
export class ChooseregistrationtypePage implements OnInit {
 radiogroup:string;
  constructor(private router :Router) { }

  ngOnInit() {
  }
  Register()
  {
   if (this.radiogroup=="Provider")
   {
    this.router.navigate(['registerprovider'])
   }
   if (this.radiogroup=="Client")
   {
    this.router.navigate(['register'])
   }
  }
}
