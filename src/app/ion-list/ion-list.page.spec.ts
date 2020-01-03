import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonListPage } from './ion-list.page';

describe('IonListPage', () => {
  let component: IonListPage;
  let fixture: ComponentFixture<IonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
