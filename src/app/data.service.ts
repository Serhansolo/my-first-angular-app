import {Injectable} from "@angular/core";

@Injectable()
export class DataService {

  constructor() {
  }

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
}
