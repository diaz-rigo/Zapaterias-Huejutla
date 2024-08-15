// import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
// import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
// import { ProductService } from '../../service/product.service'
// import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
// import { ProductoView } from '../../../view/producto/producto.view'
// import { IProduct } from '../../../interfaces/Product.interface'
// import { Router } from '@angular/router'
// import { NgxUiLoaderService } from 'ngx-ui-loader'
// import { ConfirmationService, MessageService } from 'primeng/api'
// interface ImageUrls {
//   images: string[] // Define el tipo de la propiedad 'images'
// }
// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.scss', './file.scss'],
//   providers: [DialogService, ConfirmationService, MessageService],

// })
// export class ProductFormComponent implements OnInit {
//   isEditing: boolean = false
//   @Input() product!: IProduct

//   productForm!: FormGroup

//   fileNames: {
//     [key: number]: {
//       images: { src: string; file: File | null }[];
//       texture: { src: string; file: File | null } | null;
//     }
//   } = {};

//   idproducEDIT: string = ''

//   constructor(
//     private router: Router,
//     public config: DynamicDialogConfig,
//     private productoView: ProductoView,
//     private formBuilder: FormBuilder,
//     private dialogRef: DynamicDialogRef,
//     private productService: ProductService,
//     private cdr: ChangeDetectorRef, // Add ChangeDetectorRef
//      private ngxService: NgxUiLoaderService,    private messageService: MessageService,  

//   ) {
//     this.product = this.config.data.product; // Obtener el producto de los datos del diálogo

//   }

//   ngOnInit(): void {
//     this.productForm = this.createProductForm()
//     if (this.product) {
//       this.isEditing = true
//       this.initializeFormWithProductData(this.product)
//     } else {
//       console.warn('No se han proporcionado datos del producto.')
//     }
//   }
//   initializeFormWithProductData(product: IProduct): void {
//     this.idproducEDIT = product._id;
//     this.productForm.patchValue({
//       name: product.name,
//       description: product.description,
//       brand: product.brand,
//       material: product.material,
//       category: product.category,
//     });
  
//     this.variants.clear(); // Limpia cualquier variante previamente añadida
  
//     product.variants.forEach((variant, i) => {
//       const variantForm = this.createVariant();
  
//       // Remover la línea que agrega un sizeStock por defecto
//       variantForm.patchValue({
//         color: variant.color,
//         texture: variant.texture,
//         // No añadir un sizeStock por defecto
//       });
  
//       const sizeStockArray = variantForm.get('sizeStock') as FormArray;
//       sizeStockArray.clear(); // Limpia el array para asegurar que no se dupliquen los datos
  
//       // Rellenar el array con los datos del producto
//       variant.sizeStock.forEach((sizeStock) => {
//         const sizeStockGroup = this.createSizeStock();
//         sizeStockGroup.patchValue(sizeStock);
//         sizeStockArray.push(sizeStockGroup);
//       });
  
//       this.variants.push(variantForm);
  
//       // Inicializar imágenes y texturas
//       this.fileNames[i] = {
//         images: variant.images.map((image) => ({ src: image, file: null })), 
//         texture: variant.texture ? { src: variant.texture, file: null } : null, 
//       };
  
//       variantForm.get('images')?.setValue(this.fileNames[i].images.map(img => img.src));
//       variantForm.get('texture')?.setValue(this.fileNames[i].texture?.src || '');
//     });
//   }
  

//   createProductForm(): FormGroup {
//     return this.formBuilder.group({
//       name: ['', Validators.required],
//       description: [''],
//       brand: ['', Validators.required],
//       material: ['', Validators.required],
//       category: ['', Validators.required],
//       variants: this.formBuilder.array([]),
//     })
//   }


//   EDITARProducto() {
//     if (this.productForm.valid) {
//         const productData: IProduct = this.productForm.value;
//         this.ngxService.start();

//         const imageFiles: File[] = this.variants.controls.flatMap((variantControl, i) =>
//             this.fileNames[i].images.map(img => img.file).filter((file): file is File => file !== null)
//         );

//         const textureFiles: File[] = this.variants.controls
//             .map((variantControl, i) => this.fileNames[i].texture?.file)
//             .filter((file): file is File => file !== null);

//         if (imageFiles.length > 0 || textureFiles.length > 0) {
//             const uploadTasks: Promise<any>[] = [];

//             if (imageFiles.length > 0) {
//                 uploadTasks.push(
//                     this.productService.uploadImages(imageFiles).toPromise()
//                 );
//             }
//             // Subir texturas si hay archivos de textura
//             if (textureFiles.length > 0) {
//               this.productService.uploadTexture(textureFiles).subscribe(
//                 (textureData: string[] | { textures: string[] }) => {
//                   textureData = Array.isArray(textureData)
//                     ? textureData
//                     : textureData.textures
//                   this.assignUrlsToVariants(textureData, 'texture')
//                   console.log(textureData)

