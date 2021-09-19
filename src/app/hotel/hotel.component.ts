import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  IconsData = [
   
    {
      img : "../../assets/FourSeasonsHotel/icons1.png",
      title : "NUMERUOUS ACTIVITIES"
    },

    {
      img : "../../assets/FourSeasonsHotel/icons2.png",
      title : "CONTINUOUS SERVICES"
    },

    {
      img : "../../assets/FourSeasonsHotel/icons3.png",
      title : "THE FINEST CUISINES"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
