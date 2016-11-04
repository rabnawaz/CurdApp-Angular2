import { Routes, RouterModule } from "@angular/router";


import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ReEnterpasswordComponent } from "./re-enterpassword/re-enterpassword.component";
import { AuthService } from './login/auth.service';
import { AddDataComponent } from "./crud/add-data/add-data.component";
import { ListDataComponent } from "./crud/list-data/list-data.component";
import { EditDataComponent } from "./crud/edit-data/edit-data.component";
import { AddComponent } from "./crudAppB/add/add.component";
import { ListComponent } from "./crudAppB/list/list.component";
import { EditComponent } from "./crudAppB/edit/edit.component";

const userRole = localStorage.getItem('usertype');

const APP_ROUTES: Routes = [
{ path:'', component: HomeComponent },
{ path:'login', component: LoginComponent },
{ path:'forgetPassword', component: ForgetPasswordComponent },
{ path:'resetPassword/:token', component: ReEnterpasswordComponent },
{ path:'add', component: AddDataComponent, canActivate: [AuthService], data:{ roles: ["userA"] } },
{ path:'list', component: ListDataComponent, canActivate: [AuthService], data:{roles: 'userA'}  },
{ path:'edit/:id', component: EditDataComponent, canActivate: [AuthService], data:{roles: 'userA'}  },
{ path:'addB', component: AddComponent, canActivate: [AuthService], data:{roles: 'userB'}  },
{ path:'listB', component: ListComponent, canActivate: [AuthService], data:{roles: 'userB'}  },
{ path:'editB/:id', component: EditComponent, canActivate: [AuthService], data:{roles: 'userB'}  },
{path: '', redirectTo: '/login', pathMatch: 'full'}
];


export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
