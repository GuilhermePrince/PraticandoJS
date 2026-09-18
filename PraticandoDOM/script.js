
const elementos = document.querySelectorAll(".texto");

// percorrendo a lista e imprimindo cada um dos elementos
elementos.forEach(elemento => console.log(elemento));

// percorrendo a lista e pegando o texto do elemento (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

// alterando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
    
    // elemento.textContent = "Alterado"; // vem com a formatação do elemento
})

// trocando as tags - innerHTML
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>item</h2>"
})

// trocar a cor do elemento
elementos.forEach(elemento => {
    elemento.style.color = "#0000FF";
})


// EVENTOS COM JS
// o que são eventos? Ações do usuário

// Evento click
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// });


// Evento de digitação (input / keyup)

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// INPUT
// evento input -> dispara sempre que digita, em tempo real
// campo.addEventListener("input", () => {

//     // value -> o que está sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

// KEYUP
// só dispara quando solta a tecla
// campo.addEventListener("keyup", () => {

//     // value -> o que está sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

// Evento de mouse
// const elemento = document.getElementById("troca-cor");

// // mouseover -> quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// })

// // mouseout -> quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
// })

// mousemove
// pega a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`)
// })


// EVENTO DE FORMULÁRIO (submit)

// const form = document.querySelector("form"); // pegando direto pela tag form


// // o comportamento padrão do formulário é recarregar a página ao enviar o submit
// form.addEventListener("submit", (e) => {

//     // impede o comportamento padrão do formulário
//     e.preventDefault();

//     const nome = document.getElementById("nome").value

//     console.log(`Nome: ${nome}`);

// })


// // Criando elementos na página
// const novoElemento = document.createElement("p"); // cria o elemento p
// novoElemento.innerText = "Elemento novo criado.";

// const form = document.getElementById("form");
// // //Adicionando um elemento filho (p) dentro do pai (form)
// form.appendChild(novoElemento);


// //criar botao 
// const botao = document.createElement("button");
// botao.innerText = "Excluir elemento";

// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

//     //apagando direto do pai
//     //form.removeChild(novoElemento)
// })


//Adicionando elementos em uma lista, a partir de um input
const input = document.getElementById("input"); // input
const botao = document.getElementById("add"); // button
const lista = document.getElementById("lista") // ul

botao.addEventListener("click", () => {
    const valorDigitado = input.value; // pega o valor que foi digitado na caixinha/input

    const li = document.createElement("li"); //criando <li>
    li.innerText = valorDigitado;

    //colocabfo o filho (li) dentro do pai (ul)
    lista.appendChild(li);

    input.value = "";

})