$(document).ready(function(){
	// efeito fade para as imagens
	$('img.gray').hover(function() {
		$(this).stop().animate({'opacity': '0'}, 'slow');
	}, function() {
		$(this).stop().animate({'opacity': '1'}, 'slow');
	});

	// ações do menu
	$('.nav').find('li').on('click', function(){
		var url = $(this).find('a');

		$('.nav').find('li').removeClass('active');
		$(this).addClass('active');
		$('html, body').animate({
        	scrollTop: $( url.attr('href') ).offset().top
    	}, 500);
		return false;
	});

	// ação de algum link interno
	$('.link').on('click', function(){
		$('html, body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
		return false;
	});

	// efeito scrolltop do botão voltar ao topo
	$('.scrollTop').on('click', function(){
		$('html,body').animate({'scrollTop' : 0}, 500);
		return false;
	});
	$(window).scroll(function(){
		if($(this).scrollTop() >= 395) {
			$('.scrollTop').fadeIn();
		}else{
			$('.scrollTop').fadeOut();
		}
	});

	// monta e mostra o portifolio no modo carrosel
	$.getJSON('js/portifolio.json', function(i){
		var json = [],
			l = 0;
		$.each(i.itens, function(e, item){
			var html = '';
			if(item.ativo == 1)
				if(l == 0)
					html += '<div class="portifolio item active">';
				else
					html += '<div class="portifolio item">';
				html += '<h4><span class="glyphicon glyphicon-ok"></span> '+item.cliente+'</h4>';
				if(item.link)
					if(item.tracking)
						html += '<a href="'+item.link+'" onclick="'+item.tracking+'" target="_blank"><span class="glyphicon glyphicon-link"></span> Acesse agora</a>';
					else
						html += '<a href="'+item.link+'" target="_blank"><span class="glyphicon glyphicon-link"></span> Acesse agora</a>';
				html += '<img src="img/portifolio/'+item.imagem+'.jpg" />';
				html += '</div>';
				json.push(html);
			l++;
		});
		$('.itens').html(json);
	});
	$('#portifa').carousel();
});