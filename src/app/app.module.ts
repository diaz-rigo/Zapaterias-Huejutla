import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponentsModule } from './core/commons/components/components.module';



const IMPORTS_COMPONENTS = [CoreComponentsModule]; // Agrega los componentes


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...IMPORTS_COMPONENTS,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
