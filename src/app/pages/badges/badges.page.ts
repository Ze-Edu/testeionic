import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  valor: number = 150;
  descricao: string = "Caixa de entrada";
  constructor() { 

  }


  ngOnInit() {
  }

}
