const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => res.send('GET /'));
router.post('/', (req, res) => res.send('POST /'));
module.exports = router;