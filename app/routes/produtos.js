module.exports = function (app) {
    app.get('/produtos', function (req, resp) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function (erros, resultado) {
            resp.render('produtos/lista', {lista : resultado});
        });
        connection.end();
    })
};
