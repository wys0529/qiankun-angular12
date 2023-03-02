import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './c/home/home.component';
import { AboutComponent } from './c/about/about.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      // @ts-ignore
      useValue: window.__POWERED_BY_QIANKUN__ ? '/subone' : '/',
    },
  ],
})
export class AppRoutingModule {}
