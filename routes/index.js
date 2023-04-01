const { Router } = require('express')
// const controllers = require('../controllers')
const router = Router()

router.get('/usertest', (req, res) => {
  res.send('user test is successful')
})

router.post('/userposttest', (req, res) => {
  const username = req.body.username
  res.send('your username is: ' + username)
})

module.exports = router
