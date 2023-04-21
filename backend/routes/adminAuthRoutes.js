const express = require('express')
const router = express.Router()
const {
  loginUser,
  getMe,
  getAll,
} = require('../controllers/adminaAuthController')
const { protect } = require('../middleware/authMiddleware')

router.get('/me', protect, getMe)
router.post('/login', loginUser)
router.get('/products', protect, getAll)

module.exports = router
