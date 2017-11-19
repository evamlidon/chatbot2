console.log('CARGADO');


function handleSubmit() {
  var element = document.getElementById('pc-input');
  var value = element.value;
  var pattern = /hola/;
  var dialogTextElement = document.getElementById('dialog-text');

  var dialog = [{
  	
  }]

	if (pattern.test(value)) {
	  dialogTextElement.innerText = 'Hola a ti';

	} else {
	  dialogTextElement.innerText = 'no se';
	}

  return false;
}

//COMENTARIO PETARDO