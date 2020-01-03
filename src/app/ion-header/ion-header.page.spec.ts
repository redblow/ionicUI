import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonHeaderPage } from './ion-header.page';

describe('IonHeaderPage', () => {
  let component: IonHeaderPage;
  let fixture: ComponentFixture<IonHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
