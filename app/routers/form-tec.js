module.exports = function(app) {

    app.get('/form-tec', function(req, res) {
        res.render('admin/form_add_noticia')
    });

};