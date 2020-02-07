import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import {HotelService} from './services/hotel.service';
import { FilterPipe } from './pipes/filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
