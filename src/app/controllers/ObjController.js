const obj = require('../models/obj')

class ObjController {
      show(_req, res) {
            res.send('CHI TIẾT !!!')
      }

      create(_req, res) {
            res.render('create')
      }

      store(_req, res) {
            const formdate = _req.body
            const o = new obj(formdate)
            o.save()
                  .then(() => res.redirect('/'))

      }

      edit(_req, res, next) {
            obj.findById(_req.params._id)
                  .then(objs => {
                        objs = objs ? objs.toObject() : objs
                        res.render('edit', { objs })
                  })
                  .catch(next)
      }

      update(_req, res, next) {
            obj.updateOne({_id:_req.params._id},_req.body)
                  .then(()=>{

                        res.redirect('/personal/list')
                  })
                  .catch(next)
      }

      delete(_req, res, next) {
            obj.deleteOne({_id:_req.params._id},_req.body)
                  .then(()=>{
                        res.redirect('/personal/list')
                  })
                  .catch(next)
      }


      list(_req, res) {
            res.json(_req.body)
      }
}
module.exports = new ObjController