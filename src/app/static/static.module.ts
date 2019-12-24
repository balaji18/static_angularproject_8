import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StaticCompComponent } from './static-comp/static-comp.component';


const routes: Routes = [
  // { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: '', component: StaticCompComponent },
];

@NgModule({
  declarations: [StaticCompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StaticModule { }
