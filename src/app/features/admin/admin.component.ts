import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-public',
    templateUrl: './admin.component.html',
    styleUrls:[ './admin.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AdminComponent {
    constructor(private router: Router) { }

    redirectTo(route: string): void {
        // this.sidebarVisible = false;
        this.router.navigate(['/admin', route]); // Utiliza la navegación de Angular
    }
}
