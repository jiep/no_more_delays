import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { DelaysComponent } from './delays/delays.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',
    component: HomeComponent
  },
  {
    path: 'new',
    component: FormComponent
  },
  {
    path: 'delays',
    component: DelaysComponent
  }
];


export const firebaseConfig = {
    apiKey: "AIzaSyCbrBO6xv0x9Wz3c1NC2DNgzxd26rYmtrs",
    authDomain: "no-more-delays.firebaseapp.com",
    databaseURL: "https://no-more-delays.firebaseio.com",
    projectId: "no-more-delays",
    storageBucket: "no-more-delays.appspot.com",
    messagingSenderId: "359132548555"
  };

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    DelaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireOfflineModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
