import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClienthomePage } from './pages/clienthome/clienthome.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registerorlogin',
    pathMatch: 'full'
  },

  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  { //this has been moved to register or login tabbed pages
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dispayalert',
    loadChildren: () => import('./pages/dispayalert/dispayalert.module').then( m => m.DispayalertPageModule)
  },
  {
    path: 'registerprovider',
    loadChildren: () => import('./pages/registerprovider/registerprovider.module').then( m => m.RegisterproviderPageModule)
   }
   ,

   {
   path: 'clienthome',
   loadChildren: () => import('./pages/clienthome/clienthome.module').then( m => m.ClienthomePageModule)
  },
  {
    path: 'postajob',
    loadChildren: () => import('./pages/postajob/postajob.module').then( m => m.PostajobPageModule)
  },
  {
    path: 'viewmypostedjobs',
    loadChildren: () => import('./pages/viewmypostedjobs/viewmypostedjobs.module').then( m => m.ViewmypostedjobsPageModule)
  },

  {
    path: 'registerorlogin',
    loadChildren: () => import('./pages/registerorlogin/registerorlogin.module').then( m => m.RegisterorloginPageModule)
  },
  {
    //this has been moved to register or login tabbed pages
    path: 'chooseregistrationtype',
    loadChildren: () => import('./pages/chooseregistrationtype/chooseregistrationtype.module').then( m => m.ChooseregistrationtypePageModule)
  },
  {
    path: 'serviceproviderhome',
    loadChildren: () => import('./pages/serviceproviderhome/serviceproviderhome.module').then( m => m.ServiceproviderhomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
