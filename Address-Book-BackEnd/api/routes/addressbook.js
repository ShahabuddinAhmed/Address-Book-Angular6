const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const addressBookController = require('../controller/addressbook');

router.get('/',checkAuth, addressBookController.getAllAddressBook);
router.post('/create',checkAuth, addressBookController.createAddressBook);
router.get('/:userID', checkAuth, addressBookController.getOneAddressBook);
router.get('/getone/:userID', checkAuth, addressBookController.updateOneAddressBook);
router.patch('/update/:userID', checkAuth, addressBookController.updateAddressBook);
router.delete('/delete/:userID', checkAuth, addressBookController.deteleteAddressBook);

module.exports = router;