import jwt from 'jsonwebtoken'

const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: 'error', message: 'no token' })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded // Attach decoded user data to the request object
    next()
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', message: 'token invalid' }) // Return error response
  }
}

export { verifyUser }
