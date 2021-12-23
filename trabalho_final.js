//Programa de Pós-Graduação em Ciência da Computação (PPGCC)
//Universidade Federal do Acre (Ufac)
//Disciplina: Fundamentos Teóricos da Computação (FTC)
//Docente: André Luiz Nasserala Pires
//Estudante: André Alfonso Peixoto
//Trabalho final

function questao1(){
	var E = ['ap', 'fp'];
	var alfabeto = ['t', '(', ')', '+', '-'];
	var lambda = [];
	var i = E[0];
	var F = E[1];
	var estado_atual = i;
	var expr = prompt("Informe uma expressão: ");
	expr = expr.split('');

	for (var j = 0; j<=expr.length; j++){
		if(estado_atual === i && expr[j] === "("){
					lambda[0] = 'x';
					console.log("Entrada de ( e valor de lambda: " + lambda[j]);
		}
		if(estado_atual === F && expr[j] === ")"){
					estado_atual = E[1];
					lambda.pop();
					console.log("Entrada de )");
		}

		if(estado_atual === F && expr[j] === "+" || expr[j] == "-"){
					estado_atual = E[0];
					console.log("Entrada de operacao");
		}

		if(estado_atual === i && !isNaN(expr[j])){
					estado_atual = E[1];
					console.log("Entrada de numero");
		}
	}
	
	console.log(expr.length);
	console.log(j);
	console.log(F);
	console.log(estado_atual);
	console.log(lambda);
	
	if(estado_atual == F && lambda){
				console.log("Expressão aceita");
				alert("Expressão aceita");
	}else{
				console.log("Expressão não aceita");
				alert("Expressão não aceita");
	}
	
}

function questao2(){
	var E = ['i', 'd'];
	var alfabeto = ['0', '1'];
	var lambda = [];
	var i = E[0];
	var F = E[0];
	var estado_atual = i;
	var expr = prompt("Informe uma expressão: ");
	expr = expr.split('');

	for(var j=0; j<=expr.length; j++){
		if(estado_atual == i && expr[j] == "0"){
			estado_atual = E[1];
			if (lambda){
				lambda = ['F'];
				console.log("Recebe 0 e lambda: " + lambda[j]);
				console.log(estado_atual);
			}else{
				lambda.push('F');
				console.log(lambda);
			}
			console.log(lambda[k]);
		}

		else if(estado_atual == E[0] && expr[j] == '1'){
			estado_atual = E[1];
			if (lambda){
				lambda = ['U'];
			}else{
				lambda.push('U');
			}
			console.log(lambda[k]);
		}

		else if(estado_atual == E[1] && expr[j] == '0'){
			estado_atual = E[0];
			
			console.log("Recebe 0 de novo e lambda: " + lambda[j]);
			console.log(estado_atual);
			
			for(var k = 0; k<=2; k++){
				if(lambda == 'U'){
					lambda.pop('U');
				} if(lambda == 'F'){
					lambda.pop('F');

				}
				console.log(lambda[k]);
			}
		}


			else if(estado_atual == E[1] && expr[j] == '1'){
			estado_atual = E[0];
			
			for(var k = 0; k<=2; k++){
				if(lambda == 'F'){
					lambda.pop('F');
				} if(lambda == 'U'){
					lambda.pop('U');

				}
				console.log(lambda[k]);
			}
		}

	}
	
	console.log(estado_atual);
	
	if(estado_atual == F && lambda){
			alert("A palavra "+expr+" é válida.");
		}else{
			alert("A palavra "+expr+" é inválida.");
	}
}

/*
E = {q0, q1, q2}
Σ = {t, +, -}
t pertence a N
δ:
q0 <- t -> q1
q0 <- + | - -> q2
q1 <- t -> q2
q1 <- - | + -> q0
q2 <- - | + | t -> q2
i = q0
F = q0
Γ = {x} 
*/

function verifica_expressao(){
		var contador_erros;
	var exp = prompt("Informe uma expressão")
	exp = exp.split('');
	E = ['q0', 'q1', 'q2'];
    i = E[0];
    F = E[1];
    e_atual = i;
	for (var j = 0; j <= exp.length; j++) {
		if (e_atual == E[0] && !isNaN(exp[j])) {
            e_atual = E[1];
			alert("Numero 1");
		}
        else if (e_atual == E[0] && (exp[j] == '+' || exp[j] == '-')) {
            e_atual = E[2];
			alert("Operacao 1");
		}
        else if (e_atual == E[1] && !isNaN(exp[j])) {
            e_atual = E[2];
		}
        else if (e_atual == E[1] && (exp[j] == '+' || exp[j] == '-')) {
            e_atual = E[0];
			alert("Operacao 2");
		}
        else if (e_atual == E[2] && (exp[j] == '+' || exp[j] == '-' || !isNaN(exp[j]))) {
            e_atual = E[2];
		}
	}
	alert(exp.length);
	alert(e_atual);
	if (e_atual == F) {
		alert("Expressão aceita.");
		return true;
    }
	alert("Expressão não é aceita.");
	return false;
}

function mostra(retorno) {
	var contador_erros;
    retorno = retorno.split('',1);
    if ('"' in retorno) {
        retorno = retorno.replace('"', '');
        contador_erros += 1;
    }
	else if (retorno in dict) {
        contador_erros += 1;
	}
	else if (not retorno in dict) {
        contador_erros += 1;
	}
}

function limpa() {
    document.body.innerHTML = "";
}

function inteiro() {
	var contador_erros;
	var declara_inteiro = prompt("Informe uma operação, como no seguinte exemplo: int x,y")
	if declara_inteiro instanceof String {
		declara_inteiro = declara_inteiro[1].replace(' ', '');
	}
	if (declara_inteiro == ",") {
		declara_inteiro = declara_inteiro.split(',');
	}
	if (',' in declara_inteiro) {
		declara_inteiro = declara_inteiro.split(',');
	}
	if (declara_inteiro != "=") {
		contador_erros += 1;
		return false;
	}
	if else (!isNaN(declara_inteiro[1])) {
		contador_erros += 1;
	}
    else {
        if (declara_inteiro != '=') {
            contador_erros += 1;
		}
        if (!isNaN(declara_inteiro[1])) {
            controle_erros += 1;
		}
	}
}

function operacao() {
	var contador_erros;
	var operacao = prompt("Informe uma operação, como no seguinte exemplo: operação(x,y,+)")
	if ('+' in operacao) {
		operacao = opcao.split('+');
		operacao = var[operacao[0]] + var[operacao[1]]
    if else ('-' in operacao) {
        operacao = opcao.split('-')
        operacao = var[operacao[0]] - var[operacao[1]];
	}else{
		alert(
}
