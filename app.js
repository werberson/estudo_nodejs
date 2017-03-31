var app = require('./config/express.config')();
var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(3000, function () {
    console.log('Servidor rodando')
});