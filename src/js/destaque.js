var destaque = {
    init: function(){
        this.random();
    },

    random: function(){
        $.getJSON('/dist/portifolio.json', function(e){
            var position = Math.floor(Math.random() * e.itens.length);
            console.log(position);
            console.log(e.itens[position]);

            var html = '<img src="/dist/images/portifolio/' + e.itens[position].imagem + '.jpg" class="img-responsive">';
                html += '<div class="container">'
                html += '<h3><span>' + e.itens[position].cliente + '</span></h3>';
                if(e.itens[position].descricao) {
                    html += '<p><span>' + e.itens[position].descricao + '</span></p>';
                }
                html += '<a href="' + e.itens[position].link + '" onclick="' + e.itens[position].tracking + '" title="' + e.itens[position].cliente + '">Acesse</a>';
                html += '</div>';

            $('.destaque').html(html);
        });
    }
};

destaque.init();