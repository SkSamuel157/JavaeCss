// Retangulo
function Retangulo() {
    let x = Number(prompt("Informe o valor da Base (B):"));
    let y = Number(prompt("Informe o valor da Altura (H):"));
    let resultado = x * y;

        alert("O resultado da área do retângulo é: " + resultado +"m²" );
        document.getElementById('oi').innerHTML=resultado
  }
//   Triangulo

function Triangulo() {
    let x = Number(prompt("Informe o valor da Base (B):"));
    let y = Number(prompt("Informe o valor da Altura (H):"));
    let resultado = (x * y) / 2;

        alert("A área do triângulo é: " + resultado + "m²");
  }

//   Circulo
function Circulo() {

    let x = Number(prompt("Informe o Raio (R) do círculo:"));
    const pi = Math.PI;
    let resultado = pi * x * x;

        alert("A área do círculo é: " + resultado + "m²");
  }

//   Trapezio
function Trapezio() {
    let B = Number(prompt("Informe o valor da Base Maior (B):"));
    let b = Number(prompt("Informe o valor da Base Menor (b):"));
    let altura = Number(prompt("Informe a altura do trapézio:"));
    let area = ((baseMaior + baseMenor) * altura) / 2;
    alert("A área do trapézio é: " + area + " ");
  }

