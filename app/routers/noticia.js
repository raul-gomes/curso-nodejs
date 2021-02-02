module.exports = function(app){
    
    app.get('/noticia', function(req, res) {

        var conection = app.config.dbConnection()
        var noticiaModel = app.app.models.noticiasModel

        noticiaModel.getNoticia(conection, function(erro, result){
            res.render('noticias/noticia', {noticia: result});

        })
        
    });
    
};