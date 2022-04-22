import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Loc } from  "../../models/Loc" 

export class PostAJobPageForm{

    private formbuilder :FormBuilder


    
    constructor ( formbuilder :FormBuilder){
        this.formbuilder=formbuilder;
    }
 
    
    createForm():FormGroup{
        return  this.formbuilder.group({

            JobDescription: ['',[Validators.required]],
            SkillTypeId: [0,[Validators.required]],
            JobinitialBudget: [0,[Validators.required]],
            ImageUrl: ['1',[Validators.required]],
            Image: ['1',[Validators.required]],
            Location : this.formbuilder.group(new Loc(0,0)),

        });
    }
}

