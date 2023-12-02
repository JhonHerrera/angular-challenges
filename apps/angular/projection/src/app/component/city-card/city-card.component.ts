import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';
import { City } from '../../model/city.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card
      customClass="bg-yellow-200"
      [list]="cities"
      [cardImg]="image"
      (addNewItem)="addCity()"
      (delete)="deleteCity($event)">
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];
  image = 'assets/img/cartoon-city.webp';

  constructor(private http: FakeHttpService, private store: CityStore) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));
    this.store.cities$.subscribe((s) => (this.cities = s));
  }

  deleteCity(id: number) {
    this.store.deleteOne(id);
  }

  addCity() {
    this.store.addOne(randomCity());
  }
}
