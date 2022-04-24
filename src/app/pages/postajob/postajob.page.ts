import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { PostAJobPageForm } from './postajob.page.form';
import { Geolocation } from 'node_modules/@awesome-cordova-plugins/geolocation/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Defaultvalue } from 'src/app/models/defaults';
import { Loc } from 'src/app/models/Loc';
import { MystorageService } from 'src/app/services/mystorage.service';
import { Json_Up_Down } from 'src/app/services/httpoptions';
import { availableclass } from 'src/app/models/avallableskilltypes';

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.page.html',
  styleUrls: ['./postajob.page.scss'],
})
export class PostajobPage implements OnInit {
  public jobform : FormGroup;
  base64Image: string;
  imageElement: any;
  imageUrl: string;
  Image: any;
  seenimage: boolean=false;
  skill= new availableclass();
  constructor (private router :Router, private formbuilder :FormBuilder,
     private http:HttpClient,private geolocation: Geolocation,
    private alertController: AlertController, private storageService :MystorageService
   ){
    
  }


  
  ngOnInit() {
    this.jobform = new PostAJobPageForm (this.formbuilder).createForm();
  }

  showAlert(msg) {

    this.alertController.create({
      header: 'Alert',
      subHeader: 'Congratulations',
      message: msg,
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  postajob()

  {
    var formData = new FormData();

     this.storageService.Findkey("token").then(token=>{
      var x =token.value 
      console.log(x)
      const headers = {  'Authorization':x ,'Content-Type': 'application/json'} // this.jobform.get("imageUrl").patchValue(this.imageUrl);


      const body=JSON.stringify(this.jobform.value);

       console.table(token)
       console.table(headers)
        var url= Defaultvalue.baseUrl+ Defaultvalue.postajob;
       
       this.http.post(url,body,{headers:headers}).subscribe(
       
          (x:any)=>{
          var xx= x
         this.showAlert(xx.message)
        })
    });


  }
 

  getcurrentlocation(){this.geolocation.getCurrentPosition().then(postion=>{
    console.table(postion)
    var  newloc =new Loc(postion.coords.longitude,postion.coords.latitude);
    this.jobform.get("Location").patchValue(newloc);
    console.table(this.jobform.value)

  });


  }

  // getPicturecordova(){
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):
  //     this. base64Image = 'data:image/jpeg;base64,' + imageData;
  //     console.log( this. base64Image)
  //     this.form.patchValue({"Image":this. base64Image});

  //    }, (err) => {
  //     // Handle error
  //    }); }



    
    




  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
     // resultType: CameraResultType.Uri
      resultType: CameraResultType.Base64
    });
  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  // this.imageUrl = image.webPath;

  // Can be set to the src of an image now
  //this .imageElement.src = image;
  //this. base64Image = await this.convertTobase64(image);
  this. base64Image =  image.base64String;
  
  this.jobform.patchValue({"Image":this. base64Image});

};

 
  takePictureinProgress = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
     // resultType: CameraResultType.Uri
      resultType: CameraResultType.DataUrl
    });
  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
   this.imageUrl = image.webPath;
   this. Image=image

  // Can be set to the src of an image now
  this .imageElement =image.webPath; ;
 this.seenimage=true
  //this. base64Image = 'data:image/jpeg;base64,' + image.base64String;
    
  console.log( this.imageUrl )
  console.log( this.Image )
  console.log("done....")
  this.jobform.patchValue({"Image":this. imageUrl});
};





addPhotoToGallery() {
 // this.photoService.addNewToGallery();
}


// src="iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
}