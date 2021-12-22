//Trabalho Final - Atividade 02
//Disciplina: Fundamentos Teóricos da Computação
//Docente: André Luiz Nasserala
//Discente: Eduardo Pinheiro Júnior
//Resolução da primeira questão do trabalho final

function q01(){
	var E = ['ap', 'fp'];
	var alfabeto = ['t', '(', ')', '+', '-'];
	var lambda = [];
	var i = E[0];
	var F = E[1];
	var estado_atual = i;
	var expr = prompt("Informe uma expressão: ");
	//alert(expr);
	expr = expr.split('');
	//alert(expr);
	//alert("Olá");
	//alert(expr.length);

	for (var j = 0; j<=expr.length; j++){
		if(estado_atual === i && expr[j] === "("){
					lambda[0] = 'x';
					//alert("Entrada de ( e valor de lambda: " + lambda[j]);
		}
		if(estado_atual === F && expr[j] === ")"){
					estado_atual = E[1];
					lambda.pop();
					//alert("Entrada de )");
		}

		if(estado_atual === F && expr[j] === "+" || expr[j] == "-"){
					estado_atual = E[0];
					//alert("Entrada de operacao");
		}

		if(estado_atual === i && !isNaN(expr[j])){
					estado_atual = E[1];
					//alert("Entrada de numero");
		}
	}
	
	//alert(expr.length);
	//alert(j);
	//alert(F);
	//alert(estado_atual);
	//alert(lambda);
	
	if(estado_atual == F && lambda){
				console.log("Expressão aceita");
				alert("Expressão aceita");
	}else{
				console.log("Expressão não aceita");
				alert("Expressão não aceita");
	}
	
}
//Resolução da segunda questão do trabalho final

function q02(){
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
				//alert("Recebe 0 e lambda: " + lambda[j]);
				//alert(estado_atual);
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
			
			//alert("Recebe 0 de novo e lambda: " + lambda[j]);
			//alert(estado_atual);
			
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
	
	//alert(estado_atual);
	
	if(estado_atual == F && lambda){
			console.log("A palavra "+expr+" é reconhecida!!");
		}else{
			console.log("A palavra "+expr+" não é reconhecida!");
	}
}