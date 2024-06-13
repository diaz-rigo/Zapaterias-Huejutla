import { Variant } from './../models/variant.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariantSelectionService {
  private selectedVariantSubject: BehaviorSubject<Variant | null> = new BehaviorSubject<Variant | null>(null);
  selectedVariant$: Observable<Variant | null> = this.selectedVariantSubject.asObservable();

  constructor() { }

  selectVariant(variant: Variant): void {
    this.selectedVariantSubject.next(variant);
  }

  getSelectedVariant(): Observable<Variant | null> {
    return this.selectedVariant$;
  }
}
