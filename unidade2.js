/* OPERADORES DE COMPARAÇÃO
> maior que
>= maior que ou igual a
< memor que
<= nenor que ou igual a
== igualdade (chega valor)-não utilizar       diferente ---->  = atribuição
=== igualdade estrita (checa valor e tipo)
!=  diferente (checa valor) -não utilizar 
!== diferente extrito (checa valor e tipo) 
OPERADORES LÓGICOS
&& ---END
|| ---OR
!  ---NOT
AVALIAÇÃO DE CURTO-CIRCUITO
1- Ao utilizar o End ou Or o programa para de checar se encontra algo contrario.
ex no && End
   console.log(true, true, false, true, true) ---- a expressão para no false, pois não importa ler depois dela, pois vai retorna false.
   no || Or
   console.log(false,false, true, true, false) ---- a expressão para no primeiro true, pois não importa o que vem depois dela, irá dar true.
2- Expressões com valores
ex console.log( "Maria" && "João" && true && "Marcos")  ---- Retorna o ultimo elemento se não houver curto-circuito.
   console.log( false || "João" || true || "Marcos")  ---- Retorna o primeiro valor true, no caso é joão.
   
3- FALSY(false, 0, '', "", ``, null(nulo), undefined(varaivel que não tem valor), NaN(Não é número)) ---- todos esses avaliam true.
ex console.log('Luiz' && "" && 'Maria') ---- tem um elemento vazio que é considerado false, logo retorna o elemento vazio.
   console.log('Luiz' && 0 && 'Maria') --- tem 0 que é considerado false, curto-circuito aqui. retorna 0.
   console.log('Luiz' && NaN && 'Maria') --- retorna NaN
   etc
   console.log( false || "" || null || undefine)  ---- verifica toda a expressão e como não achou nenhum verdadeira, retorna a ultima expressão falsa que é a undefined.
*/
/*OPERADORES CONDCIONAIS
iF
else if
else
const hora= 20;
 if (hora>= 0 && hora<=11){
    console.log ("Bom Dia!");
 }
else if(hora>=12 && hora<=17){
    console.log("Boa Tarde");
}
else if (hora>=18 && hora<=24){
    console.log ("Boa Noite");
}
    else {
    console.log("Olá!")}
obs: O If pode ser usado sozinho. Mas o else if e else não.
     O else if podem ter vários. mas só pode ter 1 else.
     Pode-se usar somente o if com o else ao mesmo tempo. não é necessário usar o else if.
Obs: Caminho indireto/relativo ---->   por exemplo para linkar o html ao css
<link rel
<link rel="stylesheet" href = "./caminho"></link>
*/
/*OPERAÇÃOP TERNÁRIA   --- Ocorre quando se quer diminuir o tamanho da expressão quando se usa If e Else.
ex
const pontuacao= 999;
 if( pontuacao>= 1000) {
   console.log("Usuário Vip");
 }
 else{
   console.log("Usuário Normal");
 }
Operação Ternária   condição ? "valor cerdadeiro" : "valor falso";
const pontuacao_usuario=1000;
const nivel_usuario= pontuacao_usuario>= 1000 ? "Usuário Vip" : "Usuário Normal";
console.log (nivel_usuario);
SETANDO UM VALOR PADRÃO PARA UMA VARIÁVEL. (Também é uma operação ternária)
const cor_usuario= null;
const cor_padrão= cor_usuario || "preta";
console.log (cor_padrão);   ---->preta
ou 
const cor_usuario= "pink";
const cor_padrão= cor_usuario || "preta";
 console.log (cor_padrão);  --->pink
*/
 /*FUNÇÃO DATE --- Função construtora
   obs: Formato
   1- new Date();
   2- new Date(valor);
   3- new Date(dataString);  ---> formato reconhecido pelo metodo Date.parse().
   4- new Date(ano,mes,dia,hora,minuto,segundo,milisssegundo);
 obs: -Toda função construtora começa com letra maiusccula
      - o mes de janeiro é o mes 0. 
      - Se for colocar a data e horario na função, o minimo é ano e mes. Se não for preenchido o restante, vai aparecer tudo 0. 
      ex 2058,3 ----> Mon,Apr,01,2058,00:00:00 GMT-300 (GMT-03:00)
1-
 const data = new Date ();
 console.log(data.toString());  -----> Thu Jan 09 2025 01:08:11 GMT-0300 (Horário Padrão de Brasília) ---> data e horario do dia que eu executei o codigo 
 
4- 
 const data = new Date (2019,3,20,15,45,15,320);   ---> ano.mes,dia,hora,min,seg,ms
 console.log(data.toString()); ---> Sat Apr 20 2019 15:45:15 GMT-0300 (Horário Padrão de Brasília)
3-
 const data= new Date ("2019-04-20 20:20:59");
 console.log(data.toString()); ---- Sat Apr 20 2019 20:20:59 GMT-0300 (Horário Padrão de Brasília)
outro ex
const data= new Date ("2019-04-20 20:20:59:56");
console.log("Dia", data.getDate());
console.log("Mes", data.getMonth()); ----> mes menor que 10. add 0 para ficar bonito--- console.log("Mes", data.getMonth()+1); 
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Ms", data.getMilliseconds());
console.log("Dia semana", data.getDay()); ---> 0 é domingo. e assim sussecivamente.
console.log(data.toString());
Saída:
Dia 20
Mes 3
Ano 2019
Hora 20
Minutos 20
Segundos 59
Ms 56
Dia semana 6 ---> sábado
Sat Apr 20 2019 20:20:59 GMT-0300 (Horário Padrão de Brasília)
outro
console.log (Date.now()); ---> 1736398805063    saida em milessimosdesegundo do marco 0 (01/01/1970)
function zaroAEsquerda(num){
  return num  <=9 ?  `0${num}`: num;
}
function formata_data(data) {
   const dia= zaroAEsquerda(data.getDate());
   const mes= zaroAEsquerda (data.getMonth()+1);
   const ano= (data.getFullYear());
   const hora= zaroAEsquerda(data.getHours());
   const min= zaroAEsquerda(data.getMinutes());
   const seg= zaroAEsquerda(data.getSeconds());
   return`${dia}/${mes}/${ano}, ${hora}:${min}:${seg}`
};
const data= new Date();
const data_brasil= formata_data(data);
console.log (data_brasil);
*/
/* Switch/Case

expressão grande:

const data = new Date("1990-05-22 14:42:28");
let dia_da_semana = data.getDay();


if (dia_da_semana === 0) {
   console.log("Domingo");
} else if (dia_da_semana === 1) {
   console.log("Segunda");
} else if (dia_da_semana === 2) {
   console.log("Terça");
} else if (dia_da_semana === 3) {
   console.log("Quarta");
} else if (dia_da_semana === 4) {
   console.log("Quinta");
} else if (dia_da_semana === 5) {
   console.log("Sexta");
} else if (dia_da_semana === 6) {
   console.log("Sábado");
}
else {
   console.log("Não é data válida")
}

Com o switch e case:


const data = new Date("1990-05-22 14:42:28");
let dia_da_semana = data.getDay();
let diaSemanaTexto;

switch (dia_da_semana){
   case 0:
      diaSemanaTexto= 'Domingo';
      break;

   case 1:
      diaSemanaTexto= 'Segunda';
      break;

   case 2:
      diaSemanaTexto= 'Terça';
      break;

   case 3:
      diaSemanaTexto= 'Quarta';
      break;

   case 4:
      diaSemanaTexto= 'Quinta';
      break;

   case 5:
      diaSemanaTexto= 'Sexta';
      break

   case 6:
      diaSemanaTexto= 'Sádado';
      break;
}

console.log(diaSemanaTexto)

ou

const data = new Date("1990-05-22 14:42:28");
let dia_da_semana = data.getDay();


switch (dia_da_semana){
   case 0:
      dia_da_semana= 'Domingo';
      break;

   case 1:
      dia_da_semana= 'Segunda';
      break;

   case 2:
      dia_da_semana= 'Terça';
      break;

   case 3:
      dia_da_semana= 'Quarta';
      break;

   case 4:
      dia_da_semana= 'Quinta';
      break;

   case 5:
      dia_da_semana= 'Sexta';
      break

   case 6:
      dia_da_semana= 'Sádado';
      break;
   default:
      dia_da_semana= 'Valor não é data';
      break;
}

console.log(dia_da_semana)

Obs: transformando isso em uma função:

// Definir a função
function obter_dia(numero){ // numero da semana vai de 0 a 6
   let dia_da_semana;

   switch (numero){
      case 0:
         dia_da_semana= 'Domingo';
         return dia_da_semana;

      case 1:
         dia_da_semana= 'Segunda';
         return dia_da_semana;

      case 2:
         dia_da_semana= 'Terça';
         return dia_da_semana;

      case 3:
         dia_da_semana= 'Quarta';
         return dia_da_semana;

      case 4:
         dia_da_semana= 'Quinta';
         return dia_da_semana;

      case 5:
         dia_da_semana= 'Sexta';
         return dia_da_semana;

      case 6:
         dia_da_semana= 'Sábado';
         return dia_da_semana;
      default:
         dia_da_semana= 'Valor não é data';
         return dia_da_semana;
   }
}


const data = new Date("1990-05-22 14:42:28");
let numero = data.getDay();
const dia_da_semana= obter_dia(numero);
console.log(dia_da_semana)  // Chamar a função

console.log(obter_dia(3)); // Chamar a função // Vai imprimir: "Quarta"

*/