//                   // Crear el producto con las URLs asignadas
//                   const productData = this.getFilteredProductData()
//                   this.updateProduct(productData);
//                   this.ngxService.stop()
//                 },
//                 (error) => {
//                   console.error('Error al subir texturas:', error)
//                 },
//               )
//             } else {
//               // Si no hay archivos de textura, crear producto con las URLs de las imágenes
//               const productData = this.getFilteredProductData()
//               console.log(productData)
//               this.ngxService.stop()

//               this.updateProduct(productData);
//             }

//             Promise.all(uploadTasks).then((results) => {
//               const imageData = Array.isArray(results[0]) ? results[0] : [];
//               const textureData = results.length > 1 && Array.isArray(results[1]) ? results[1] : [];
          
//               productData.variants.forEach((variant, i) => {
//                   if (imageData.length > 0) {
//                       const imageUrls = imageData.splice(0, this.fileNames[i].images.length);
//                       variant.images = [...(variant.images || []), ...imageUrls];
//                   }
          
//                   if (textureData.length > 0) {
//                       variant.texture = textureData.shift();
//                   }
//               });
          
//               this.updateProduct(productData);
//           }).catch((error) => {
//               this.ngxService.stop();
//               console.error('Error al subir imágenes/texturas', error);
//               this.messageService.add({
//                   severity: 'error',
//                   summary: 'Error de Subida',
//                   detail: 'Error al subir imágenes o texturas. Por favor intente de nuevo.'
//               });
//           });
          
//         } else {
//             this.updateProduct(productData);
//         }
//     } else {
//         console.error('Formulario no válido.');
//         this.messageService.add({
//             severity: 'error',
//             summary: 'Formulario Inválido',
//             detail: 'Por favor complete todos los campos requeridos.'
//         });
//     }
// }



 
// updateProduct(productData: any) {
//   console.log("-----<<<<<>>>",productData)
//   this.productService.updateProduct(this.idproducEDIT, productData).subscribe(
//     (response) => {
//       this.ngxService.stop();
//       this.dialogRef.close();
//       this.productoView.loadProducts()
//       this.messageService.add({
//         severity: 'info',
//         summary: 'Confirmado',
//         detail: 'Producto actualizado exitosamente',
//       });
//     },
//     (error) => {
//       this.ngxService.stop();
//       console.log(error)
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Rechazado',
//         detail: 'Error al actualizar el producto'+error,
//       });
//     }
//   );
// }
//   agregarProducto() {
//     if (this.productForm.valid) {
//       const imageFiles: File[] = []
//       const textureFiles: File[] = []
//       this.ngxService.start()
//       // Recopilar archivos de imágenes y texturas para cada variante
//       this.variants.controls.forEach((variantControl) => {
//         const imagesControl = variantControl.get('images')
//         const textureControl = variantControl.get('texture')

//         if (imagesControl && imagesControl.value) {
//           imageFiles.push(...imagesControl.value)
//         }

//         if (textureControl && textureControl.value) {
//           textureFiles.push(textureControl.value)
//         }
//       })

//       if (imageFiles.length > 0) {
//         this.productService.uploadImages(imageFiles).subscribe(
//           (imageData: string[] | { images: string[] }) => {
//             imageData = Array.isArray(imageData) ? imageData : imageData.images
//             this.assignUrlsToVariants(imageData, 'images')
//             console.log(imageData)

//             // Subir texturas si hay archivos de textura
//             if (textureFiles.length > 0) {
//               this.productService.uploadTexture(textureFiles).subscribe(
//                 (textureData: string[] | { textures: string[] }) => {
//                   textureData = Array.isArray(textureData)
//                     ? textureData
//                     : textureData.textures
//                   this.assignUrlsToVariants(textureData, 'texture')
//                   console.log(textureData)

//                   // Crear el producto con las URLs asignadas
//                   const productData = this.getFilteredProductData()
//                   this.createProductWithUrls(productData)
//                   this.ngxService.stop()
//                 },
//                 (error) => {
//                   console.error('Error al subir texturas:', error)
//                 },
//               )
//             } else {
//               // Si no hay archivos de textura, crear producto con las URLs de las imágenes
//               const productData = this.getFilteredProductData()
//               console.log(productData)
//               this.ngxService.stop()

//               this.createProductWithUrls(productData)
//             }
//           },
//           (error) => {
//             console.error('Error al subir imágenes:', error)
//           },
//         )
//       } else {
//         console.error('No se encontraron imágenes para subir.')
//       }
//     } else {
//       this.ngxService.stop()
//       console.error('Formulario no válido.')
//     }
//   }
//   private assignUrlsToVariants(urls: string[], field: string) {
//     let urlIndex = 0

//     this.variants.controls.forEach((variantControl) => {
//       const variant = variantControl.value

//       if (field === 'images') {
//         const numImages = variantControl.get('images')?.value.length
//         // Reemplazar los archivos con las URLs de las imágenes subidas
//         variant.images = urls.slice(urlIndex, urlIndex + numImages)
//         urlIndex += numImages
//       } else if (field === 'texture') {
//         // Asignar la URL de la textura
//         variant.texture = urls[urlIndex] || null
//         urlIndex += 1
//       }
//     })
//   }

