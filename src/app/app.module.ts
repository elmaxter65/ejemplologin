import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { Step1Component } from './shared/components/step1/step1.component';
import { Step2Component } from './shared/components/step2/step2.component';
import { Step3Component } from './shared/components/step3/step3.component';
import { Step4Component } from './shared/components/step4/step4.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    HomeComponent,
    FormularioComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
