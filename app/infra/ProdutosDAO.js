function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from usuarios', callback)
};

modules.exports = function () {
    return ProdutosDAO;
};