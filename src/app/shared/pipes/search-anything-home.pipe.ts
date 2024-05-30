import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'searchAnythingHome'
})
export class SearchAnythingHomePipe implements PipeTransform {

  constructor(private router: Router) { }

  transform(routes: any[], query: string): any[] {
    if (!query) {
      return routes;
    }
    return routes.filter(route => route.path.includes(query));
  }



}
