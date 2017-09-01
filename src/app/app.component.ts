import {Component} from "@angular/core";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
  title = 'First Angular App';
  linkClasses = {
    green: true,
    background: true
  };
  planets = [];

  constructor(private dataService: DataService) {
  }

  loadPlanets() {
    this.planets = this.dataService.planets;
  }


}
