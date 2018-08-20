import { Component, OnInit } from '@angular/core';

import {ProdutoService} from '../shared/produto.service'

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  ngOnInit() {
  }

}
