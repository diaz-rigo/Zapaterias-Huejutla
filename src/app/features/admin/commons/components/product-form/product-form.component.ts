import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductService } from '../../service/product.service'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ProductoView } from '../../../view/producto/producto.view'
import { IProduct } from '../../../interfaces/Product.interface'
import { Router } from '@angular/router'
interface ImageUrls {
  images: string[] // Define el tipo de la propiedad 'images'
}
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss', './file.scss'],
})
export class ProductFormComponent implements OnInit {
  isEditing: boolean = false
  @Input() product!: IProduct

  productForm!: FormGroup

  fileNames: {
    [key: number]: {
      images: { src: string; file: File }[]
      texture: { src: string; file: File } | null
    }
  } = {}

  idproducEDIT: string = ''

  constructor(
    private router: Router,
    public config: DynamicDialogConfig,
    private productoView: ProductoView,
    private formBuilder: FormBuilder,
    private dialogRef: DynamicDialogRef,
    private productService: ProductService,
    private cdr: ChangeDetectorRef, // Add ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productForm = this.createProductForm()
    if (this.product) {
      this.isEditing = true
      this.initializeFormWithProductData(this.product)
    } else {
      console.warn('No se han proporcionado datos del producto.')
    }
  }

  initializeFormWithProductData(product: IProduct): void {
    this.idproducEDIT = product._id
    this.productForm.patchValue({
      name: product.name,
      description: product.description,
      brand: product.brand,
      material: product.material,
      category: product.category,
    })

    this.variants.clear()
    product.variants.forEach((variant, i) => {
      const variantForm = this.createVariant()
      variantForm.patchValue({
        color: variant.color,
        texture: variant.texture,
      })

      const sizeStockArray = variantForm.get('sizeStock') as FormArray
      variant.sizeStock.forEach((sizeStock) => {
        const sizeStockGroup = this.createSizeStock()
        sizeStockGroup.patchValue(sizeStock)
        sizeStockArray.push(sizeStockGroup)
      })

      this.variants.push(variantForm)
      this.fileNames[i] = { images: [], texture: null } // Initialize fileNames
    })
  }

  createProductForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      brand: ['', Validators.required],
      material: ['', Validators.required],
      category: ['', Validators.required],
      variants: this.formBuilder.array([]),
    })
  }

  get variants(): FormArray {
    return this.productForm.get('variants') as FormArray
  }

  createVariant(): FormGroup {
    return this.formBuilder.group({
      images: [null, Validators.required],
      color: ['', Validators.required],
      texture: ['', Validators.required],
      sizeStock: this.formBuilder.array([this.createSizeStock()]),
    })
  }

  createSizeStock(): FormGroup {
    return this.formBuilder.group({
      size: [0, Validators.required],
      stock: [0, Validators.required],
      price: [0, Validators.required],
    })
  }
  addVariant() {
    const variantIndex = this.variants.length
    this.variants.push(this.createVariant())
    this.fileNames[variantIndex] = { images: [], texture: null } // Initialize fileNames
    this.productForm.markAsDirty()
    this.productForm.updateValueAndValidity()
    this.cdr.detectChanges() // Trigger change detection
  }

  addSizeStock(variantIndex: number) {
    const sizeStockArray = this.variants
      .at(variantIndex)
      .get('sizeStock') as FormArray
    sizeStockArray.push(this.createSizeStock())
    this.productForm.markAsDirty()
    this.productForm.updateValueAndValidity()
    this.cdr.detectChanges() // Trigger change detection
  }
  removeSizeStock(variantIndex: number, sizeStockIndex: number): void {
    const sizeStockArray = this.variants
      .at(variantIndex)
      .get('sizeStock') as FormArray
    sizeStockArray.removeAt(sizeStockIndex)
  }

  EDITARProducto() {
    if (this.productForm.valid) {
      const productData = this.productForm.value
      this.productService
        .updateProduct(this.idproducEDIT, productData)
        .subscribe(
          (response) => {
            console.log('Producto actualizado:', response)
            this.dialogRef.close()
            this.productoView.getAllProducts()
          },
          (error) => {
            console.error('Error al actualizar el producto:', error)
          },
        )
    } else {
      console.error('Formulario no válido.')
    }
  }
  agregarProducto() {
    if (this.productForm.valid) {
      const imageFiles: File[] = []
      const textureFiles: File[] = []

      // Recopilar archivos de imágenes y texturas para cada variante
      this.variants.controls.forEach((variantControl) => {
        const imagesControl = variantControl.get('images')
        const textureControl = variantControl.get('texture')

        if (imagesControl && imagesControl.value) {
          imageFiles.push(...imagesControl.value)
        }

        if (textureControl && textureControl.value) {
          textureFiles.push(textureControl.value)
        }
      })

      if (imageFiles.length > 0) {
        this.productService.uploadImages(imageFiles).subscribe(
          (imageData: string[] | { images: string[] }) => {
            imageData = Array.isArray(imageData) ? imageData : imageData.images
            this.assignUrlsToVariants(imageData, 'images')
            console.log(imageData)

            // Subir texturas si hay archivos de textura
            if (textureFiles.length > 0) {
              this.productService.uploadTexture(textureFiles).subscribe(
                (textureData: string[] | { textures: string[] }) => {
                  textureData = Array.isArray(textureData)
                    ? textureData
                    : textureData.textures
                  this.assignUrlsToVariants(textureData, 'texture')
                  console.log(textureData)

                  // Crear el producto con las URLs asignadas
                  const productData = this.getFilteredProductData()
                  this.createProductWithUrls(productData)
                },
                (error) => {
                  console.error('Error al subir texturas:', error)
                },
              )
            } else {
              // Si no hay archivos de textura, crear producto con las URLs de las imágenes
              const productData = this.getFilteredProductData()
              console.log(productData)
              this.createProductWithUrls(productData)
            }
          },
          (error) => {
            console.error('Error al subir imágenes:', error)
          },
        )
      } else {
        console.error('No se encontraron imágenes para subir.')
      }
    } else {
      console.error('Formulario no válido.')
    }
  }
  private assignUrlsToVariants(urls: string[], field: string) {
    let urlIndex = 0

    this.variants.controls.forEach((variantControl) => {
      const variant = variantControl.value

      if (field === 'images') {
        const numImages = variantControl.get('images')?.value.length
        // Reemplazar los archivos con las URLs de las imágenes subidas
        variant.images = urls.slice(urlIndex, urlIndex + numImages)
        urlIndex += numImages
      } else if (field === 'texture') {
        // Asignar la URL de la textura
        variant.texture = urls[urlIndex] || null
        urlIndex += 1
      }
    })
  }

  private getFilteredProductData() {
    // Filtrar y devolver los datos del producto desde el formulario
    const productData = this.productForm.value
    // Eliminar cualquier propiedad que no sea necesaria
    productData.variants.forEach(
      (variant: { imagesControl: any; textureControl: any }) => {
        delete variant.imagesControl
        delete variant.textureControl
      },
    )
    return productData
  }
  private createProductWithUrls(productData: any) {
    console.log(productData)
    // Enviar los datos del producto al servicio para su creación
    this.productService.createProduct(productData).subscribe(
      (response) => {
        console.log('Producto creado exitosamente:', response)
        this.router.navigate(['/admin/productos'])
        this.dialogRef.close()
        this.productoView.getAllProducts()
      },
      (error) => {
        console.error('Error al crear el producto:', error)
      },
    )
  }

  onFileSelected(event: any, variantIndex: number, field: string): void {
    const files: FileList = event.target.files

    if (!files || files.length === 0) {
      console.error('Error: No se han seleccionado archivos')
      return
    }

    if (field === 'images') {
      this.fileNames[variantIndex].images = []
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i]

        if (!this.isValidFileType(file)) {
          console.error(
            'Error: Tipo de archivo no válido. Solo se permiten imágenes.',
          )
          continue
        }

        this.fileNames[variantIndex].images.push({
          src: URL.createObjectURL(file),
          file: file,
        })
      }
      this.variants
        .at(variantIndex)
        .get('images')
        ?.setValue(
          this.fileNames[variantIndex].images.map((image) => image.file),
        )
    } else if (field === 'texture') {
      const file: File = files[0]
      if (!this.isValidFileType(file)) {
        console.error(
          'Error: Tipo de archivo no válido. Solo se permiten imágenes.',
        )
        return
      }
      this.fileNames[variantIndex].texture = {
        src: URL.createObjectURL(file),
        file: file,
      }
      this.variants.at(variantIndex).get('texture')?.setValue(file)
    }
  }

  removeImage(variantIndex: number, imageIndex: number, field: string): void {
    if (field === 'images') {
      this.fileNames[variantIndex].images.splice(imageIndex, 1)
      this.variants
        .at(variantIndex)
        .get('images')
        ?.setValue(
          this.fileNames[variantIndex].images.map((image) => image.file.name),
        )
    } else if (field === 'texture') {
      this.fileNames[variantIndex].texture = null
      this.variants.at(variantIndex).get('texture')?.setValue('')
    }
  }
  isValidFileType(file: File): boolean {
    const allowedMimeTypes: string[] = ['image/jpeg', 'image/png', 'image/gif']
    return allowedMimeTypes.includes(file.type)
  }

  getSizeStockControls(variantIndex: number): FormArray {
    return this.variants.at(variantIndex).get('sizeStock') as FormArray
  }
  getSizeStockArray(variant: any): FormArray {
    return variant.get('sizeStock') as FormArray
  }
  removeVariant(index: number): void {
    this.variants.removeAt(index)
    this.productForm.markAsDirty()
    this.productForm.updateValueAndValidity()
  }
  // Dentro del método getFilteredProductData()
  // Dentro del método getFilteredProductData()
}
