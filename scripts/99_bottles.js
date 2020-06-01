//For loop para facilitar o decrementar do número de garrafas, usando menos linhas
for(var i = 99; i > 2; i--){
	//Output para a consola da letra da canção, com o atual número de garrafas (i) e o próximo número (i-1)
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, ", i-1, "bottles of beer on the wall...");
}
/*Acabado o loop principal, temos duas excessões no final, dado que não podemos dizer "1 bottles" que estaria gramaticalmente incorreto.
Assim, temos dois outputs finais que corrigem para "1 bottle", além de um "no more bottles of beer on the wall".
*/
console.log(" 2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall...");
console.log(" 1 bottle of beer on the wall, 1 bottle of beer. Take the last down, pass it around, no more bottles of beer on the wall...");