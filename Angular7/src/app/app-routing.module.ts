import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { AuthGuard } from './auth/auth.guard';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { HomeComponent } from './home/home.component';
import { HomedcComponent } from './homedc/homedc.component';
import { OffreComponent } from './offre/offre.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/homedc',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]
},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
{path:'homedc',component:HomedcComponent},
{path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
{path:'agentpanel',component:AgentPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Recruteur']}},
{path:'candidatures',component:CandidaturesComponent,canActivate:[AuthGuard],data :{permittedRoles:['Recruteur']}},
{path:'offre',component:OffreComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
