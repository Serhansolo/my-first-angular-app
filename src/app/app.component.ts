import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World!</h1>
    <ul *ngIf="planets.length != 0; then yesPlanets else noPlanets">
      <!--<li *ngFor="let planet of planets">{{planet.name}} is a {{planet.size}} and it has {{planet.color}} colors.</li>-->
    </ul>
    <ng-template #yesPlanets>
      List of planets:
      <li *ngFor="let planet of planets">{{planet.name}} is a {{planet.size}} planet and it has {{planet.color}}
        colors.
      </li>
    </ng-template>
    <ng-template #noPlanets>Sorry no planets today...</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  planets = [
    {
      name: 'Earth',
      size: 'small',
      color: 'blue and green'
    },
    {
      name: 'Mars',
      size: 'small',
      color: 'reddish and orange'
    },
    {
      name: 'Neptune',
      size: 'large',
      color: 'deep blue'
    },
    {
      name: 'Jupiter',
      size: 'huge',
      color: 'brownish'
    }
  ];

  planet = {
    name: 'Earth',
    size: 'small',
    color: 'blue and green'
  }
}
