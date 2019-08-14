import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './compontes/register/register.component';
import { LoginComponent } from './compontes/login/login.component';
import { EventsComponent } from './compontes/events/events.component';
import { SpecialEventsComponent } from './compontes/special-events/special-events.component';

// importando el modulo para hacer servicios
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// importando el servicio
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    EventService,
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
