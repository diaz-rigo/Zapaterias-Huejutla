// import { ServerModule } from '@angular/platform-server';
// import { ServerModule } from '@angular/platform-ServerModule';
import { NgModule } from '@angular/core';
// import { ServerModule } from '@angular/platform-ServerModule';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    // ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
