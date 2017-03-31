var express = require('express');
var expressLoad = require('express-load');

module.exports = function() {
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    expressLoad('routes', {cwd : 'app'})
        .then('infra')
        .into(app);

    return app;
};
