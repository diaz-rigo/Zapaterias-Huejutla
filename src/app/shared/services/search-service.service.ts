import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new Subject<string>();

  searchQuery$ = this.searchQuery.asObservable();

  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
