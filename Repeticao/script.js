//!Nível Básico
//Exercício 1
for(let i = 1; i < 11; i++){
    console.log(i);
}

//Exercício 2

let inputUser = 5;

for(let i = 1; i < 11; i++){
    let tabuada = inputUser * i;
    console.log(`Tabuada: ${tabuada}`)
}

//Exercício 3

let UserInput = 20;
let soma = 0;

for(let i = UserInput; i > 0; i--){
    soma += i;
}
console.log(soma);

//! Nível Intermediário
//Exercício 1

for(let i = 1; i < 51; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//Exercício 2
const numAleatorio = 75;

let palpite = Number(prompt("Digite um palpite"));

while(numAleatorio != palpite){
    console.log("Tente novamente");
    palpite = Number(prompt("Digite um palpite"));
    }
console.log("Sucesso");


//Exercício 3