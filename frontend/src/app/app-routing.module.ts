import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashComponent } from './pages/dash/dash.component';
import { meetingRoomListAdminComponent } from './pages/meetingroom-list-admin/meetingroom-list-admin.component';
import { authGuard } from './auth/services/auth.guard';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { meetingRoomListComponent } from './pages/meetingroom-list/meetingroom-list.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/signup', component: RegisterComponent },
    { path: 'auth/login', component: LoginComponent},
    { path: 'dash', component: DashComponent,canActivate: [authGuard]},
    { path: 'meetingroom-list', component: meetingRoomListComponent,canActivate: [authGuard]},
    { path: 'Admin-meetingroom-list', component: meetingRoomListAdminComponent,canActivate: [authGuard]},
    { path: 'reservation/:id', component: ReservationComponent },
    { path: 'Account', component: AccountComponent,canActivate: [authGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }