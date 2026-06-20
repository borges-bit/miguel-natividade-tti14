let larguraTerreno
let comprimentoTerreno
let perimetroTerreno

larguraTerreno = prompt("Digite a largura do terreno (m):")
comprimentoTerreno = prompt("Digite o comprimento do terreno (m):")

larguraTerreno = parseFloat(larguraTerrno)
comprimentoTerreno = parseFloat(comprimentoTerreno)

perimetroTerreno = 2 * (larguraTerreno + comprimentoTerreno)

alert("Perimetro do Terreno = " + perimetroTerreno + " metros")
