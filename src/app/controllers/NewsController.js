class NewsController {
      index(_req, res){
            res.render('news')
      }

      show(_req, res){
            res.send('detail')
      }
}
module.exports = new NewsController