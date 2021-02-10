const { body, validationResult } = require('express-validator')

module.exports = function(application) {

    application.get('/form_add_noticia', function(req, res) {
        application.app.controllers.admin.form_add_noticia(application, req, res);
    });


    application.post(
        '/noticias/salvar', 
        body('titulo', 'Título é obrigatório').notEmpty(),
        body('autor', 'Autor é obrigatório').notEmpty(),
        body('resumo', 'Resumo deve conter entre 10 e 100 caracteres').isLength({min: 10, max: 100}),
        body('data_noticia', 'Data  é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD'}),
        body('noticia', 'Noticia é obrigatório').notEmpty(), (req, res) => {   
            application.app.controllers.admin.noticias_salvar(application, validationResult, req, res);
        }
    );
};