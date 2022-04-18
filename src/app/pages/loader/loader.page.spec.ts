import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from 'oldnode_modules/@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>; 
  let router :Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(),AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router =TestBed.get(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page after loading', () => {
   // expect(component).toBeTruthy();
   spyOn(router,'navigate')
   component.ngOnInit()
   expect(router.navigate).toHaveBeenCalledWith(['login']) ;// .to.toBeFalsy();
  });
});
