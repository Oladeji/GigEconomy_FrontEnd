import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Geolocation } from 'node_modules/@awesome-cordova-plugins/geolocation/ngx';
//import { Geolocation } from '../../../../../GigEcoApp copy/oldnode_modules/@awesome-cordova-plugins/geolocation/ngx';

import { Camera, CameraResultType } from '@capacitor/camera';

import { Loc } from 'src/app/models/Loc';
import { AlertController } from '@ionic/angular';
import { Defaultvalue } from 'src/app/models/defaults';
import { RegisterProviderPageForm } from './registerprovider.page.form';
import { MystorageService } from 'src/app/services/mystorage.service';
import { availableclass } from 'src/app/models/avallableskilltypes';
//import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-registerprovider',
  templateUrl: './registerprovider.page.html',
  styleUrls: ['./registerprovider.page.scss'],
})
export class RegisterproviderPage implements OnInit {

  public providerform: FormGroup;

  //  options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  base64Image: string;
  imageElement: any;
  imageUrl: string;
  skill= new availableclass();
  constructor(private router: Router, private formbuilder: FormBuilder,
    private http: HttpClient, private geolocation: Geolocation,
    private alertController: AlertController, private storageService :MystorageService
  ) {

  }

  ngOnInit() {
    this.providerform = new RegisterProviderPageForm(this.formbuilder).createForm();
  }

  showAlert() {
    this.alertController.create({
      header: 'Alert',
      subHeader: 'Congratulations',
      message: this.providerform.value.Firstname + '  Successfully Registered',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }
  RegisterProvider() {
    const headers = { 'Content-Type': 'application/json' }
    this.providerform.get("Image").patchValue(this.base64Image);
    const body = JSON.stringify(this.providerform.value);
    console.table(body)
    console.table(this.providerform.value);
    var url = Defaultvalue.baseUrl + Defaultvalue.registernewProvider;

    this.http.post(url, body, { headers: headers }).subscribe(
      (response:any)=>{
        console.log(response)
  
        this.showAlert()
  
        console.log(response)
        console.log(response.token.token)
        
        this.storageService.Deletekey("token").then(
          ()=>{    this.storageService.Savekey("token","Bearer "+response.token.token).then(
          ()=>{
    
           // if(response.usertype=="CLIENT")
           // {this.router.navigate(['/clienthome'])}
  
            if(response.usertype=="PROVIDER")
            {this.router.navigate(['/serviceproviderhome'])}
          })
        
        }
        )





      })
  }

  getcurrentlocation() {
    this.geolocation.getCurrentPosition().then(postion => {
      var newloc = new Loc(postion.coords.longitude, postion.coords.latitude);
      this.providerform.get("Location").patchValue(newloc);

    });
  }


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });

    this.base64Image = image.base64String;
    this.providerform.patchValue({ "Image": this.base64Image });
    console.log(this.providerform.value)
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
    this.base64Image = await this.convertTobase64(image);
    //this. base64Image = 'data:image/jpeg;base64,' + image.base64String;

    console.log(this.base64Image)
    console.log("done....")
    this.providerform.patchValue({ "Image": this.base64Image });
  };
  async convertTobase64(capturedPhoto: any) {


    //return await  'data:image/jpeg;base64,' +  this.convertBlobToBase64(capturedPhoto);
    return await '' + this.convertBlobToBase64(capturedPhoto);
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
    // this.photoService.addNewToGallery();
  }
}