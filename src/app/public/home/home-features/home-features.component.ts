import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ]
})
export class HomeFeaturesComponent implements OnInit {

  features;

  constructor() { }

  ngOnInit(): void {
    this.features = [
         {
          title: 'Import your data',
         description: '',
         icon: 'assets/img/calendar.png'
        },
        {
         title: 'Compute your indicators',
         description: '',
         icon: 'assets/img/award.png'
        },
        {
         title: 'View your reports',
         description: '',
         icon: 'assets/img/diagram.png'
        }
       ];


  }

}
