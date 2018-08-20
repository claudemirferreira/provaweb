import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
