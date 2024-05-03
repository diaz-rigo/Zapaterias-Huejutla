import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.view.html',
  styleUrl: './adm-home.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdmHomeView {



  // basicData: any;

  // basicOptions: any;

  constructor(private router: Router){}

  
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // this.basicData = {
    //   labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    //   datasets: [
    //     {
    //       label: 'Sales',
    //       data: [540, 325, 702, 620],
    //       backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
    //       borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
    //       borderWidth: 1
    //     }
    //   ]
    // };

  //   this.basicOptions = {
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: textColor
  //         }
  //       }
  //     },
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         ticks: {
  //           color: textColorSecondary
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //           drawBorder: false
  //         }
  //       },
  //       x: {
  //         ticks: {
  //           color: textColorSecondary
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //           drawBorder: false
  //         }
  //       }
  //     }
  //   };
   }


  redirectToAdmin(route: string): void {

    // this.sidebarVisible2 = !this.sidebarVisible2
    console.log(route)
    if (route === 'login') {
      this.router.navigate(['/auth/login']) // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/admin', route]) // Navegación hacia otras páginas públicas
    }
  }


}
