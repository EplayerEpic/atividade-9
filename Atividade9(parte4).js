var soma = 0;
function Somar(Resultado){
 
     return soma += Resultado;
 
 }
 
 function Media(x){
 
     return x / 4
 
 }
 
 for(var i = 0 ; i < 4; i++){
 
    var valor = Number(prompt("Digite um valor"))
 
    var Soma = Somar(valor)
 
 
  
 } 
 
 var media = Media(Soma)
 
 alert(`A soma é ${soma}`) 
 
 alert(`A media é ${media}`) 


