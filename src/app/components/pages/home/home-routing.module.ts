import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./client/client.module').then(n => n.ClientPageModule),
      },
      {
        path: 'content',
        loadChildren: () => import('./content/content.module').then(n => n.ContentPageModule),
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(n => n.DocsPageModule),
      },
      {
        path: 'resources',
        loadChildren: () => import('./resources/resources.module').then(n => n.ResourcesPageModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then(n => n.EventsPageModule),
      },
    ],
  }
 ];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomePageRoutingModule {}
