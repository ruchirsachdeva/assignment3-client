import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }


  getData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({authorization: 'Bearer ' + localStorage.getItem('jwt')})

    };


    //return this.http.get('//localhost:8080//cool-cars');
    return this.http.get('//localhost:8080/api/users/me/tests', httpOptions);
  }


  getSessionsOfPatient(username: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({authorization: 'Bearer ' + localStorage.getItem('jwt')})

    };


    //return this.http.get('//localhost:8080//cool-cars');
    return this.http.get('//localhost:8080/api/users/user/'+username+'/tests', httpOptions);
  }

  getUser(username: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({authorization: 'Bearer ' + localStorage.getItem('jwt')})

    };


    //return this.http.get('//localhost:8080//cool-cars');
    return this.http.get('//localhost:8080/api/users/user/'+username, httpOptions);
  }



  getRss(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({authorization: 'Bearer ' + localStorage.getItem('jwt')})

    };


    //return this.http.get('//localhost:8080//cool-cars');
    return this.http.get('//localhost:8080/api/users/rssfeed', httpOptions);
  }


  getMe(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({authorization: 'Bearer ' + localStorage.getItem('jwt')})

    };


    //return this.http.get('//localhost:8080//cool-cars');
    return this.http.get('//localhost:8080/api/users/me', httpOptions);
  }


  getTherapies(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({authorization: 'Bearer ' + localStorage.getItem('jwt')})

    };


    //return this.http.get('//localhost:8080//cool-cars');
    return this.http.get('//localhost:8080/api/users/therapies', httpOptions);
  }
}