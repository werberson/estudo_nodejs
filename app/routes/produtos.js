module.exports = function (app) {
    function listaProdutos(req, resp) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function (erros, resultado) {
            resp.format({
                html : function () {
                    resp.render('produtos/lista', {lista : resultado});
                },
                json : function () {
                    resp.json(resultado);
                }
            });
        });
        connection.end();
    }
    app.get('/produtos',listaProdutos);
    app.get('/produtos/form', function (req, resp) {
       resp.render('produtos/form')
    });
    app.post('/produtos/salva', function (req, resp) {
        var produto = req.body;
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function (erros) {
            console.log(erros);
           resp.redirect('/produtos');
        });
        connection.end();
    });
};
