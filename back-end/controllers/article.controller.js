const article = require('../models/articles');
const articleController = {};

articleController.getArticles = async (req, res) => {
    const articles = await article.find();
    res.json(articles);
}
articleController.createArticle = async (req, res) => { 
    //console.log(req.body);
    const art = new article(req.body);
    //console.log(art);
    await art.save(); 
    //res.json('Datos recibidos');
    res.json({
        'status': 'Articulo guardado'
    });
};
articleController.getArticle=async (req, res) => {
   /* console.log(req.params);
    res.json('Recibido');*/
    const art = await article.findById(req.params.id);
    res.json(art);
};

articleController.editArticle= async (req, res) => {
    const {id} = req.params;
    const articles ={
        name: req.body.name,
        description: req.body.description,
        department: req.body.department,
        stock: req.body.stock,
        up: req.body.up

    };
  await  article.findByIdAndUpdate(id, {$set: articles},{new: true});
  //  art.findByIdAndUpdate(id, {$set: article},{new: true});
  //  article.findByIdAndUpdate(id, {$set: article},{new: true});
    res.json({status: 'Articulo Actualizado'});
};


articleController.deleteArticle =async (req, res) =>{
 await article.findByIdAndRemove(req.params.id);
 res.json({status: 'Articulo Eliminado'});
};
module.exports = articleController;