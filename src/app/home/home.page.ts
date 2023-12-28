import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  tela: string = '';
  b: string = '';
  temp: any;
  numeros: any = [];
  resultado = 0;

  soma(numeros: any) {
    numeros.forEach((n: any) => {
      this.resultado += n;
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

  selOperacao(op: any) {
    
    if (op == 'limpa') {
      this.tela = '';
      this.numeros = [];
      this.temp = null;
      this.b = '';
    }
    else {
      this.b = op;
      this.tela += op;
    }

    console.log(op);
  }

  selNumero(num: any) {
    this.tela += num;
    this.numeros.push(num);

    if(this.b == '+'){
      this.soma(this.numeros);
      this.numeros.shift();
      this.numeros.shift();
      this.temp = this.resultado;
      this.numeros.unshift(this.temp);
      this.resultado = 0;
      this.b = '';
    }

    if(this.b == '-'){
      this.sub(this.numeros);
      this.numeros.shift();
      this.numeros.shift();
      this.temp = this.resultado;
      this.numeros.unshift(this.temp);
      this.resultado = 0;
      this.b = '';
    }

    if(this.b == '*'){
      this.mult(this.numeros);
      this.numeros.shift();
      this.numeros.shift();
      this.temp = this.resultado;
      this.numeros.unshift(this.temp);
      this.resultado = 0;
      this.b = '';
    }

    if(this.b == '/'){
      this.divi(this.numeros);
      this.numeros.shift();
      this.numeros.shift();
      this.temp = this.resultado;
      this.numeros.unshift(this.temp);
      this.resultado = 0;
      this.b = '';
    }

    console.log("num: "+num)
    console.log("numeros: "+this.numeros)
    console.log("temp: "+ this.temp)
    console.log("resultado: "+ this.resultado)
    console.log("b: "+ this.b)
  }
}
