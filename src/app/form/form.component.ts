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
    this.delays = af.list('/delays', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  send(delay: string) {
      let uid;
      this.delays.push({date: new Date(), delay: delay, line: 'L1', station: 'Sol' });
      this.msgVal = '';

  }

  ngOnInit(){}

}
