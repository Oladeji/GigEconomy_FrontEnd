import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterClientPageForm } from './register.page.form';
import { Geolocation } from 'oldnode_modules/@awesome-cordova-plugins/geolocation/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PhotoService } from 'src/app/services/photo.service';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {


  private form : FormGroup;

  //  options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  base64Image: string;
  imageElement: any;
  imageUrl: string;

  constructor (private router :Router, private formbuilder :FormBuilder,
     private http:HttpClient,private geolocation: Geolocation,
     public photoService: PhotoService
   ){
    
  }

  ngOnInit() {
  this.form = new RegisterClientPageForm(this.formbuilder).createForm();
  }

  RegisterClient()
  {
    var x=5;
    console.table(this.form.value);
     var url="https://localhost:7156/Client/RegisterUser";
    // url="https://localhost:7156/Client/SampleGetDistanceBtwPoints";
    this.http.post(url,this.form).subscribe(x=>{
      console.log(x)
    })
  }

  getcurrentlocation(){this.geolocation.getCurrentPosition().then(postion=>{
    console.table(postion)
 //   this.form.patchValue({})
    //this.form.get("'Location.lonx'").patchValue(postion.coords.longitude);
    //this.form.get("'Location.laty'").patchValue(postion.coords.latitude);

    this.form.patchValue({"Location.laty":postion.coords.latitude});
    this.form.patchValue({"Location.lonx":postion.coords.longitude});

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
  this. base64Image = 'data:image/jpeg;base64,' + image.base64String;
    
  console.log( this. base64Image)
  console.log("done....")
  this.form.patchValue({"Image":this. base64Image});
  console.log(this.form.value)
};

 
  takePictureinProgress = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
     // resultType: CameraResultType.Uri
      resultType: CameraResultType.Uri
    });
  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
   this.imageUrl = image.webPath;

  // Can be set to the src of an image now
  //this .imageElement.src = image;
  this. base64Image = await this.convertTobase64(image);
  //this. base64Image = 'data:image/jpeg;base64,' + image.base64String;
    
  console.log( this. base64Image)
  console.log("done....")
  this.form.patchValue({"Image":this. base64Image});
};
async convertTobase64(capturedPhoto: any)
{
    

  return await  'data:image/jpeg;base64,' +  this.convertBlobToBase64(capturedPhoto);
}


private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
}