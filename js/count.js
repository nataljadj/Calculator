	function output(num){
		var field = document.getElementById('field');
		field.value += num;
	}
	function actionu(act){
		var field = document.getElementById('field');
		field.value += act;
	}
	function dot(){
		var field = document.getElementById('field');
		field.value += ".";
	}
	function Ce(){
		var field = document.getElementById('field');
		field.value = "";
	}

	function evalu () {
		var fieldVal = document.getElementById('field').value;
		alert(fieldVal);
		if(document.getElementById('field').value == undefined){
			alert("sfawf");
		}
		else{
			var output = eval(fieldVal);  
			document.getElementById('field').value = output;
		}
	} 