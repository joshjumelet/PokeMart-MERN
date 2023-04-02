const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.header.token
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (error, user) => {
      if (error) res.status(403).json('Token invalid!')
      req.user = user
      next()
    })
  } else {
    return res.status(401).json('Unauthorized access!')
  }
}

module.exports = { verifyToken }
