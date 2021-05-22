import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaComponent } from './lista/lista.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MarketService} from "./helpers/market.service";
import {ProductService} from "./helpers/product.service";
import {TechnologyService} from "./helpers/technology.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    HttpClient,
    MarketService,
    ProductService,
    TechnologyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
