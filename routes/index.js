const express = require('express');
const router = express.Router();


// Welcome Page
router.get('/', async (req, res) => {
    let currentUser = null
    res.render('landing', { title: 'JustUs' })
});

router.get('/about', async (req, res) => {
    res.render('about', { title: 'About' })
});

router.get('/contact', async (req, res) => {
    res.render('contact', { title: 'Contact' })
});

router.get('/bios', async (req, res) => {
    res.render('bios', { title: 'Bios' })
});

router.get('/services', async (req, res) => {
    res.render('services', { title: 'Services' })
});

router.get('/partners', async (req, res) => {
    res.render('partners', { title: 'Partners' })
});








module.exports = router;