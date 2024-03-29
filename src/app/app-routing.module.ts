import { UserProfileComponent } from './user-profile/user-profile.component';
import { DesSupComponent } from './supply-ad/des-sup/des-sup.component';
import { DisplayTransportAdComponent } from './transport-ad/display-transport-ad/display-transport-ad.component';
import { DisplaySupplyAdComponent } from './supply-ad/display-supply-ad/display-supply-ad.component';
import { TransportAdComponent } from './transport-ad/transport-ad.component';
import { DemandAdComponent } from './demand-ad/demand-ad.component';
import { HomeComponent } from './home/home.component';
import { SupplyAdComponent } from './supply-ad/supply-ad.component';
import { AuthGuard } from './auth.guard';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DesDemComponent } from './demand-ad/des-dem/des-dem.component';
import { DesTraComponent } from './transport-ad/des-tra/des-tra.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'DesSup',
    component: DesSupComponent
  },
  {
    path: 'DesDem',
    component: DesDemComponent
  },
  {
    path: 'DesTra',
    component: DesTraComponent
  },
  {
    path: 'displaySupplyAd',
    component: DisplaySupplyAdComponent
  },
  {
    path: 'displayTransportAd',
    component: DisplayTransportAdComponent
  },
  {
    path: 'demandAd',
    component: DemandAdComponent
  },
  {
    path: 'transportAd',
    component: TransportAdComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'supply-ad',
    component: SupplyAdComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'userProfile',
    component:UserProfileComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
