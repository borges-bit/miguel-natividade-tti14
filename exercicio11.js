let litrosConsumidos
let precoLitro
let custoTotal

litrosConsumidos=prompt("Digite a quantidade de litros consumidos:")
precoLitro=prompt("Digite o preco do litro de combustivel R$")

litrosComsumidos=parseFloat(litrosConsumidos)
precoLitro=parseFloat(precoLitro)

custoTotal=litrosConsumidos * precoLitro

alert("Custo total de abastecimento = R$ " + custoTotal)
