var main = {
	init: function () {
		this.portifolio();
	},

	portifolio: function () {
		var json = [],
			pos = 0;
		$.getJSON('assets/js/portifolio.json', function (e) {
			$.each(e.itens, function (element, item) {
				var html = '';
				if (item.ativo == true)
				{
					html += '<div class="item' + (pos == 0 ? ' active' : '') + '">' +
								'<img src="assets/img/portifolio/' + item.imagem + '.jpg" alt="' + item.cliente + '" style="width:100%">' +
								'<div class="container">' +
									'<div class="carousel-caption">' +
										'<h4>' + item.cliente + '</h4>';
										if (item.link)
										{
											if (item.tracking)
											{
												html += '<p><a class="btn btn-lg btn-primary" href="' + item.link + '" onclick="'+item.tracking+'" role="button" target="_blank">Acessar</a></p>';
											} else {
												html += '<p><a class="btn btn-lg btn-primary" href="' + item.link + '" role="button" target="_blank">Acessar</a></p>';
											}
										}
									'</div>' +
								'</div>' +
							'</div>';
					
					json.push(html);
				}
				pos++;
			});
			$('.carousel-inner').html(json);
		});
	}
};

main.init();