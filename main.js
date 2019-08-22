function chamarAPI(){
	console.log("Chamado API");
	const endpoint = "https://api.exchangeratesapi.io/latest";
	$.get(endpoint, callback );
	
	
}

function callback(resultado){
	console.log(resultado);
	var sMoedaDestino = $("#moeda_destino").val();
	var fvalor = resultado.rates[sMoedaDestino];
	
	$("#valor_destino2").text(fvalor);
	$("#moeda_destino2").text(sMoedaDestino);
}