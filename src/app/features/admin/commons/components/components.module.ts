import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductFormComponent } from './product-form/product-form.component'
import { MaterialModule } from '../material/material.module'
import { DefaultImgModule } from '../../../../shared/pipes/default-img/default-img.module'
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component'

// const COMPONENTS = [HeaderComponent, FooterComponent]; // Agrega los componentes

@NgModule({
  declarations: [TablaUsuarioComponent,
    ProductFormComponent, // Asegúrate de que ProductFormComponent esté declarado aquí
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    FormsModule, // Importa FormsModule aquí
    DefaultImgModule,
  ],
  providers: [],
})
export class adminComponentsModule {}
