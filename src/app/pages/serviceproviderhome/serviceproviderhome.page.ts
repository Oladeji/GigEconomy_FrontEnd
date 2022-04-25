import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDto2 } from 'src/app/models/JobDto2';
import { MystorageService } from '../../services/mystorage.service';
import { Defaultvalue } from '../../models/defaults';
import { HttpClient } from '@angular/common/http';
import { JobDto3 } from 'src/app/models/JobDto3';

@Component({
  selector: 'app-serviceproviderhome',
  templateUrl: './serviceproviderhome.page.html',
  styleUrls: ['./serviceproviderhome.page.scss'],
})
export class ServiceproviderhomePage implements OnInit {

  mydata: JobDto2[]=[];
  data: any;
  dt= new JobDto3()
 
  constructor(private http : HttpClient  ,private route: ActivatedRoute, private router: Router, private storageService : MystorageService) {
    this.route.queryParams.subscribe((params:any) => {
 
      console.table( params)
      this.data = JSON.parse(params.special);
     
    
    });
  }

  ngOnInit() {
    console.log("Inside init")
    this.ViewAvailableJobs()
    console.log("after init")
  }


 ViewAvailableJobs() {
  var url = Defaultvalue.baseUrl+Defaultvalue.providerviewjobs
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


Apply4Job(job:JobDto2){
   console.log(job)
   console.log(this.data )
   var url = Defaultvalue.baseUrl+Defaultvalue.expressinterest
   //this.dt.JobId=job.jobBoardId;
   const body = {"JobId":job.jobBoardId.toString()};
   console.log(body)
   this.storageService.Findkey("token").then(token=>{
    var x =token.value 
    console.log(x)
    const headers = {  'Authorization':x ,'Content-Type': 'application/json'} 
    this.http.post(url,body,{headers:headers}).subscribe((response:JobDto2[])=>{
         this.mydata= response;
         console.log("SHow data")
         console.log(this.mydata)
         console.table(this.mydata)


        }
       )

})

}


}

