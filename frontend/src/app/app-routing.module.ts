import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneListComponent,
  },
  { path: 'new', component: PhoneFormComponent },
  { path: 'edit/:id', component: PhoneFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
