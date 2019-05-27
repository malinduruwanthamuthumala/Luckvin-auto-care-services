import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Import all the components for which navigation service has to be activated 
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ForgotPassordComponent } from '../forgot-passord/forgot-passord.component';
 import { AuthGuard } from "../shared/guard/auth.guard";
 import { VerifyEmailComponent } from '../verify-email/verify-email.component';
 
 import { SecureInnerPagesGuard } from "../shared/guard/secure-inner-pages.guard.guard";
 import { ProfileComponent } from "../customerdashboard/profile/profile.component";
 import {VehiclesComponent} from '../customerdashboard/vehicles/vehicles.component'
import { GenerateqrComponent } from '../servicestation/generateqr/generateqr.component';
import { BookingComponent } from '../customerdashboard/booking/booking.component';
import { QrscannerComponent } from '../qrscanner/qrscanner.component';
import { AdminComponent } from '../admindashboard/admin/admin.component';
import { PayementupdateComponent } from '../admindashboard/payementupdate/payementupdate.component';
import { LicenseComponent } from '../license/license.component';
import { ConfirmVehicleregistrationComponent } from '../admim/confirm-vehicleregistration/confirm-vehicleregistration.component';
import { ConfirmvehicleregComponent } from '../admindashboard/confirmvehiclereg/confirmvehiclereg.component';
import { OngoingReservationsComponent } from '../customerdashboard/ongoing-reservations/ongoing-reservations.component';
import { VehicleAssistanceComponent } from '../admindashboard/vehicle-assistance/vehicle-assistance.component';
import { AboutpageComponent } from '../aboutpage/aboutpage.component';
import { ContactpageComponent } from '../contactpage/contactpage.component';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'register-user', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPassordComponent },
   { path: 'verify-email-address', component: VerifyEmailComponent },
   { path: 'customer-profile', component: ProfileComponent },
   { path: 'vehicle-register', component: VehiclesComponent },
   { path: 'qr-generator', component: GenerateqrComponent },
   { path: 'booking', component: BookingComponent},
   { path: 'qr-scanner', component: QrscannerComponent},
   { path: 'admin', component: AdminComponent},
   { path: 'payement', component: PayementupdateComponent},
   { path: 'license', component: LicenseComponent},
   { path: 'confirmvehiclereg', component: ConfirmvehicleregComponent},
   { path: 'ongoingreserve', component:OngoingReservationsComponent },
   { path: 'assistvehicles', component:VehicleAssistanceComponent },
   { path: 'about', component:AboutpageComponent},
   { path: 'contact', component:ContactpageComponent},


   
   
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
