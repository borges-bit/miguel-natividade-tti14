let baseTerreno
let alturaTerreno
let areaTerreno

baseTerreno = prompt("Digite a base do terreno (m):")
alturaTerreno = prompt("Digite a altura do terreno (m):")

baseTerreno = parseFloat(baseTerreno)
altutaTerreno = parseFloat(alturaTerreno)

areaTerreno = baseTerreno * alturaTerreno

alert("Area do terreno = " + areaTerreno + " m2")
