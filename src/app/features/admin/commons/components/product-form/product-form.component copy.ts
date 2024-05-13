// import { Component, Input, OnChanges, OnInit } from '@angular/core'
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// import { Router } from '@angular/router'
// import { ProductService } from '../../service/product.service'
// import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
// import { ProductoView } from '../../../view/producto/producto.view'
// import { IproductResponse } from '../../../interfaces/Product.interface'

// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.scss', './file.scss'],
// })
// export class ProductFormComponent implements OnChanges {
//   @Input() isEditing: boolean = false
//   @Input()
//   product!: IproductResponse
//   productForm: FormGroup
//   fileNames: { src: string; file: File }[] = []
//   // constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
//   //

//   constructor(
//     public config: DynamicDialogConfig,
//     private ProductoView: ProductoView,
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private dialogRef: DynamicDialogRef,
//     private productService: ProductService,
//   ) {
//     // Verificar si config.data.product tiene datos
//     // Inicializa this.productForm antes de llamar a initializeFormWithProductData()
//     this.productForm = this.createProductForm()

//     // Verifica si config.data.product tiene datos
//     if (config.data && config.data.product) {
//       console.log(config.data.product)
//       this.initializeFormWithProductData(config.data.product)
//     } else {
//       console.error('No se han proporcionado datos del producto.')
//       // Maneja el caso en el que no se proporcionen datos del producto.
//     }
//   }
//   ngOnChanges(): void {
//     // this.product = data.product;
//     console.log(this.isEditing, this.product)
//     if (this.isEditing && this.product) {
//       this.initializeFormWithProductData(this.product)
//     }
//   }

//   initializeFormWithProductData(product: IproductResponse): void {
//     // console.log(product
//     this.productForm.patchValue({
//       sku: product.sku,
//       name: product.name,
//       description: product.description,
//       brand: product.brand,
//       color: product.color,
//       size: product.size,
//       material: product.material,
//       gender: product.gender,
//       ageGroup: product.ageGroup,
//       quantity: product.quantity,
//       price: product.price,
//       category: product.category,
//       status: product.status,
//       weight: product.weight,
//       tags: product.tags,
//       images: product.images, // Asegúrate de que este campo sea inicializado correctamente
//     })
//   }

//   createProductForm(): FormGroup {
//     return this.formBuilder.group({
//       sku: ['', Validators.required],
//       name: ['', Validators.required],
//       description: ['', Validators.required],
//       brand: ['', Validators.required],
//       color: ['', Validators.required],
//       size: ['', Validators.required],
//       material: ['', Validators.required],
//       gender: ['', Validators.required],
//       ageGroup: ['', Validators.required],
//       quantity: ['', [Validators.required, Validators.min(0)]],
//       price: ['', [Validators.required, Validators.min(0)]],
//       category: ['', Validators.required],
//       status: ['', Validators.required],
//       weight: ['', [Validators.required, Validators.min(0)]],
//       tags: [''], // No se marca como obligatorio ya que podría no tener tags
//       images: [[], Validators.required], // Asegúrate de que este campo sea inicializado
//     })
//   }

//   agregarProducto() {
//     if (this.productForm.valid) {
//       const productData = this.productForm.value
//       // Primero subimos las imágenes a Cloudinary
//       this.productService
//         .uploadImages(this.fileNames.map((image) => image.file))
//         .subscribe(
//           (imageData: string[] | { images: string[] }) => {
//             productData.images = Array.isArray(imageData)
//               ? imageData
//               : imageData.images

//             // console.log(productData);
//             // Luego creamos el producto con el formulario completo
//             this.productService.createProduct(productData).subscribe(
//               (response) => {
//                 console.log('Producto creado:', response)
//                 this.router.navigate(['/admin/productos'])
//                 this.dialogRef.close()
//                 this.ProductoView.getAllProducts()
//               },
//               (error) => {
//                 console.error('Error al crear el producto:', error)
//                 // Manejo de errores
//               },
//             )
//           },
//           (error) => {
//             console.error('Error al subir imágenes:', error)
//             // Manejo de errores
//           },
//         )
//     } else {
//       this.markAllAsTouched(this.productForm)
//     }
//   }
//   markAllAsTouched(formGroup: FormGroup) {
//     Object.values(formGroup.controls).forEach((control) => {
//       control.markAsTouched()
//       if (control instanceof FormGroup) {
//         this.markAllAsTouched(control)
//       }
//     })
//   }

//   onFileSelected(event: any): void {
//     const files: FileList = event.target.files

//     if (!files || files.length === 0) {
//       console.error('Error: No se han seleccionado archivos')
//       return
//     }

//     for (let i = 0; i < files.length; i++) {
//       const file: File = files[i]

//       if (!this.isValidFileType(file)) {
//         console.error(
//           'Error: Tipo de archivo no válido. Solo se permiten imágenes.',
//         )
//         continue
//       }

//       this.fileNames.push({
//         src: URL.createObjectURL(file),
//         file: file,
//       })
//     }

//     this.productForm
//       .get('images')
//       ?.setValue(this.fileNames.map((image) => image.file.name))
//   }

//   removeImage(index: number): void {
//     this.fileNames.splice(index, 1)
//     this.productForm
//       .get('images')
//       ?.setValue(this.fileNames.map((image) => image.file.name))
//   }

//   isValidFileType(file: File): boolean {
//     const allowedMimeTypes: string[] = ['image/jpeg', 'image/png', 'image/gif']
//     return allowedMimeTypes.includes(file.type)
//   }
// }
