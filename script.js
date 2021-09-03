var vidaAtual = 8
var vidaMax = 13
var sanidadeatual = 4
var sanidadetotal= 50
var banco = 18000

vidaAtual = localStorage.getItem('vida')

sanidadeatual = localStorage.getItem('sanidade')

var vida = [vidaAtual,vidaMax]
vidahtml(vida)
function vidahtml(vida){
	
	
  var html = ""
	html += "<tr><td>Vida:</td>"
    html += "<td>"+ vidaAtual + "/" + vidaMax + "</td>"
    html +="<td><button onClick='adicionarVida()'>Cura</button><button onClick='retirarVida()'>Dano</button></td></tr>"

	html += "<tr><td>Sanidade:</td>"
    html += "<td>"+ sanidadeatual + "/" + sanidadetotal + "</td>"
    html +="<td><button onClick='adicionarSanidade()'>Curar</button><button onClick='retirarSanidade()'>Remover</button><button onClick='rollsanidade()'>ROLL</button></td></tr>"

	html +="<tr><td>Força:</td>"
	html +="<td>8</td>"
	html +="<td><button onClick='roll8()'>ROLL</button></td></tr>"

	html +="<tr><td>Destreza:</td>"
	html +="<td>10</td>"
	html +="<td><button onClick='roll10()'>ROLL</button></td></tr>"

	html +="<tr><td>Constituição:</td>"
	html +="<td>16</td>"
	html +="<td><button onClick='roll16()'>ROLL</button></td></tr>"

	html +="<tr><td>Educação:</td>"
	html +="<td>12</td>"
	html +="<td><button onClick='roll12()'>ROLL</button></td></tr>"

	html +="<tr><td>Aparencia:</td>"
	html +="<td>12</td>"
	html +="<td><button onClick='roll12()'>ROLL</button></td></tr>"

	html +="<tr><td>Inteligencia:</td>"
	html +="<td>16</td>"
	html +="<td><button onClick='roll16()'>ROLL</button></td></tr>"

	html +="<tr><td>Poder:</td>"
	html +="<td>10</td>"
	html +="<td><button onClick='roll10()'>ROLL</button></td></tr>"

	html +="<tr><td>Sorte:</td>"
	html +="<td>14</td>"
	html +="<td><button onClick='roll14()'>ROLL</button></td></tr>"

	html +="<tr><td>Tamanho:</td>"
	html +="<td>10</td>"
	html +="<td><button onClick='roll10()'>ROLL</button></td></tr>"

	html +="<tr><td>Movimento:</td>"
	html +="<td>8</td>"
	html +="<td><button onClick='roll8()'>ROLL</button></td></tr>"
	
 
  var tabelastats = document.getElementById("tabelastats")
  tabelastats.innerHTML = html
}

dadospessoais(vida)
function dadospessoais(vida){
var html9 =""

html9 +="<tr><th colspan='3'>Dados Pessoais</th></tr>"

html9 += "<tr><td>Nome</td><td>Lilian Yuki</td></tr>"

html9 += "<tr><td>Jogador</td><td>Alice</td></tr>"

html9 += "<tr><td>Ocupação</td><td>Cirurgia Forence</td></tr>"

html9 += "<tr><td>Idade</td><td>21</td></tr>"

html9 += "<tr><td>Gênero</td><td>Feminino</td></tr>"

html9 += "<tr><td>Local De Nascimento</td><td>São Paulo</td></tr>"

html9 += "<tr><td>Local De Residência</td><td>São Paulo</td></tr>"

html9 += "<tr><td colspan='3'>Dano Extra:0      Corpo:0     Exposição Paranormal: "+ localStorage.getItem('expparanormal') +"%  <input type='number1' id='number' size='2.5'><input name='submit' type='submit' onclick='assignVar()'></td></tr>"

localStorage.setItem("dados",html9);

	var dadospessoais = document.getElementById("dadospessoais")
  dadospessoais.innerHTML = localStorage.getItem("dados")


}

