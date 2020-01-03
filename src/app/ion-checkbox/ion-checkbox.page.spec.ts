import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCheckboxPage } from './ion-checkbox.page';

describe('IonCheckboxPage', () => {
  let component: IonCheckboxPage;
  let fixture: ComponentFixture<IonCheckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCheckboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
