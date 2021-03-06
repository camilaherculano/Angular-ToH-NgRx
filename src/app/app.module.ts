import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/components/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { heroReducer } from './heroes/store/reducers/heroes.reducer';
import { IAppState } from './heroes/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './heroes/store/effects/heroestest.effects';

const metaReducer: ActionReducerMap<IAppState> = { heroes: heroReducer };

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot(metaReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([HeroesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
