const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const { protect, authCustomer } = require('../middleware/authMiddleware')

router.route('/').get(customerController.getAllCustomers);
router.route('/getOne/:id').get(protect, authCustomer, customerController.getOneCustomer);
router.route('/create').post(protect, authCustomer, customerController.createNewCustomer);
router.route('/update').patch(protect, authCustomer, customerController.updateCustomer);
router.route('/delete').delete(protect, authCustomer, customerController.deleteCustomer);

module.exports = router;