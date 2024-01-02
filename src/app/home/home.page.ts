import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  conta: string = '';
  visor: string = '';
  temp: string = '';
  operadores: string[] = ['+', '-', '*', '/'];

  constructor() { }

  ngOnInit(): void { }

  seleciona(op: any) {
    if (op == 'calc' && this.conta) {
      try {
        this.conta = eval(this.conta).toString();
        this.visor = eval(this.conta).toString();
        this.temp = '';
      } catch (error) {
        console.log("Erro: " + error);
      }
    }
    else {
      this.conta += op;
      op = op === '*' ? '&times' : op;
      op = op === '/' ? '&divide' : op;
      this.visor += op;
      if (this.conta[this.conta.length-1] != '+' && this.conta[this.conta.length-1] != '-' && this.conta[this.conta.length-1] != '*' && this.conta[this.conta.length-1] != '/') {
        this.temp = eval(this.conta).toString();
      }
    }
  }

  limpar() {
    this.visor = '';
    this.conta = '';
    this.temp = '';
  }

  apagar() {
    this.conta = this.conta.toString().substring(0, this.conta.toString().length - 1);
    this.visor = this.visor.replaceAll('&times', '*');
    this.visor = this.visor.replaceAll('&divide', '/');
    this.visor = this.visor.toString().substring(0, this.visor.toString().length - 1);
    this.visor = this.visor.replaceAll('*', '&times');
    this.visor = this.visor.replaceAll('/', '&divide');
    this.temp = eval(this.conta.toString().substring(0, this.conta.toString().length - 1));
    this.temp = this.conta === '' ? '' : this.temp;
  }

}
