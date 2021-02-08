module.exports = function(application){
    
    application.get('/noticia', function(req, res) {

        var conection = application.config.dbConnection()
        var noticiaModel = new application.app.models.NoticiasDAO(conection)

        noticiaModel.getNoticia(function(erro, result){
            res.render('noticias/noticia', {noticia: result});

        })
        
    });
    
};