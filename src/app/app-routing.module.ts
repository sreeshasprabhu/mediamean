import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SuperGuard } from './super.guard';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { SuperloginComponent } from './superlogin/superlogin.component';
import { UserComponent } from './user/user.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserformComponent } from './userform/userform.component';
import { UseruploadComponent } from './userupload/userupload.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"signup",component:SignupComponent},{path:"login",component:LoginComponent},
{path:"superadmin",canActivate:[SuperGuard],component:SuperadminComponent},
{path:"superadminlogin",component:SuperloginComponent},
{path:"user",canActivate:[SuperGuard],component:UserComponent},
{path:"adminuser",canActivate:[SuperGuard],component:AdminuserComponent},
{path:"userform",canActivate:[SuperGuard],component:UserformComponent},
{path:"userdashboard",canActivate:[AuthGuard],component:UserdashboardComponent},
{path:"userupload",canActivate:[AuthGuard],component:UseruploadComponent},
{path:"admin",component:AdminloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
