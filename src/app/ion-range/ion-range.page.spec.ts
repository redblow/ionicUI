import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRangePage } from './ion-range.page';

describe('IonRangePage', () => {
  let component: IonRangePage;
  let fixture: ComponentFixture<IonRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
