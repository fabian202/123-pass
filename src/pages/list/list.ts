import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  passwords: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('passwords').then(val => {
      console.log(val);
      if(val) {
        this.passwords = val;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openForm() {
    this.navCtrl.push('form');
  }

  itemSelected(item) {
    this.navCtrl.push('form', { item: item });
  }

}
