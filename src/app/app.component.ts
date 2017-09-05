import {Component} from "@angular/core";
import {DataService} from "./data.service";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateSize', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.05)'
      })),
      transition('small <=> large', animate('300ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  logo = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
  title = 'First Angular App';
  linkClasses = {
    green: true,
    background: true
  };
  planets = [];
  state:String = 'small';

  constructor(private dataService: DataService) {
  }

  loadPlanets() {
    this.planets = this.dataService.planets;
  }

  ensmall(){
    this.state = 'small';
  }
  enlarge(){
    this.state = 'large';
  }


}
