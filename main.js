const ovly = { };
ovly.conversor = {
	versao: "1", 
	chamarAPI: function(){
		console.log("Chamado API");
		const endpoint = "api/latest";
		var oParametros = { 
			base: $("#moeda_origem").val()
		};
		$.get(endpoint, oParametros, this.callback );
	},
	callback: function(resultado){
		// console.log(resultado);
		var sMoedaDestino = $("#moeda_destino").val();
		var fvalor = resultado.rates[sMoedaDestino];
		
		$("#valor_destino2").text(fvalor);
		$("#moeda_destino2").text(sMoedaDestino);
	}
}
