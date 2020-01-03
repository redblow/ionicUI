import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRadioPage } from './ion-radio.page';

describe('IonRadioPage', () => {
  let component: IonRadioPage;
  let fixture: ComponentFixture<IonRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRadioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
