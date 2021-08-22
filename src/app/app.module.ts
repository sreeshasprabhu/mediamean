import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UseruploadComponent } from './userupload/userupload.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { SupheadComponent } from './suphead/suphead.component';
import { SuperloginComponent } from './superlogin/superlogin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SuperadminComponent,
    UserdashboardComponent,
    UseruploadComponent,
    SupheadComponent,
    SuperloginComponent,
    AdminuserComponent,
    UserComponent,
    UserformComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
