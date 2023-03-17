import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Coracao from 'app/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  public quantidadeVidas: number = 4;
  public coracoes: Coracao[] = [];
  @Input() public tentativas: number;

  constructor() {
    for (let i = 0; i < this.quantidadeVidas; i++) {
      this.coracoes.push(new Coracao(true));
    }
  }
  ngOnChanges(): void {
    console.log('tentativas restantes: ', this.tentativas);
    // this.coracoes.shift();
  }

  ngOnInit() {}
}
