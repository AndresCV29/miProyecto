import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/home/home.module').then(n => n.HomePageModule),
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules, enableTracing: false, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
