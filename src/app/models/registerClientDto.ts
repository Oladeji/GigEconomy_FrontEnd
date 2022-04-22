import { Loc } from "./Loc";

export interface  ClientRegisterDto//: ILoginDto
    {
         Email: string;
         Password: string;
         Surname: string;
         Middlename: string;
         Firstname: string;
         PhoneNo: string;
         PostCode: string;
         HouseNo: string;
         Address: string;
         City: string;
         Country: string;
         Image:string;
         ImageUrl: string;
         Location:Loc;

}
