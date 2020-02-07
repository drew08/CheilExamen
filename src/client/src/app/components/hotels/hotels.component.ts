
import { HotelService } from '../../services/hotel.service'
import { Hotel } from '../../Hotel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [HotelService]
})





export class HotelsComponent implements OnInit {

  hotels: Hotel[];
  public searchString: string;
  title: string;
  precio: string;
  descuento: string;
  description: string;
  ciudad: string;
  tipo: string;
  calificacion: string;  
  
  
  filterPost = '';
  
  
  
  

  constructor(private hotelService: HotelService) { 
	this.hotelService.getHotel().subscribe(hotels => { 
	console.log(hotels);
	this.hotels = hotels
	})
  }

  ngOnInit() {
  
  
  }
  
  addHotel(event){
	event.preventDefault();  
	console.log(this.title);
	console.log(this.ciudad);
	debugger;
	const newHotel: Hotel = {
      title: this.title,
	  precio: this.precio,
	  descuento: this.descuento,
	  description: this.description,
	  ciudad: this.ciudad,
	  tipo: this.tipo,
	  calificacion: this.calificacion,
      isDone: false,
	  _id: Math.random().toString(36).substring(7)
    };
    this.hotelService.addHotel(newHotel).subscribe(hotel => {
        this.hotels.push(hotel);
		console.log(this.hotels);
        this.title = '';
    }) 
  }	

  deleteHotel(id) {
    const response = confirm('esta seguro de eliminar este elemento?');
    if (response ){
      const hotels = this.hotels;
      this.hotelService.deleteHotel(id).subscribe(data => {
          console.log(data.n);
          if(data.n == 1) {
            for(let i = 0; i < hotels.length; i++) {
              if(hotels[i]._id == id) {
                hotels.splice(i, 1);   
              }
            }
          }
        })
    }
  } 
  
  searchHotel(event) { 
      const title = this.title;
      this.hotelService.searchHotel(title).subscribe(data => {
          console.log(data);  
          /*       
            for(let i = 0; i < hotels.length; i++) {
              if(hotels[i].title == title) {
                this.hotels.splice(i, 1);   
              }         
          }  */  
          
        }) 
  }                 

  updateStatus(hotel: Hotel) {
    var newHotel = {            
      _id: hotel._id,
      title: hotel.title,
      isDone: !hotel.isDone
    };
    this.hotelService.updateHotel(newHotel)
      .subscribe(res => {
        hotel.isDone = !hotel.isDone;
      })
  }
  

  

}
