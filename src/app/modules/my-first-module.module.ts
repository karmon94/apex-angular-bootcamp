import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from 'src/app/components/my-first-component/my-first-component.component';

const routes: Routes = [{ path: '', component: MyFirstComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFirstModule {}