// Realizei a atividade Relógio. já coloquei no Github

/* Continuação diferença entre Let, Var.

- Não posso redeclarar let mais de uma vez dentro do mesmo escopo-dentro do mesmo bloco, mas var pode.
Ex    let= carro
      let= moto -----> vai dar erro
- Let tem escopo de bloco e Var escopo de função. ou seja: let faz distinção sde escopo global e específico
logo se vc fazer o console.log dentro do escopo especifico, vai imprimir a declaração do especifo, se no escopo global, aparece o global.
Agora o Var, não tem essa regra de escopo. O que vale é sempre a ultima declaração- uma substitui a outra.
Por isso é melhor usar sempre o Let.
ex

let nome="Drielly";
var nome2= "Claudia";

if(true){
   let nome="Lucas";
   var nome2= "Rogério";
   if(true){
      let nome= "Vanusa";
      var nome2= "Douglas";
   }
}

console.log(nome,nome2)     ----> Drielly Douglas. 
O primeiro deu Dielly, pois olhou o escopo. Já o segundo deu Douglas, pq foi a última declaração.
obs: Caso precise, há algumas regras específicas para var e let quando for declarar funções.

*/

/*Atrubuição via desestruturação: é um modo de escrever o codigo mais simplificado, utilizando arrays


let a="A";
let b="B";
let c="C";

[a,b,c]=[1,2,3]; // Retribuindo os valores das constantes. "Retribuição por desestrururação"
console.log(a,b,c);

ou

let a="A";
let b="B";
let c="C";

const numero=[1,2,3];
[a,b,c]=numero; // Retribuindo os valores das constantes. "Retribuição por desestrururação"
console.log(a,b,c);

ou

let a="A";
let b="B";
let c="C";

const letras=[b,c,a];
[a,b,c]=letras; // Retribuindo os valores das constantes. "Retribuição por desestrururação"
console.log(a,b,c);

continuando os exemplos


const num= [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeironum, segundonum, terceironum]= num
console.log(primeironum,segundonum) // pode fazer assim consecutivamente

outro exemplo:

const num= [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, dois, ... resto]= num
console.log(um,dois);
console.log(resto);  //---> resposta: 100,200  [300,400,500,600,700,800,900]

const num= [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, , cinco,... resto]= num
console.log(um, tres, cinco);
console.log(resto);  //---> Resposta: 100,300,500 [600,700,800,900];

outro exemplo

const numeros=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]); // primeiro colchetes indice do arrey grande. segundo numero subindice do arrey grande.
---
const numeros=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]]=numeros; // Array por desestruturação
console.log(seis); //---> Resposta: 6
---
const numeros=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3]= numeros
console.log(lista2[2])  //Resposta 6. profes. acha melhor assim do que por desestruturação

*/

