const siteRouter = require('./site')
const newRouter = require('./news')
const objRouter = require('./obj')
const objPersonal = require('./personal')


function route(app) {
      app.use('/news', newRouter)
      app.use('/obj', objRouter)
      app.use('/personal', objPersonal)
      app.use('/', siteRouter)

}
module.exports = route;