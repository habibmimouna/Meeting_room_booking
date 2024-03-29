import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashComponent } from './pages/dash/dash.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ReservationAdminComponent } from './pages/reservation-admin/reservation-admin.component';
import { authGuard } from './auth/services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/signup', component: RegisterComponent },
    { path: 'auth/login', component: LoginComponent},
    { path: 'dash', component: DashComponent,canActivate: [authGuard]},
    { path: 'Reservations', component: ReservationsComponent,canActivate: [authGuard]},
    { path: 'AdminReservations', component: ReservationAdminComponent,canActivate: [authGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }