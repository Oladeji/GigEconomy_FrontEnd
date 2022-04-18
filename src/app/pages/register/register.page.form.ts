import { FormBuilder, FormGroup, Validators } from "@angular/forms";
 

export class RegisterClientPageForm{

    private formbuilder :FormBuilder
    constructor ( formbuilder :FormBuilder){
        this.formbuilder=formbuilder;
    }
    createForm():FormGroup{
        return  this.formbuilder.group({


            Email: ['',[Validators.required]],
            Password: ['',[Validators.required]],
            Surname: ['Akoms',[Validators.required]],
            Middlename: ['',[Validators.required]],
            Firstname:['sss',[Validators.required]],
            PhoneNo: ['',[Validators.required]],
            PostCode:['',[Validators.required]],
            HouseNo: ['',[Validators.required]],
            Address: ['',[Validators.required]],
            City: ['',[Validators.required]],
            Country: ['',[Validators.required]],
            Image:['',[Validators.required]],
            ImageUrl: ['',[Validators.required]],
            lonx :['',[Validators.required]],
            laty :['',[Validators.required]],
            "Location.lonx":[7777],
            "Location.laty":[1234]
        });
    }
}