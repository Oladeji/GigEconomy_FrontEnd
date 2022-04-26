import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewserviceproviderintentionsPage } from './viewserviceproviderintentions.page';

describe('ViewserviceproviderintentionsPage', () => {
  let component: ViewserviceproviderintentionsPage;
  let fixture: ComponentFixture<ViewserviceproviderintentionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewserviceproviderintentionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewserviceproviderintentionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
