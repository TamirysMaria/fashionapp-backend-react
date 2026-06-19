const express = require('express');
const router = express.Router();
const fashionController = require('../controllers/fashionController');

router.get('/', fashionController.listEntries);
router.get('/:id', fashionController.getEntryById);
router.post('/', fashionController.createEntry);
router.put('/:id', fashionController.updateEntry);
router.delete('/:id', fashionController.deleteEntry);

module.exports = router;