function assignVar(){
var expparanormal = document.getElementById("number").value
localStorage.setItem("expparanormal",expparanormal)
}


pericias(vida)
function pericias(vida){
	var html3 = ""
	
	html3 +="<tr><td>Antropologia:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arqueologia:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arremessar:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arte e Oficio:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Cavalgar:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Charme:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Chaveiro:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Contabilidade:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Ciência (Biologia):</td>"
	html3 +="<td>12</td>"
	html3 +="<td><button onClick='roll12()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Ciência (Forence):</td>"
	html3 +="<td>14</td>"
	html3 +="<td><button onClick='roll14()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Ciência (Farmácia):</td>"
	html3 +="<td>10</td>"
	html3 +="<td><button onClick='roll10()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Ciência (Química):</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Conhecimento:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Concertos Elétricos:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Concertos Mecânicos:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Direito:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Dirigir Automóveis:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Disfarce:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Demolições:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Esquivar:</td>"
	html3 +="<td>14</td>"
	html3 +="<td><button onClick='roll14()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Encontrar:</td>"
	html3 +="<td>12</td>"
	html3 +="<td><button onClick='roll12()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Escalar:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Escutar:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Eletrônica:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Furtividade:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>História:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Hipnose:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Intimidação:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Lábia:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Língua Nativa:</td>"
	html3 +="<td>12</td>"
	html3 +="<td><button onClick='roll12()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Língua (Outra):</td>"
	html3 +="<td>10</td>"
	html3 +="<td><button onClick='roll10()'>ROLL</button></td></tr>"
	
	
	html3 +="<tr><td>Leitura Labial:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Lutar (Briga):</td>"
	html3 +="<td>5</td>"
	html3 +="<td><button onClick='roll5()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Medicina:</td>"
	html3 +="<td>16</td>"
	html3 +="<td><button onClick='roll16()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Mergulho:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Mundo Natural:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Natação:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Navegação:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Ocultismo:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Op. Máquina:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Persuasão:</td>"
	html3 +="<td>8</td>"
	html3 +="<td><button onClick='roll8()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Pilotar (Aeronave):</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Pilotar (Barco):</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Primeiros Socorros:</td>"
	html3 +="<td>6</td>"
	html3 +="<td><button onClick='roll6()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Prestidigitação:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Psicanálise:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Psicologia:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Rastrear:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Saltar:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Sobrevivência:</td>"
	html3 +="<td>2</td>"
	html3 +="<td><button onClick='roll2()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Treinar Animais:</td>"
	html3 +="<td>1</td>"
	html3 +="<td><button onClick='roll1()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Usar Bibliotecas:</td>"
	html3 +="<td>10</td>"
	html3 +="<td><button onClick='roll10()'>ROLL</button></td></tr>"

	html3 +="<tr><td>Usar Computadores:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td colspan = 3>Armas De Fogo</td>"
	
	html3 +="<tr><td>Pistolas:</td>"
	html3 +="<td>4</td>"
	html3 +="<td><button onClick='roll4()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Rifles/Espingardas:</td>"
	html3 +="<td>14</td></td>"
	html3 +="<td><button onClick='roll14()'>ROLL</button></td></tr>"
	
	html3 +="<tr><td>Arcos/Bestas:</td>"
	html3 +="<td>3</td>"
	html3 +="<td><button onClick='roll3()'>ROLL</button></td></tr>"
	
	var tabelapericias = document.getElementById("tabelapericias")
  tabelapericias.innerHTML = html3
}

function adicionarVida(){
  var resposta1 = parseInt(prompt('Quanto vida vai curar?'))
   vidaAtual = vidaAtual + resposta1

   localStorage.setItem('vida',vidaAtual);

   vidahtml (vida)
}

