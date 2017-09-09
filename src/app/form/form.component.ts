import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: Observable<firebase.User>;
  delays: FirebaseListObservable<any[]>;
  msgVal: Object = {};

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  send(delay: Object) {
    this.delays.push(delay);
    this.msgVal = {};
  }

  ngOnInit(){}

}
