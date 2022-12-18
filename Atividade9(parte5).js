function Anime(x,y){

return x - y


}

function Mais(x,y){

    return x + y
    
    
    }

    function Vezes(x,y){

        return x * y
     
        
        }

        function Potenciação(x,y){

            return x ** y
            
            
            }

            function Divisao(x,y){

                return x / y
                
                
                }

var x = Number( prompt('Digite um número'))

var z = prompt('Digite algum sinal podendo ser +, - , * , / ou ** ')

var y = Number(prompt('Digite um outro número'))



if( z == "**"){


   let Monika = Potenciação(x,y)
   
   
   
   alert(Monika)
   
   }


else if( z == "-"){

  let Yuri =  Anime(x,y)



alert(Yuri)



}



else if( z == "*"){

let Natsuki =  Vezes(x,y)




alert(Natsuki)


}

else if(z == "+"){

 let Sayori  =  Mais(x,y)

    

   alert(Sayori)


}

else if( z == '/'){

    let Just = Divisao(x,y)



alert(Just)



}

else{

alert("Tentou escrever alguma coisa diferente ne?")


}
