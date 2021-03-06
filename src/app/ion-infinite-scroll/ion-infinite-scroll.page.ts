import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-infinite-scroll',
  templateUrl: './ion-infinite-scroll.page.html',
  styleUrls: ['./ion-infinite-scroll.page.scss'],
})
export class IonInfiniteScrollPage {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
 
  dataList:any;
 
  constructor(private iab: InAppBrowser) {
    this.dataList = [];
    
    for (let i = 0; i < 25; i++) { 
      this.dataList.push("Item number "+this.dataList.length);
    }
  }
 
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/infinite-scroll');
  return browser;
}
 
  loadData(event) {
    
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 25; i++) { 
        this.dataList.push("Item number "+this.dataList.length);
      }
      event.target.complete();
 
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
 
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