/* Desestruturação de Objetos:

atribuição normal:
const pessoa={
   nome:"Drielly",
   sobrenome:"Fraga",
   idade:34,
   endereço:{
      rua:'Rua itapoã',
      numero:320
   }
};
const nome= pessoa.idade
console.log(nome)           // ou console.log(pessoa.idade) 

Atribuição por desestruturação de objetos:

const pessoa={
   nome:"Drielly",
   sobrenome:"Fraga",
   idade:34,
   endereço:{
      rua:'Rua itapoã',
      numero:320
   }
};
//const{idade}=pessoa;
//console.log(idade)

//const{nome, sobrenome,idade}=pessoa;
//console.log(nome, sobrenome, idade);

//const{nome, sobrenome,idade, sexo='femin'}=pessoa; // Posso setar. Ou seja, criar uma variavel que não existe no objeto e colocar um valor predefinido. Caso não coloque um valor predefinido, sairá no console undefind.
//console.log(nome, sobrenome, idade, sexo);

//console.log(pessoa.endereço); // Resposta { rua: 'Rua itapoã', numero: 320 }
//console.log(pessoa.endereço.rua) // Resposta: Rua itapoã

//const{endereço:{rua, numero}}=pessoa;
//console.log(rua)  // Resposta: Rua itapoã. Método por desestruturação de objetos.

*/

