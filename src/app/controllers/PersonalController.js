const obj = require('../models/obj')

class PersonalController {
      index(_req, res, next){
            obj.find({}).lean()
                  .then(objs => res.render('list',{objs}))
                  .catch(next)
      }


}
module.exports = new PersonalController