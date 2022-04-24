import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serviceproviderhome',
  templateUrl: './serviceproviderhome.page.html',
  styleUrls: ['./serviceproviderhome.page.scss'],
})
export class ServiceproviderhomePage implements OnInit {

  data: any;

 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params:any) => {
     // if (params && params.special) {
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
