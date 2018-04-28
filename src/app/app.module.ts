import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RmMaterialsModule } from 'rm-materials';

import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { PortraitVomFotoComponent } from './portrait-vom-foto/portrait-vom-foto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MatButtonModule, MatIconModule, MatListModule, MatIconRegistry, MatProgressSpinnerModule, MatRadioModule, MatStepperModule } from '@angular/material';

import { MatImageLoaderComponent } from './image-loader/image-loader.component';
import { MatImageLoaderService } from './image-loader/image-loader.service';

const appRoutes: Routes = [
  { path: 'portrait-vom-foto', component: PortraitVomFotoComponent },
  { path: 'order', component: OrderComponent },
  { 
    path: '',
    redirectTo: 'portrait-vom-foto',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PortraitVomFotoComponent,
    PageNotFoundComponent,
    StyleComponent,
    MatImageLoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatStepperModule,
    RmMaterialsModule,
    RouterModule.forRoot(
      appRoutes/*,
      { enableTracing: true } // <-- debugging purposes only*/
    )
  ],
  providers: [ MatImageLoaderService, OrderService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    //matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
