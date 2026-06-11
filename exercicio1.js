let distanciapecorrida //entrada-input
let combustivelEmLitros //entrada-input
let consumoMedio //saida ouput

DistanciaPecorrida =prompt("INFOME A DISTANCIA A SER PECORRIDA EM KM")

CombustivelEmlitros = prompt("INFORME A QUANTIDADE GASTA DE COMBUSTIVEL EM LITROS")

CistanciaPecorrida = parseFloat(distanciaPecorrida)
combustivelEmLitros = parseFloat(combustivelEmLitros)


ComsumoMedio= distanciaPecorrida / CombustivelEmlitros

alert("O consumo medio do veiculo é:" + consumoMedio + "litros por km rodado")
