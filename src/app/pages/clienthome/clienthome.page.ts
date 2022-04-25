import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomReturnType } from 'src/app/models/CustomReturnType';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.page.html',
  styleUrls: ['./clienthome.page.scss'],
})
export class ClienthomePage implements OnInit {

  data: any;

 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params:any) => {
     // if (params && params.special) {
      console.log("Inside Client home b4")
      console.table(   params)
      this.data = JSON.parse(params.special);
     
     // }
     console.log("Inside Client home")
     console.table(   this.data)
     console.table(   this.data.imageUrl)
     console.table(   this.data.username)
    });
  }

  ngOnInit() {
  }

}