function retirarVida(){
	var resposta2 = parseInt(prompt('Quanto dano levou?'))
   vidaAtual = vidaAtual - resposta2
   
   localStorage.setItem('vida',vidaAtual);	

   vidahtml (vida)
}

function adicionarSanidade() {
	var resposta3 = parseInt(prompt('Quanto de sanidade vai curar?'))
   sanidadeatual = sanidadeatual + resposta3
   localStorage.setItem("sanidade",sanidadeatual)
   vidahtml (vida)

}

function retirarSanidade() {
	var resposta4 = parseInt(prompt('Quanto de sanidade vai retirar?'))
    sanidadeatual = sanidadeatual - resposta4
    vidahtml (vida)
}

function rollsanidade () {
	var rolladasanidade = Math.floor(Math.random() * 100) + 1;
	if (rolladasanidade > sanidadeatual){
		alert("Fracasso com " + rolladasanidade)
	}else{
		alert("Sucesso com " + rolladasanidade)
	}
}

function roll10 (){
	var rollada10 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollada10 >= 19){
		alert("Extremo Dado:"+rollada10)
	}else if (rollada10 >= 16){
		alert("Bom Dado:"+rollada10)
	}else if (rollada10 >= 11){
		alert("Normal Dado:"+rollada10)
	}else{
		alert("Fracasso Dado:"+rollado10)
	}
}

function roll15 (){
	var rolladaForça = parseInt(prompt("Qual foi o valor do dado?"))
	if (rolladaForça >= 18){
		alert("Extremo Dado:"+rolladaForça)
	}else if (rolladaForça >= 14){
		alert("Bom Dado:"+rolladaForça)
	}else if (rolladaForça >= 6){
		alert("Normal Dado:"+rolladaForça)
	}else{
		alert("Fracasso Dado:"+rolladoForça)
	}
}

function roll12 (){
	var rolladoDestreza = parseInt(prompt("Qual foi o valor do dado?"))
	if (rolladoDestreza >= 19){
		alert("Extremo Dado:"+rolladoDestreza)
	}else if (rolladoDestreza >= 15){
		alert("Bom Dado:"+rolladoDestreza)
	}else if (rolladoDestreza >= 9){
		alert("Normal Dado:"+rolladoDestreza)
	}else{
		alert("Fracasso Dado:"+rolladoDestreza)
	}
}

function roll13 (){
	var rolladoConstituiçao = parseInt(prompt("Qual foi o valor do dado?"))
	if (rolladoConstituiçao >= 19){
		alert("Extremo Dado:"+rolladoConstituiçao)
	}else if (rolladoConstituiçao >= 15){
		alert("Bom Dado:"+rolladoConstituiçao)
	}else if (rolladoConstituiçao >= 8){
		alert("Normal Dado:"+rolladoConstituiçao)
	}else{
		alert("Fracasso Dado:"+rolladoConstituiçao)
	}
}

function roll7(){
	var rolladoAparencia = parseInt(prompt("Qual foi o valor do dado?"))
	if (rolladoAparencia == 20){
		alert("Extremo Dado:"+rolladoAparencia)
	}else if (rolladoAparencia >= 18){
		alert("Bom Dado:"+rolladoAparencia)
	}else if (rolladoAparencia >=14){
		alert("Normal Dado:"+rolladoAparencia)
	}else{
		alert("Fracasso Dado:"+rolladoAparencia)
	}
}

function roll11 (){
	var rolladoInteligencia = parseInt(prompt("Qual foi o valor do dado?"))
	if (rolladoInteligencia >= 19){
		alert("Extremo Dado:"+rolladoInteligencia)
	}else if (rolladoInteligencia >= 16){
		alert("Bom Dado:"+rolladoInteligencia)
	}else if (rolladoInteligencia >= 10){
		alert("Normal Dado:"+rolladoInteligencia)
	}else{
		alert("Fracasso Dado:"+rolladoInteligencia)
	}
}

