import { Component, OnInit } from '@angular/core';

import {ProdutoService} from './shared/produto.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoService]
})
export class ProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {  
    alert("entrou no init");  
  }

  resetForm(){
    alert("entrou no reset");
    this.produtoService.selectProduto = {
      Id: null,
      Nome: '', 
    }
  }

  

}
