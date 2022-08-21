const express = require('express');
const router = express.Router();


// Welcome Page
router.get('/', async (req, res) => {
    let currentUser = null
    res.render('landing', { title: 'JustUs' })
});

router.get('/about', async (req, res) => {
    res.render('about', { title: 'AboutUs' })
});

router.get('/contact', async (req, res) => {
    res.render('contact', { title: 'ContactUs' })
});








module.exports = router;