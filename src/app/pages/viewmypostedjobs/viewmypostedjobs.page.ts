import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Defaultvalue } from 'src/app/models/defaults';
import { JobDto2 } from 'src/app/models/JobDto2';
import { LoggeduserinfoService } from 'src/app/services/loggeduserinfo.service';
import { MystorageService } from 'src/app/services/mystorage.service';

@Component({
  selector: 'app-viewmypostedjobs',
  templateUrl: './viewmypostedjobs.page.html',
  styleUrls: ['./viewmypostedjobs.page.scss'],
})
export class ViewmypostedjobsPage implements OnInit {
  mydata: JobDto2[];
  data: any;

  constructor(private http : HttpClient  ,private storageService : MystorageService, private loggedinservice:LoggeduserinfoService) 
   { }

  ngOnInit() {
    this.data = this.loggedinservice.RetrieveUserInfo();
    this.ViewAllJobsPostedbyClient()
    console.log("after init")
  }


  ViewAllJobsPostedbyClient() {
  var url = Defaultvalue.baseUrl+Defaultvalue.clientviewjobs
  this.storageService.Findkey("token").then(token=>{
        var x =token.value 
        console.log(x)
        const headers = {  'Authorization':x ,'Content-Type': 'application/json'} 
        this.http.get(url,{headers:headers}).subscribe((response:JobDto2[])=>{
             this.mydata= response;
             console.log("SHow data")
             console.log(this.mydata)
             console.table(this.mydata)


    }
  )

  })
  
}

}
