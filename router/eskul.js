const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()

const usercontroller = require('../router/atribut/ekstra')



  router.get('/nyoba', usercontroller.index)

  router.get('/nyobasss/:id', usercontroller.show)

    router.post('/nyoba', usercontroller.store)
    
    router.put('/nyoba/:id', usercontroller.update)
  
    router.delete('/nyoba/:id', usercontroller.delete)
    module.exports = router