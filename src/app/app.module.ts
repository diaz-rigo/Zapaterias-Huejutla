// import { AdminComponent } from './features/admin/admin/admin.component';
// import { AdminComponent } from './features/admin/admin/admin.Component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponentsModule } from './core/commons/components/components.module';
import { DetailImageComponent } from './features/public/commons/components/detail-image/detail-image.component';
// import { CategoriaComponent } from './features/public/view/categoria/categoria.view';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { DetailInfoComponent } from './features/public/commons/components/detail-info/detail-info.component';
import { AdminComponent } from './features/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
// FormsModule

const IMPORTS_COMPONENTS = [CoreComponentsModule]; // Agrega los componentes
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      AppComponent,

  ],
  imports: [
    ...IMPORTS_COMPONENTS,
    BrowserModule, FormsModule,
    AppRoutingModule, CarouselModule,HttpClientModule,    NgxUiLoaderModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
