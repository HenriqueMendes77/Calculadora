import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  temp: number = 0;
  visor: string = '';
  conta: string = '';
  operadores: string[] = ['+', '-', '*', '/'];

  constructor() { }

  ngOnInit(): void { }

  seleciona(opcao: string) {

    if (opcao === 'calc') {
      if (!this.operadores.includes(this.conta.slice(-1)) && this.contaParenteses()) {
        this.conta = this.conta === '' ? '0' : eval(this.conta).toString();
        this.visor = this.conta;
        this.temp = 0;
      }
    } else {
      if (this.operadores.includes(this.conta.slice(-1)) && this.operadores.includes(opcao)) {
        this.conta = this.conta.slice(0, -1);
      }

      if (opcao === ')') {
        let abre = (this.conta.match(/\(/g) || []).length;
        let fecha = (this.conta.match(/\)/g) || []).length;

        if (abre <= fecha) {
          opcao = '(';
        }

        if (this.conta.slice(-1) === '(') {
          this.conta += '0';
        }
      }

      if (opcao === '(' && /[0-9)]/.test(this.conta.slice(-1))) {
        this.conta += '*';
      }

      if (this.conta === '0' && opcao === '0') return

      if (this.conta === '0' && /[1-9]/.test(opcao)) {
        this.conta = opcao;
      } else {
        this.conta += opcao;
      }

      this.calcular();
    }
  }

  limpar() {
    this.conta = '';
    this.visor = '';
    this.temp = 0;
  }

  contaParenteses() {
    let contador = 0;
    for (const c of this.conta) {
      if (c === '(') contador++;
      else if (c === ')') contador--;
    }
    return contador === 0;
  }

  calcular() {
    if (!this.operadores.includes(this.conta.slice(-1)) && this.contaParenteses()) {
      this.temp = this.conta === '' ? 0 : eval(this.conta);
    }

    this.visor = this.conta.replaceAll('*', '×').replaceAll('/', '÷');
    this.status();
  }

  apagar() {
    if (this.visor.length === 0) return;
    this.conta = this.conta.slice(0, -1);
    this.calcular();
  }

  status() {
    console.clear();
    console.log("visor: " + this.visor);
    console.log("conta: " + this.conta);
    console.log("temp: " + this.temp);
  }
}
