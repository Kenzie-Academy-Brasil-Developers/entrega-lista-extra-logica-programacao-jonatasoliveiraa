function calculateSalary(salarioFixo, valorDeVendas){

  if(valorDeVendas <= 1200){
    return salarioFixo += valorDeVendas * 0.03
  }
  else if(valorDeVendas > 1200){
    return salarioFixo += 1200 * 0.03 + (valorDeVendas - 1200) * 0.05
  }


}console.log(calculateSalary(2500, 1800))


function cashMachine(valorSaque,salarioFixo,valorDeVendas){
  
  let salFixo = calculateSalary (salarioFixo, valorDeVendas)
  let valSaque = valorSaque
  let saqueFinal = 0
  let nota200 = 0
  let nota100 = 0
  let nota50 = 0
  let nota20 = 0
  let nota10 = 0
  let nota5 = 0
  let nota2 = 0

  if(valorSaque > salFixo){
    return "Você não tem saldo sulficiente para sacar"
  }

  for(let i = 0; i < valorSaque; i++){

    if(valorSaque >= 200){
      nota200++
      saqueFinal = valorSaque -= 200
    }
    else if(saqueFinal >= 100){
      nota100++
      saqueFinal -= 100
    }
    else if(saqueFinal >= 50){
      nota50++
      saqueFinal -= 50
    }
    else if(saqueFinal >= 20){
      nota20++
      saqueFinal -= 20
    }
    else if(saqueFinal >= 10){
      nota10++
      saqueFinal -= 10
    }
    else if(saqueFinal >= 5){
      nota5++
      saqueFinal -= 5
    }
    else if(saqueFinal >= 2){
      nota2++
      saqueFinal -= 2
    }
  }

  return `${nota200} notas de R$200, ${nota100} notas de R$100, ${nota50} notas de R$50, ${nota20} notas de R$20, ${nota10} notas de R$10, ${nota5} notas de R$5, ${nota2} notas de R$2. Seu salario final é R$${salFixo - valSaque + saqueFinal}`

}console.log(cashMachine(1241, 1200, 1300))


function calculateStock(estoqueAtual, estoqueMaximo, estoqueMinimo){

  let media = (estoqueMaximo + estoqueMinimo) / 2 

  if(estoqueAtual >= media){
    return 'Não efetuar compra'
  }else{
    return 'Efetuar compra'
  }

}console.log(calculateStock(169, 300, 40))


function calculateAge(anoNasc,anoAtual,){

  let year = anoAtual - anoNasc
  let month = year * 12
  let days = year * 365
  let week = year * 48

  return `
  1. A idade em anos é: ${year} anos. 
  2. A idade em meses é: ${month} meses. 
  3. A idade em dias é: ${days} dias.
  4. A idade em semanas é: ${week} semanas.`

}console.log(calculateAge(1997,2022))


let matrizQuadrada3x3 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]//saída => 1, 5, 9
  
function getDiagonal(array){

let newArr = []
for(let i = 0; i < array.length; i++){
    
    newArr.push(array[i][i])
}

return newArr

}console.log(getDiagonal(matrizQuadrada3x3))