//   private getFilteredProductData() {
//     // Filtrar y devolver los datos del producto desde el formulario
//     const productData = this.productForm.value
//     // Eliminar cualquier propiedad que no sea necesaria
//     productData.variants.forEach(
//       (variant: { imagesControl: any; textureControl: any }) => {
//         delete variant.imagesControl
//         delete variant.textureControl
//       },
//     )
//     return productData
//   }
//   private createProductWithUrls(productData: any) {
//     console.log(productData)
//     // Enviar los datos del producto al servicio para su creación
//     this.productService.createProduct(productData).subscribe(
//       (response) => {
//         console.log('Producto creado exitosamente:', response)
//         this.router.navigate(['/admin/productos'])
//         this.dialogRef.close()
//         this.productoView.loadProducts()
//       },
//       (error) => {
//         console.error('Error al crear el producto:', error)
//       },
      
//     )
//     this.ngxService.stop()

//   }

//   onFileSelected(event: any, variantIndex: number, field: string): void {
//     const files: FileList = event.target.files

//     if (!files || files.length === 0) {
//       console.error('Error: No se han seleccionado archivos')
//       return
//     }

//     if (field === 'images') {
//       this.fileNames[variantIndex].images = []
//       for (let i = 0; i < files.length; i++) {
//         const file: File = files[i]

//         if (!this.isValidFileType(file)) {
//           console.error(
//             'Error: Tipo de archivo no válido. Solo se permiten imágenes.',
//           )
//           continue
//         }

//         this.fileNames[variantIndex].images.push({
//           src: URL.createObjectURL(file),
//           file: file,
//         })
//       }
//       this.variants
//         .at(variantIndex)
//         .get('images')
//         ?.setValue(
//           this.fileNames[variantIndex].images.map((image) => image.file),
//         )
//     } else if (field === 'texture') {
//       const file: File = files[0]
//       if (!this.isValidFileType(file)) {
//         console.error(
//           'Error: Tipo de archivo no válido. Solo se permiten imágenes.',
//         )
//         return
//       }
//       this.fileNames[variantIndex].texture = {
//         src: URL.createObjectURL(file),
//         file: file,
//       }
//       this.variants.at(variantIndex).get('texture')?.setValue(file)
//     }
//   }

//   removeImage(variantIndex: number, imageIndex: number, field: string): void {
//     if (field === 'images') {
//       this.fileNames[variantIndex].images.splice(imageIndex, 1)
//       this.variants
//         .at(variantIndex)
//         .get('images')
//         ?.setValue(
//           // this.fileNames[variantIndex].images.map((image) => image.file.name),
//           this.fileNames[variantIndex].images.map((image) => image.file?.name),


//         )
//     } else if (field === 'texture') {
//       this.fileNames[variantIndex].texture = null
//       this.variants.at(variantIndex).get('texture')?.setValue('')
//     }
//   }



//   isValidFileType(file: File): boolean {
//     const allowedMimeTypes: string[] = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
//     return allowedMimeTypes.includes(file.type);
//   }
  
// // ???????  /////////////////////////////////////////////////////////////////

//   getSizeStockControls(variantIndex: number): FormArray {
//     return this.variants.at(variantIndex).get('sizeStock') as FormArray
//   }

//   getSizeStockArray(variant: AbstractControl): FormArray {
//     return variant.get('sizeStock') as FormArray;
//   }
  
//   removeVariant(index: number): void {
//     this.variants.removeAt(index)
//     this.productForm.markAsDirty()
//     this.productForm.updateValueAndValidity()
//   }
//   get variants(): FormArray {
//     return this.productForm.get('variants') as FormArray
//   }

//   createVariant(): FormGroup {
//     return this.formBuilder.group({
//       images: [null, Validators.required],
//       color: ['', Validators.required],
//       texture: ['', Validators.required],
//       sizeStock: this.formBuilder.array([this.createSizeStock()]),
//     })
//   }

//   createSizeStock(): FormGroup {
//     return this.formBuilder.group({
//       size: [0, Validators.required],
//       stock: [0, Validators.required],
//       price: [0, Validators.required],
//     })
//   }
//   addVariant() {
//     const variantIndex = this.variants.length
//     this.variants.push(this.createVariant())
//     this.fileNames[variantIndex] = { images: [], texture: null } // Initialize fileNames
//     this.productForm.markAsDirty()
//     this.productForm.updateValueAndValidity()
//     this.cdr.detectChanges() // Trigger change detection
//   }

//   addSizeStock(variantIndex: number) {
//     const sizeStockArray = this.variants
//       .at(variantIndex)
//       .get('sizeStock') as FormArray
//     sizeStockArray.push(this.createSizeStock())
//     this.productForm.markAsDirty()
//     this.productForm.updateValueAndValidity()
//     this.cdr.detectChanges() // Trigger change detection
//   }
//   removeSizeStock(variantIndex: number, sizeStockIndex: number): void {
//     const sizeStockArray = this.variants
//       .at(variantIndex)
//       .get('sizeStock') as FormArray
//     sizeStockArray.removeAt(sizeStockIndex)
//   }
// }
