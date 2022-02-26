import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { OffreComponent } from './offre/offre.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import {MatTableModule} from '@angular/material/table';
import { ShowOffreComponent } from './show-offre/show-offre.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { UploadComponent } from './upload/upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import { HomedcComponent } from './homedc/homedc.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AgentPanelComponent,
    ForbiddenComponent,
    OffreComponent,
    AjouterComponent,
    ProfileComponent,
    HeaderComponent,
    ShowOffreComponent,
    CandidaturesComponent,
    UploadComponent,
    DashboardComponent,
    HomedcComponent
  ],
  imports: [
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents:[AjouterComponent,ShowOffreComponent]
})
export class AppModule { }
