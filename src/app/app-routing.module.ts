import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./modules/a/a.module').then((m) => m.AModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./modules/b/b.module').then((m) => m.BModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
