import { Component, OnInit } from '@angular/core';
import Frases from 'app/shared/frases.model';
import { FRASES } from './frases-mock';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public frases: Frases[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string;
  public rodada: number = 0;
  public rodadaFrase: Frases;
  public isDisabled: boolean = false;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }
  ngOnInit() {}

  public atualizaResposta(response: Event): void {
    this.resposta = (<HTMLInputElement>response.target).value;
  }

  public verificarResposta(): void {
    if (this.resposta === this.frases[this.rodada].frasePtBr) {
      console.log('Acertou');
    } else {
      console.log('Errou');
    }
    if (this.frases.length <= this.rodada + 1) {
      this.isDisabled = true;
    } else {
      this.rodadaFrase = this.frases[this.rodada];
    }

    this.rodada++;
  }
}
