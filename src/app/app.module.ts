import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RmMaterialsModule } from 'rm-materials';

import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    RmMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