//-----------------------------------------------------------------------------------------------------------------------

/*ESTRUTURA DE REPETIÇÃO

for(variavel de controle; varivel de condição; incremento ou decremento){
console.log(variavel de controle)
}
ex:

for(let i=0; i<=5;i++){
console.log(i)
} // Resposta 0,1,2,3,4,5

---- 

for(let i=0; i<=50;i+=10){
console.log(i)
} // Resposta 0,1,2,3,4,5

---- 

for(let i=5; i>=50;i-=10){
console.log(i)
} // Resposta 0,1,2,3,4,5

----

for(let i=100; i>=50;i-=10){
console.log(i)
}  // Resposta 100,90,80,70,60,50
     
----

for(let i=0; i<=10;i++){
   const par= i%2===0;
   console.log(i,par)
   } // Resposta 0 true, 1 false, 2 true ......

----

for(let i=0; i<=10;i++){
   const par= i%2===0 ?"par":"impar";
   console.log(i,par)
   } // Resposta 0 par, 1 impar, 2 par ......
----    
const frutas=['maça','banana','laranja','pera','melancia'];
for(let i=0; i<frutas.length; i++){
   console.log(`índice ${i} = ${frutas[i]}`)
}
*/

/* ATIVIDADE COM FOR
Criando uma página web com conteúdo "tag" escrito no JS e não no HTML

Html:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futuro Site</title>
</head>
<body>
    <h1>Atividade JS</h1>

    <section class="container"></section>
    
    <link rel="stylesheet" href="./style.css">
    <script src="./index.js"></script> 
</body>
</html>


<section class="container"></section>

Js:
const elementos=[                   //criar um array
    {tag: 'p', texto: 'Frase1'},   // Criar varios elementos
    {tag: 'div', texto: 'Frase2'},
    {tag: 'section', texto: 'Frase3'},
    {tag: 'footer', texto: 'Frase4'},
];

const container = document.querySelector('.container');
const criacao = document.createElement('cria');

for (let i=0; i<elementos.length; i++){
    let {tag,texto}= elementos [i];
    let tagCriar= document.createElement(tag);
    tagCriar.innerText= texto;
    criacao.appendChild(tagCriar);
}
container.appendChild(criacao);

*/

/* DOM - Document Objecto Model
site: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model

O **DOM (Document Object Model)** é uma representação em árvore da estrutura de um documento HTML ou XML. 
Ele permite que você manipule elementos e conteúdos de uma página web usando **JavaScript**.

Aqui estão os pontos principais:

1. **Estrutura em Árvore**: O DOM organiza o HTML como uma árvore, onde:
   - Cada tag HTML é um **nó** (elemento).
   - Um nó pode ser **pai** (como `<body>` que contém outros elementos) ou **filho** (como `<h1>`, `<p>`, etc., 
   que estão dentro de `<body>`).

2. **Manipulação**: Com o DOM, você pode:
   - **Selecionar** elementos da página (ex: `document.getElementById('id')`).
   - **Modificar** o conteúdo, estilos e atributos dos elementos (ex: mudar o texto, cores, adicionar classes, etc.).
   - **Criar e remover** elementos dinamicamente (ex: adicionar um novo parágrafo, excluir uma imagem).

3. **Interatividade**: Usando o DOM, você pode adicionar interatividade à página, como responder a eventos de cliques, 
teclas, entre outros.

Exemplo:
```javascript
// Selecionar um elemento pelo ID e alterar o texto
document.getElementById('meuElemento').textContent = 'Novo Texto';
```

Resumindo, o DOM é a interface que conecta o código JavaScript ao HTML, permitindo que você altere dinamicamente a 
estrutura e o conteúdo da página.
*/

