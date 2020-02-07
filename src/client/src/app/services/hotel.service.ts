import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
//import "rxjs/Rx";
import { Hotel } from '../Hotel' ;

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  domain: string = "http://localhost:5000";
  constructor(private http: HttpClient) { }
    
  getHotel(){
	return this.http.get<Hotel[]>(`${this.domain}/api/hotels`);
  }
  
  addHotel(newHotel: Hotel) {
	debugger;
    return this.http.post<Hotel>(`${this.domain}/api/hotels`, newHotel);
  }
  deleteHotel(id) {
    return this.http.delete<Hotel>(`${this.domain}/api/hotels/${id}`);
  }
  
  searchHotel(title) {
    return this.http.get<Hotel>(`${this.domain}/api/hotels/${title}`);
  }
  

  updateHotel(newHotel) {
    return this.http.put<Hotel>(`${this.domain}/api/hotels/${newHotel._id}`, newHotel);
  } 
  
  
}
