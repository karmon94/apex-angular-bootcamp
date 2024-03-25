import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleExampleComponent } from './components/routing-exercise/components/simple-example/simple-example.component';
import { HomeComponent } from './components/routing-exercise/components/home/home.component';
import { ChildSlugComponent } from './components/routing-exercise/components/child-slug/child-slug.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'simple-component',
    component: SimpleExampleComponent,
  },
  {
    path: 'slug-route',
    children: [
      {
        path: ':slug',
        component: ChildSlugComponent,
      },
    ],
  },
  {
    path: 'load-module',
    loadChildren: () =>
      import('./components/routing-exercise/module/test.module').then(
        (m) => m.TestModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
