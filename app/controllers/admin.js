module.exports.form_add_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, validationResult, req, res) {
    
    var noticia = req.body;
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
        res.render('admin/form_add_noticia', {validacao: errors.errors, noticia : noticia });
        return;
    } else {
        var connection = application.config.dbConnection()
        var noticiasModel = new application.app.models.NoticiasDAO(connection)

        noticiasModel.salvarNoticia(noticia, function(error, result) {
            res.redirect("/noticias")
        });
    };
}