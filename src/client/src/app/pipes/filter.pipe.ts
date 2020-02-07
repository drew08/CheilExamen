import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,arg: any): any {
    if(arg == '' || arg.length < 3) return value;
	const resultHotels = [];
	for(const hotel of value){
	  if(hotel.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
		resultHotels.push(hotel);
	  };		
	};
	return resultHotels;
  }

}
