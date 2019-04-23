import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { selectHeroById } from '../heroes/store/reducers/heroes.reducer';
import { IAppState } from '../heroes/store/app.state';
import { HeroActionsType } from '../heroes/store/actions/heroes.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.store.pipe(select(selectHeroById, {id} )).subscribe(hero => {
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.store.dispatch({ type: HeroActionsType.UpdateHero, payload: this.hero });
    this.goBack();
  }
}
