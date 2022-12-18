var x = 0

var y = Number(prompt("Vai digitar quantos numeros?"))

var resultado = 0;

function Divisao(x,y){

 var Conta = x / y 

 return Conta 
 
}



while(x < y){

z = Number(prompt("Qual o número?"))

 resultado = resultado + z
x++;
  

}  

alert(`O resultado da soma desses números é ${resultado}`)

var Media = prompt("Gostaria que revelaçemos a media, sim ou não?")

if(Media == "sim"){

  
let Media = Divisao(resultado,y) 

parseFloat (Media)

alert(`A media é ${Media}`)}

else if( Media == 'não'){

alert("Ok")

}

else{

alert("Pfv digite sim ou não")

}
