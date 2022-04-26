import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Defaultvalue } from 'src/app/models/defaults';
import { JobDto2 } from 'src/app/models/JobDto2';
import { MystorageService } from 'src/app/services/mystorage.service';

@Component({
  selector: 'app-viewserviceproviderintentions',
  templateUrl: './viewserviceproviderintentions.page.html',
  styleUrls: ['./viewserviceproviderintentions.page.scss'],
})
export class ViewserviceproviderintentionsPage implements OnInit {
  mydata: JobDto2[];

  constructor(private http : HttpClient  ,private storageService : MystorageService) 
   { }

  ngOnInit() {
    console.log("Inside init")
    this.ViewProvidersThatShowedIntention()
    console.log("after init")
  }


  ViewProvidersThatShowedIntention() {
  var url = Defaultvalue.baseUrl+Defaultvalue.ViewProvidersThatShowedIntention
  this.storageService.Findkey("token").then(token=>{
        var x =token.value 
        console.log(x)
        const headers = {  'Authorization':x ,'Content-Type': 'application/json'} 
        this.http.get(url,{headers:headers}).subscribe((response:JobDto2[])=>{
             this.mydata= response;

             console.table(this.mydata)

/*
address: null
alternatePhoneNo: "1"
city: "1"
country: "2£This is one list of item another 300"
distancetojoblocation: 0.5589910759440958
email: "Akomspatrick88@yahoo.com"
firstname: "sss"
houseNo: "1"
imageUrl: "https://serveradminrgdiag192.blob.core.windows.net/uweigppics/2bedb334-3eba-429c-b3f0-3ae0ae17f577.jpg"
jobId: "2"
jobdescription: "This is one list of item another 300"
joblaty: 51.4595587
joblonx: -2.510172
middlename: "1"
missionStatement: "1"
mylaty: 51.4595622
mylonx: -2.5101727
password: null
petname: "1"
phoneNo: "1"
postCode: "1"
skillTypeId: 300
surname: "Akoms88" */
    }
  )

  })
  
}

}
