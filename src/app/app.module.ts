import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HistoryComponent } from './history/history.component';

import { RESERVATIONSComponent } from './reservations/reservations.component';

import { HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule , FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    PagenotfoundComponent,
    HistoryComponent,
    RESERVATIONSComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
