import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BusComponent } from './bus/bus.component';
import { DrivingPlanComponent } from './driving-plan/driving-plan.component';

const routes: Routes = [
  {
    path: 'bus',
    component: BusComponent,
  },
  {
    path: 'driving-plan',
    component: DrivingPlanComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
