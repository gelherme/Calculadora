//let tela = document.getElementById('tela');
//let botao =document.getElementsByClassName('botao-single');


function insert(num){
	var numero = document.getElementById('tela').innerHTML;
	document.getElementById('tela').innerHTML = numero + num;
}

function apagar(){
	document.getElementById('tela').innerHTML = "";
}

function back(){
	var result = document.getElementById('tela').innerHTML;
	document.getElementById('tela').innerHTML = result.substring(0, result.length -1);
}

function calcular(){
	var result = document.getElementById('tela').innerHTML;
	if(result){
		document.getElementById('tela').innerHTML = eval(result);
	}else{
		document.getElementById('tela').innerHTML = 'error';
	}
}