import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-delays',
  templateUrl: './delays.component.html',
  styleUrls: ['./delays.component.css']
})
export class DelaysComponent implements OnInit {

  delays: FirebaseListObservable<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.delays = af.list('/delays');
  }

  ngOnInit() {
  }

}
