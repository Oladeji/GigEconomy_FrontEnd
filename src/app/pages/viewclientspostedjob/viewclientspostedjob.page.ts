import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Defaultvalue } from 'src/app/models/defaults';
import { JobDto2 } from 'src/app/models/JobDto2';
import { JobDto3 } from 'src/app/models/JobDto3';
import { LoggeduserinfoService } from '../../services/loggeduserinfo.service';
import { MystorageService } from '../../services/mystorage.service';

@Component({
  selector: 'app-viewclientspostedjob',
  templateUrl: './viewclientspostedjob.page.html',
  styleUrls: ['./viewclientspostedjob.page.scss'],
})
export class ViewclientspostedjobPage implements OnInit {

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
    this.ViewAvailableJobs()
   
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
      
         console.log("SHow data")
         console.log(response)
        


        }
       )

})

}


}

