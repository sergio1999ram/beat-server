const Router = require('express').Router;

const router = Router();

router.get('/', async (req, res) => {
    res.json({ method: 'GET', endpoint: '/locations/', message: 'Get all the locations' });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    res.json({ method: 'GET', endpoint: `/locations/${id}`, message: 'Get a location by the id' });
})

router.post('/', async (req, res) => {
    const { name, coords } = req.body;

    res.json({ method: 'POST', endpoint: '/locations/', body: { name, coords }, message: 'Post a location to the database' });
});

module.exports = router;