function roll16 (){
	var rollada16 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollada16 >= 18){
		alert("Extremo Dado:"+rollada16)
	}else if (rollada16 >= 13){
		alert("Bom Dado:"+rollada16)
	}else if (rollada16 >= 5){
		alert("Normal Dado:"+rollada16)
	}else{
		alert("Fracasso Dado:"+rollada16)
	}
}

function roll18 (){
	var rollada18 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollada18 >= 18){
		alert("Extremo Dado:"+rollada18)
	}else if (rollada18 >= 12){
		alert("Bom Dado:"+rollada18)
	}else if (rollada18 >= 3){
		alert("Normal Dado:"+rollada18)
	}else{
		alert("Fracasso Dado:"+rollada18)
	}
}

function roll2 (){
	var rollada2 = parseInt(prompt("Qual foi o valor do dado?"))
	 if (rollada2 == 20){
		alert("Bom Dado:"+rollada2)
	}else if (rollada18 >= 19){
		alert("Normal Dado:"+rollada2)
	}else{
		alert("Fracasso Dado:"+rollada2)
	}
}

function roll3 (){
	var rollada3 = parseInt(prompt("Qual foi o valor do dado?"))
	 if (rollada3 == 20){
		alert("Bom Dado:"+rollada3)
	}else if (rollada3 >= 18){
		alert("Normal Dado:"+rollada3)
	}else{
		alert("Fracasso Dado:"+rollada3)
	}
}

function roll4 (){
	var rollada4 = parseInt(prompt("Qual foi o valor do dado?"))
	 if (rollada4 >= 19){
		alert("Bom Dado:"+rollada4)
	}else if (rollada4 >= 17){
		alert("Normal Dado:"+rollada4)
	}else{
		alert("Fracasso Dado:"+rollada4)
	}
}

function roll1 (){
	var rollada1 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollada1 == 20){
		alert("Normal Dado:"+rollada1)
	}else{
		alert("Fracasso Dado:"+rollada1)
	}
}

function roll9 (){
	var rollado9 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollado9 >= 20){
		alert("Extremo Dado:"+rollado9)
	}else if (rollado9 >= 17){
		alert("Bom Dado:"+rollado9)
	}else if (rollado9 >= 12){
		alert("Normal Dado:"+rollado9)
	}else{
		alert("Fracasso Dado:"+rollado9)
	}
}

function roll8 (){
	var rollado8 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollado8 >= 20){
		alert("Extremo Dado:"+rollado8)
	}else if (rollado8 >= 17){
		alert("Bom Dado:"+rollado8)
	}else if (rollado8 >= 13){
		alert("Normal Dado:"+rollado8)
	}else{
		alert("Fracasso Dado:"+rollado8)
	}
}

function roll5 (){
	var rollado5 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollado5 >= 20){
		alert("Extremo Dado:"+rollado5)
	}else if (rollado5 >= 19){
		alert("Bom Dado:"+rollado5)
	}else if (rollado5 >= 16){
		alert("Normal Dado:"+rollado5)
	}else{
		alert("Fracasso Dado:"+rollado5)
	}
}

function roll14 (){
	var rollada14 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollada14 >= 19){
		alert("Extremo Dado:"+rollada14)
	}else if (rollada14 >= 14){
		alert("Bom Dado:"+rollada14)
	}else if (rollada14 >= 7){
		alert("Normal Dado:"+rollada14)
	}else{
		alert("Fracasso Dado:"+rollada14)
}
}

function roll6(){
	var rollado6 = parseInt(prompt("Qual foi o valor do dado?"))
	if (rollado6 == 20){
		alert("Extremo Dado:"+rollado6)
	}else if (rollado6 >= 18){
		alert("Bom Dado:"+rollado6)
	}else if (rollado6 >= 15){
		alert("Normal Dado:"+rollado6)
	}else{
		alert("Fracasso Dado:"+rollado6)
	}
}

