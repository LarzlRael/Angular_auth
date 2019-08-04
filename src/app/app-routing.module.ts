import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './compontes/events/events.component';
import { SpecialEventsComponent } from './compontes/special-events/special-events.component';
import { LoginComponent } from './compontes/login/login.component';
import { RegisterComponent } from './compontes/register/register.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path:'',redirectTo:'/events',pathMatch:'full'},
  {path : 'events',component : EventsComponent},
  {path:'special',component:SpecialEventsComponent
  ,canActivate:[AuthGuard]
},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
