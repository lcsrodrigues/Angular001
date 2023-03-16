import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  public heartEmpty: string = 'bi bi-balloon-heart';
  public heartFill: string = 'bi bi-balloon-heart-fill';
  constructor() {}

  ngOnInit() {}
}
