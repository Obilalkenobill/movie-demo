import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorsService } from './services/actors.service';
import { ServerService } from './services/server.service';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FournofoundComponent } from './components/fournofound/fournofound.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    CreateActorComponent,
    FournofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ActorsService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
