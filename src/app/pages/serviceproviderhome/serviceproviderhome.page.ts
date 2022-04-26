import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDto2 } from 'src/app/models/JobDto2';
import { MystorageService } from '../../services/mystorage.service';
import { Defaultvalue } from '../../models/defaults';
import { HttpClient } from '@angular/common/http';
import { JobDto3 } from 'src/app/models/JobDto3';
import { LoggeduserinfoService } from 'src/app/services/loggeduserinfo.service';

@Component({
  selector: 'app-serviceproviderhome',
  templateUrl: './serviceproviderhome.page.html',
  styleUrls: ['./serviceproviderhome.page.scss'],
})
export class ServiceproviderhomePage implements OnInit {

  mydata: JobDto2[]=[];
  data: any;
  dt= new JobDto3()
 
  // constructor(private http : HttpClient  ,private route: ActivatedRoute, private router: Router, private storageService : MystorageService) {
  //   this.route.queryParams.subscribe((params:any) => {
  //     if (params && params.special) {
  //     console.table( params)
  //     this.data = JSON.parse(params.special);
  //     }
    
  //   });
  // }
  constructor(private http : HttpClient  , private storageService : MystorageService,private loggedinservice: LoggeduserinfoService) {

  }
  ngOnInit() {

    this.data = this.loggedinservice.RetrieveUserInfo();
   // this.ViewAvailableJobs()
   
  }








}

