import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class MystorageService {

  constructor() { }

 public  Savekey = async (key,value)=>{ await Storage.set({ key: key,value: value});}
 public  Findkey = async (key)     => {
   // console.log(key);
 return await Storage.get({ key: key });
  // var x =  await Storage.get(key);   
 //  console.log(x) 
 //  console.log(p)          
  }
 public Deletekey = async(key)=>      { await Storage.remove({ key: key });}
 
//  public async Findkey2(key)
//  {

//      return  await Storage.get({ key: key});
//  }
// public async Deletekey2(key){
// const removeKey = async (key) => {
//   await Storage.remove({ key: key });
// };
// }
// public async savekey2(key,value){

//   const setKey = async (key,value) => {
//     await Storage.set({
//       key: key,
//       value: value,
//     });

//   };
//  }

}
