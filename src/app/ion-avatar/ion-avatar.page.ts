import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-avatar',
  templateUrl: './ion-avatar.page.html',
  styleUrls: ['./ion-avatar.page.scss'],
})
export class IonAvatarPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/avatar');
  return browser;
}

}
