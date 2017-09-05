import {Component} from "@angular/core";
import {DataService} from "./data.service";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateColor', [
      state('gray', style({
      })),
      state('color', style({
      })),
      // transition('gray <=> color', animate(400))
      transition('gray <=> color', animate(400, keyframes([
        style({opacity: .5, offset: 0}),
        style({opacity: .7, offset: 0.2}),
        style({opacity: .5, offset: 0.5}),
        style({opacity: .7, offset: 0.7}),
        style({opacity: 1, offset: 1.0})
      ]))),
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
  colorLink: String = 'gray';

  constructor(private dataService: DataService) {
  }

  loadPlanets() {
    this.planets = this.dataService.planets;
    this.colorLink = 'gray';
  }
  destroyPlanets (){
    this.planets = [];
    this.colorLink = 'gray';
  }

  hoverLink() {
    this.colorLink = 'color';
  }

  nohoverLink() {
    this.colorLink = 'gray';
  }


}
