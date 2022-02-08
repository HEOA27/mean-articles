//const route = require('color-convert/route');
const express= require('express');
const router = express.Router();

const article = require('../controllers/article.controller');

router.get('/', article.getArticles);
router.post('/', article.createArticle);
router.get('/:id', article.getArticle);
router.put('/:id', article.editArticle);
router.delete('/:id', article.deleteArticle);

module.exports = router;