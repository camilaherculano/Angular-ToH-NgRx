import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { selectHeroes } from '../heroes/store/reducers/heroes.reducer';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../heroes/store/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.pipe(select(selectHeroes)).subscribe(heroes => {
      this.heroes = heroes.slice(0, 4);
    });
  }
}
