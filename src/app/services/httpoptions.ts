import { HttpHeaders, HttpParams } from '@angular/common/http';

 export  const Json_Up_Down: {
    headers?: HttpHeaders;
    observe: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
   // responseType: "blob";
    withCredentials?: boolean;
  } = {
    observe: 'body',
   // responseType: "blob",
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append('Access-Control-Allow-Origin', '*')
  .append('Accept', 'application/json')
  };

  export  const ApplicationWwwUp_JsonDown: {
    headers?: HttpHeaders;
    observe: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
   // responseType: "blob";
    withCredentials?: boolean;
  } = {
    observe: 'body',
   // responseType: "blob",
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }).append('Access-Control-Allow-Origin', '*')
  .append('Accept', 'application/json')
  };


  export const Json_Up_blobpdf_Down: {
  headers?: HttpHeaders;
  observe: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
 responseType: 'blob';
  withCredentials?: boolean;
} = {
  observe: 'body',
 responseType: 'blob',
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append('Access-Control-Allow-Origin', '*')
  .append('Accept', 'application/pdf')


};


 export const SimpleGetwtParam :
{
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: "body";
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  //responseType: "arraybuffer";
  withCredentials?: boolean;
} = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*'

  })
};

//


export const Json_Up_pdf_Down:  {
  headers?: HttpHeaders;
  observe: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
 // responseType: "blob";
  withCredentials?: boolean;
} = {
  observe: 'body',
 // responseType: "blob",
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append('Access-Control-Allow-Origin', '*')
.append('Accept', 'application/pdf')

};


 export const Json_Up_blobpdf_Downver2_response: {
  headers?: HttpHeaders;
  observe: 'response';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType: 'blob';
  withCredentials?: boolean;
} = {
  observe: 'response',
 responseType: 'blob',
  headers: new HttpHeaders({ }).append('Access-Control-Allow-Origin', '*')
  .append('Accept', 'application/pdf')


};









export const JustAllowOrigin = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*'

  })
};
export const FileUp_Json_Down: {
  headers?: HttpHeaders;
  // observe: "body";
  params?: HttpParams;
  reportProgress?: boolean;
 // responseType: "blob";
  withCredentials?: boolean;
} = {
  // observe: "body",
 // responseType: "blob",
//   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }).append('Access-Control-Allow-Origin', '*')
// .append("Accept", "application/json")
headers: new HttpHeaders({ }).append('Access-Control-Allow-Origin', '*')
.append('Accept', 'application/json')
};
