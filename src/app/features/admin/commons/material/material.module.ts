import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { CarouselModule } from 'primeng/carousel'
import { TimelineModule } from 'primeng/timeline'

import { ChartModule } from 'primeng/chart';
const PRIME_COMPONENTS = [
  CarouselModule,
  TimelineModule,
  ButtonModule,
  CardModule,
  ChartModule
]

@NgModule({
  imports: [...PRIME_COMPONENTS],
  exports: [...PRIME_COMPONENTS],
})
export class MaterialModule {}
