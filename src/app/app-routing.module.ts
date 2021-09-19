import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HistoryComponent } from './history/history.component';
import { HotelComponent } from './hotel/hotel.component';
import { LastestNewsComponent } from './lastest-news/lastest-news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RESERVATIONSComponent } from './reservations/reservations.component';
const routes: Routes = [
{ path : "" ,component:HotelComponent},
{ path :"History",component:HistoryComponent},


{ path : "AboutUs",loadChildren : ()=>
import('./aboutus/aboutus.module')
.then(moduleClass=>moduleClass.AboutusModule)},


{ path : "RESERVATIONS",component:RESERVATIONSComponent},

{ path :"Usa",loadChildren : ()=>
 import('./lastest-news/lastest-news.module')
.then(moduleClass=>moduleClass.LastestNewsModule)},

{ path :"ContactUs",loadChildren : ()=>
import('./contactus/contactus.module')
.then(moduleClass=>moduleClass.ContactusModule)},



{ path : "**",component:PagenotfoundComponent}

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
