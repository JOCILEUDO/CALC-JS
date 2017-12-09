$(document).ready(function() {
	var valor ="";
	
	function alter_view(value) {
		now = $("#view").val();
		$("#view").val(now+value);	
	}
	$(".btn-fun").click(function(valor) {
		valor = $(this).attr('val');
		alter_view(valor);
	});

	$(".btn-custom").click(function(valor) {
		operation = parseInt($(this).attr('val'));
		switch(operation){
			case 1:
				$("#view").val("");
			break;
			case 2:
				result = $("#view").val();
				result = parseFloat(eval(result));
					$("#view").val(Math.abs(result));	
			break;
			case 3:
				var tamanho = $('#view').val().length-1;
				var texto = $("#view").val();
				var texto_menos_um = texto.substring(0,tamanho);
				$("#view").val(texto_menos_um);
			break;
			case 4:
				result = $("#view").val();
				if (result!="") {
					result = parseFloat(eval(result));
					$("#view").val(result);	
				}
				
			break;
		}
	});
});