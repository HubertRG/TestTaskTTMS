import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneFormComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