/* ESTRUTURA DE REPETIÇÃO FOR IN

FOR NORMAL:   obs: usa-se com iteráveis(str, arrays)
const frutas=['Pera', 'Maça', 'Banana'];
for (index=0; i<frutas.length; i++){
console.log(frutas[index]) // Resposta: Pera, Maça, Banana
console.log(index)        // Resposta: 0,1,2  
}

FOR IN:  obs: retorna indices ou chave (str, array, objetos)
const frutas=['Pera', 'Maça', 'Banana'];
for (let index in frutas){
   console.log (frutas[index]) // Resposta: Pera, Maça, Banana
   console.log (index)  // Resposta: 0,1,2
}

----
Outrta esplicação:

const pessoa = {
   nome:'Drielly',
   sobrenome: 'Fraga',
   idade: 34,
};
console.log(pessoa.nome)
console.log(pessoa['nome'])  // duas maneiras de imprimir a mesma coisa

const chave = 'nome'; // agora atraves da criação de uma variavel const
console.log(pessoa[chave]);

----
const pessoa = {
   nome:'Drielly',
   sobrenome: 'Fraga',
   idade: 34,
};
for (let chave in pessoa){
console.log(chave)   // Resposta: nome sobrenome idade
console.log(chave, pessoa[chave]) //Resposta: nome Drielly -sobrenome Fraga -idade 34

}
*/
/*FOR OF obs:Não dá para usar com objeto, somente com (str, arrays, iteraveis)

Normal com For In:

const nome ='Drielly Fraga';
for(let i in nome){
   console.log(nome[i])
} // Resposta: Cada laço imprime uma letra. Logo imprime meu nome todo -letra em cima de letra.

----
For Of 
const nome ='Drielly Fraga';
for(let i of nome){
   console.log(i) //Mesma resposta da anterior, mas agora fazendo com FOR OF
}

Mesma forma, mas agora com array:
const nome =['Drielly','Ayres' ,'Fraga'];
for(let i of nome){
   console.log(i) //Mesma resposta da anterior, mas agora fazendo com FOR OF
}
----

FOREACH
const nome =['Drielly','Ayres' ,'Fraga'];
nome.forEach(function(valor,indice){
   console.log(valor,indice)    //Mesma resposta da anterior, mas agora fazendo com FOR OF
})  
*/

/*Atividade

Formatar o style usando o JS em vez de editar a folha de estilo.
Troquei a cor de fundo-blackground- e a cor da letra-color

Html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade</title>
</head>
<body>
    <h1>Atividade JS</h1>

    <section class="container">
        <h1>Texto ojfogjofjg9</h1>
    </section>
    <div class="paragrafos">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Accusamus, dolores fuga? Magnam, </p>
        <p>amet eveniet blanditiis voluptate laborum debitis, </p>
        <p>ullam officia placeat temporibus officiis at </p>
        <p>quisquam similique illo optio error culpa.</p>
    </div>
    <link rel="stylesheet" href="./style.css">
    <script src="./index.js"></script> 
    <!--<script src="index.js"></script>-->
</body>
</html>

Js
const paragrafos= document.querySelector('.paragrafos');
const parag= paragrafos.querySelectorAll('p');

const estilos= getComputedStyle(document.body);
const corbody= estilos.backgroundColor;
console.log(corbody);

for(let p of parag){
   p.style.backgroundColor=corbody;
   p.style.color='#ffffff';
}

Css
body {
    background-color: blue;
  }
  
  .paragrafos {
    background-color: white;
  }
*/

/* WHILE, DO WHILE*/

