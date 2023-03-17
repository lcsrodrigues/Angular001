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
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frases;
  public isTrue: boolean = false;
  public progresso: number = 0;
  public tentativas: number = 4;

  constructor() {
    this.atualizaRodada();
  }
  ngOnInit() {}

  public atualizaResposta(response: Event): void {
    this.resposta = (<HTMLInputElement>response.target).value;
  }

  public verificarResposta(): void {
    if (this.resposta === this.frases[this.rodada].frasePtBr) {
      console.log('Acertou');
      this.rodada++;
      this.atualizaRodada();
      this.resposta = '';
      this.progresso += 100 / this.frases.length;
    } else {
      this.tentativas -= 1;
      console.log('Errou');
    }

    if (this.rodada >= this.frases.length - 1 || this.tentativas < 0) {
      this.isTrue = true;
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
  public reiniciar(): void {
    console.log('reiniciar aplicação');
    this.progresso = 0;
    this.rodada = 0;
    this.frases[this.rodada];
    this.isTrue = false;
  }
}
