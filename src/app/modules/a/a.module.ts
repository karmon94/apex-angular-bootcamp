import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZModule } from '../z/z.module';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { A3Component } from './components/a3/a3.component';

const routes: Routes = [
  { path: 'a1', component: A1Component },
  { path: 'a2', component: A2Component },
  { path: 'a3', component: A3Component },
  { path: '', redirectTo: 'a1', pathMatch: 'full' },
];

@NgModule({
  declarations: [A1Component, A2Component, A3Component],
  imports: [CommonModule, RouterModule.forChild(routes), ZModule],
})
export class AModule {}
