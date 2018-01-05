var portifolio = {
	init: function () {
		this.list();
	},

	list: function () {
		var json = [],
			pos = 0;
		$.getJSON('/dist/portifolio.json', function (e) {
			$.each(e.itens, function (element, item) {
				var html = '';
				if (item.ativo == true)
				{
                    html += '<div class="col-md-3 item">';
                    html += '<img src="/dist/images/portifolio/' + item.imagem + '.jpg" class="img-responsive">';
                    html += '</div>';
					/* image = '/dist/images/portifolio/' + item.imagem + '.jpg';
					html += '<div class="item' + (pos == 0 ? " active" : "") + '" style="background-image: url(' + image + ')">' + '<div class="container">' + '<div class="carousel-caption">' + "<h4>" + item.cliente + "</h4>";
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
							'</div>';*/
					
					json.push(html); 
				}
				pos++;
			});
			$('#portifolio').html(json);
		});
	}
};

portifolio.init();