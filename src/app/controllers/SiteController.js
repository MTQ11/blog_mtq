const obj = require('../models/obj')

class SiteController {
      index(_req, res, next){
            obj.find({}).lean()
                  .then(objs => res.render('home',{objs}))
                  .catch(next)
      }

      search(_req, res){
            res.render('search')
      }
}
module.exports = new SiteController