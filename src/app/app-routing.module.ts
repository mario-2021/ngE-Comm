import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { GuardAdminGuard } from './views/guards/guard-admin.guard';
import { GuardUserGuard } from './views/guards/guard-user.guard';

const routes: Routes = [
  { path: '', component: FrontLayoutComponent, children: [
    { path: '', loadChildren: () =>
    import('./views/front/home/home.module').then(m => m.HomeModule) },
    { path: 'loginUser', loadChildren: () =>
    import('./views/front/login-user/login-user.module').then(m => m.LoginUserModule) },
    { path: 'registerUser', loadChildren: () =>
    import('./views/front/register-user/register-user.module').then(m => m.RegisterUserModule) },
    { path: 'student', loadChildren: () =>
    import('./views/front/student/student.module').then(m =>m.StudentModule) },
    // { path: 'student', loadChildren: () =>
    // import('./views/front/student/student.module').then(m =>m.StudentModule), canActivateChild:[GuardUserGuard] },
    { path: 'studentdetails/:id', loadChildren: () =>
    import('./views/front/studentdetails/studentdetails.module').then(m =>m.StudentdetailsModule) },
    // { path: 'studentdetails/:id', loadChildren: () =>
    // import('./views/front/studentdetails/studentdetails.module').then(m =>m.StudentdetailsModule), canActivateChild:[GuardUserGuard] }
    { path: 'products', loadChildren: () =>
      import('./views/front/products/products.module').then(m => m.ProductsModule)}
  ] },

  { path: 'admin', component: AdminLayoutComponent, canActivate: [GuardAdminGuard], children: [
    { path: 'dashboard', loadChildren: () =>
  import('./views/admin/dashbord/dashbord.module').then(m => m.DashbordModule) },

  { path: 'loginAdmin', loadChildren: () =>
  import('./views/admin/login-admin/login-admin.module').then(m => m.LoginAdminModule) },

  { path: 'students', loadChildren: () =>
  import('./views/admin/students/students.module').then(m => m.StudentsModule) },

  { path: 'studentDetails/:id', loadChildren: () =>
  import('./views/admin/student-details/student-details.module').then(m => m.StudentDetailsModule) },

  { path: 'addStudent', loadChildren: () =>
  import('./views/admin/add-student/add-student.module').then(m => m.AddStudentModule)
  }
  ] },

  { path: 'admin/login', component: AuthAdminLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
