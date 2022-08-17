import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RootComponent } from './root/root.component';
import { ProductListComponent } from './root/product-list/product-list.component';
import { ProductAlertComponent } from './root/product-alert/product-alert.component';
import { TopBarComponent } from './root/top-bar/top-bar.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RootComponent,
    ProductListComponent,
    ProductAlertComponent,
    TopBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
