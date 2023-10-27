class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug(path sau)
    show(req, res){
        res.send('New Details !!!');
    }

}

module.exports = new NewsController;