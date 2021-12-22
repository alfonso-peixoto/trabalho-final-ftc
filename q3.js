//Trabalho Final - Atividade 02
//Disciplina: Fundamentos Teóricos da Computação
//Docente: André Luiz Nasserala
//Discente: Eduardo Pinheiro Júnior
//Resolução da primeira questão do trabalho final

var dict = {};
var linhas = 0;
var contador_de_erros = 0;
controle_erros = 0;

/*
function adiciona_erro(str) {
	contador_de_erros;
	contador_de_erros += 1;
	controle_erros.append(str);
}
*/

alert('-h [--hel] - lista as funcoes da ;\n' +
        '-m [--mostra] - printa uma mensagem qualquer. Ex: -m "Hello Word" or --mostra "Hello Word";\n' +
        '-l [--limpa] - limpar a saída do console \n' + 
        '-i [--int] - declara variáveis inteiras \n' + 
        '\tEx.: -i x=10, y=20 or --int x=10\n' + 
        '-op [--operacao] - executa operacao atitimática simples entre dois números\n' +
        '\tEx.-op 1-2 or -op 1 + 2\n' +
        '-a [--aceitacao] - verifica aceitação da expressaão\n' +
        '\tEx.-a x-y or -a x + y\n' +
        '-x [--exit] - sair do console\n'
		)

function verifica_expressao(exp){
	var exp = prompt("Informe uma expressão: ")
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
    retorno = retorno.split('',1);
    if ('"' in retorno) {
        retorno = retorno.replace('"', '');
        //print('<%d>..: %s ' % (add_linhas(), retorno));
        contador_de_erros += 1;
		//add_erro('[Erro linha %d]' % linha);
    }
	else if (retorno in dict) {
        //print('<%d>..: %s' % (add_linhas(), dict[retorno]));
        contador_de_erros += 1;
		//add_erro('[Erro linha %d]' % linha);
	}
	else if (not retorno in dict) {
        //print('<%d>..:[Erro na linha %d] %s não definido' % (add_linhas(), linha, retorno));
        contador_de_erros += 1;
		//add_erro('[Erro linha %d]' % linha);
	}
}

function limpa() {
    document.body.innerHTML = "";
}

function inteiro(opcao) {
	opcao = opcao.split('');
	if opcao instanceof String {
		opcao = opcao[1].replace(' ', '');
	}
	if (opcao == ",") {
		opcao = opcao.split(',');
	}
	if (',' in opcao) {
		opcao = opcao.split(',');
	}
	for (var j = 0; j <= opcao; j++) {
		if (opcao != "=") {
			//print('<%d>..:[Erro na linha %d] Valor inteiro não informado' % (add_linhas(), linha))
            //add_erro('[Erro linha %d]' % linha)
            contador_de_erros += 1;
			return false;
        }
		temp = j.split('=');
		if (!isNaN(temp[1])) {
			//print('<%d>..:[Erro na linha %d] Valor inteiro não informado' % (add_linhas(), linha))
            //add_erro('[Erro linha %d]' % linha)
            contador_de_erros += 1;
			return false;
		}
		//armazena_memoria(temp[0], int(temp[1]));
        return true;
    else {
        if (opcao != '=') {
            // print('<%d>..:[Erro na linha %d] O operador "=" não foi informado' % (add_linhas(), linha))
            // add_erro('[Erro linha %d]' % linha)
            contador_de_erros += 1;
			return false;
		}
        temp = opcao.split('=');
        if (!isNaN(temp[1])) {
            //print('<%d>..:[Erro na linha %d] Valor inteiro não informado' % (add_linhas(), linha))
            //add_erro('[Erro linha %d]' % linha)
            controle_erros += 1;
			return false;
		}
        //armazena_memoria(temp[0], int(temp[1]));
        return true;
		}
	}
}

function operacao() {
	opcao = opcao.split('', 1);
	if ('+' in opcao) {
		operacao = opcao.split('+');
		if (!(operacao[0] in dict))
			//print('<%d>..:[Erro na linha %d] Valor não encontrado' % (add_linhas(), linha))
            //add_erro('[Erro linha %d]' % linha)
            
			return false;
		}
		//operacao = var[operacao[0]] + var[operacao[1]]
        //print('<%d>..: %s' % (add_linhas() ,operacao))
        return true;
    if '-' in opcao {
        operacao = opcao.split('-')
        if not operacao[0] in var or not operacao[1] in var {
            print('<%d>..:[Erro na linha %d] Valor não encontrado' % (add_linhas(), linha))
            add_erro('[Erro linha %d]' % linha);
            return false;
		}
        operacao = var[operacao[0]] - var[operacao[1]];
        //print('<%d>..: %s' % (add_linhas() ,operacao))
        return true;
	}
}

opcao = '';
saida = 1;

function q3() {
	alert('-h ou --help para mais informações');
	while(saida!=0) {
		opcao = input('<%d>..: '%add_linhas());

		if '-h' in opcao or '--help' in opcao {
			help();
		}
		
		else if '-m' in opcao or '--mostra' in opcao {
			mostra(opcao);
		}
		
		else if '-l' in opcao or '--limpa' in opcao {
			limpa();
		}

		else if '-i' in opcao or  '--int' in opcao {
			inteiro(opcao);
		}

		else if '-op' in opcao or '--operacao' in opcao {
			operacao(opcao);
		}
			
		else if '-x' in opcao or '--exit' in opcao {
			saida=0;
		}
		
		else if '-a' in opcao or '--aceitacao' in opcao {
			verifica_expressao(opcao);
		}
		
		else {
			//print('<%d>..: [Erro na linha %d] Escolha uma opção válida.' % (add_linhas(),linhas))
			//add_erro('[Erro linha %d]' % linhas)
			contador_de_erros += 1;
			help();
	}
}

/*
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

*/