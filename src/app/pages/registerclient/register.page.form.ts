import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Loc } from  "../../models/Loc" 

export class RegisterClientPageForm{

    private formbuilder :FormBuilder


    
    constructor ( formbuilder :FormBuilder){
        this.formbuilder=formbuilder;
    }
 
    
    createForm():FormGroup{
        return  this.formbuilder.group({


            Email: ['Akomspatrick@yahoo.com',[Validators.required]],
            Password: ['1',[Validators.required]],
            Surname: ['Akoms',[Validators.required]],
            Middlename: ['1',[Validators.required]],
            Firstname:['sss',[Validators.required]],
            PhoneNo: ['1',[Validators.required]],
            PostCode:['1',[Validators.required]],
            HouseNo: ['1',[Validators.required]],
            Address: ['1',[Validators.required]],
            City: ['1',[Validators.required]],
            Country: ['1',[Validators.required]],
            Image:['1',[Validators.required]],
            ImageUrl: ['1',[Validators.required]],
            Location : this.formbuilder.group(new Loc(0,0)),
            //laty :['1',[Validators.required]],
           // "Location.lonx":[7777],
           // "Location.laty":[1234]
        });
    }
}