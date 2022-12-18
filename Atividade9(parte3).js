alert('Os produtos a seguir tem um custo, observer')

alert('Produtos')

var Notebook = 10000

var Playstation5 = 25000

alert(' Notebook custa ' + Notebook + '\n' + '\n' + 'Playstation5 custa' + Playstation5)

var Saldo = Number( prompt('Digite seu saldo') )

var Produto =  prompt('Digite o que você quer comprar')



function Anime(x,y){

  return x-y}

if ( Produto == 'Notebook'){

  if(Saldo < Notebook){

   alert('A compra falhou devido ao saldo insuficiente')       
  }

  else if(Saldo >= Notebook){

    Anime(Saldo, Notebook)
    
    alert('Parabéns, compra realizada com sucesso!')}
   
}



else if(Produto == "Playstation5"){


    if(Saldo < Playstation5){

     Resultado = Anime(Saldo,Notebook)
    
    alert('A compra falhou devido ao saldo insuficiente')}

    else if( Saldo >= Playstation5){

     Resultado = Anime(Saldo,Notebook)

   alert("Parabéns, compra realizada com sucesso!")

    }
    
  }

  else{

    alert('Como uma certa pessoa disse, se não comprar nada o desconto e maior')
  }
  
    







