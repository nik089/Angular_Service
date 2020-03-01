import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

 constructor() { }
  display() {
    return 'hello how r u !!!! where are u from';
  }
}

// constructor(private http:HttpClient){}
// getData(url)
// {
//   return this.http.get(url);
// }
// postData(url,data)
// {
//   return this.http.post(url,data);

// }
// }
