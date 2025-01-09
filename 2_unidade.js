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
*/