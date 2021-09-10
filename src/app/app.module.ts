import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { GetCharacterComponent } from './components/get-character/get-character.component';
import { ButtonComponent } from './components/button/button.component';
// 3rd Libraries
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
// Firebase
import { } from "@angular/fire";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent,
    GetCharacterComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule,
    MatSliderModule,
    ReactiveFormsModule, // Allows to use Reactive-Forms
    BrowserAnimationsModule, // Toastr library
    ToastrModule.forRoot(), // Message library
    MatButtonModule,
    HttpClientModule, // Allows to make Fetch request
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    

  ],
  exports: [
    MatSelectCountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
