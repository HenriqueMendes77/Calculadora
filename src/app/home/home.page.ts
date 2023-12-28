import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  tela: string = '';
  conta: string = '';
  temp: any;
  resultado = 0;

  soma(numeros: any[]) {
    console.log('-------- soma --------');
    numeros.forEach((n: any) => {
      this.resultado += parseInt(n);
    });
  }

  sub(numeros: any) {
    this.resultado = numeros[0];
    numeros.shift();
    numeros.forEach((n: any) => {
      this.resultado -= n;
    });
  }

  mult(numeros: any) {
    this.resultado = numeros[0];
    numeros.shift();
    numeros.forEach((n: any) => {
      this.resultado *= n;
    });
  }

  divi(numeros: any) {
    this.resultado = numeros[0];
    numeros.shift();
    numeros.forEach((n: any) => {
      this.resultado /= n;
    });
  }

  ngOnInit(): void {

  }

  seleciona2(op: any) {

    if (op == 'limpa') {
      this.temp = null;
      this.tela = '';
      this.conta = '';
      this.resultado = 0;
    }

    else if (op == 'calc') {
      const partes: string[] = this.conta.split('+');
      this.soma(partes);
      this.tela = this.resultado.toString();
      this.conta = this.resultado.toString();
      this.resultado = 0;
    }

    else {
      this.tela += op;
      this.conta += op;
      console.log("adicionado: "+op);
    }

  }

  seleciona(op: any) {
    if (op == 'calc' && this.tela) {
      try {
        this.tela = eval(this.tela);
      } catch (error) {
        console.log("Erro: "+error);
      }
    }
    else {
      this.tela += op;
    }
  }

  limpar(){
    this.tela = '';
  }

  apagar(){
    this.tela = this.tela.toString().substring(0, this.tela.toString().length-1);
  }

}
