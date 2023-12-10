import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Home/home/home.component";
import {SignInComponent} from "./Home/sign-in/sign-in.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home'  , component:HomeComponent} ,
  {path: 'signin' , component:SignInComponent},
  {path :'admin' , loadChildren: ()=>import('./admin/admin.module').then((m) => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
