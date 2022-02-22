const Router = require('express').Router;

const Location = require('../models/Location');

const ObjectId = require('mongoose').Types.ObjectId;

const router = Router();

router.get('/', async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json({ locations });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const location = await Location.findById(ObjectId(id));
        res.status(200).json({ location });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
})

router.post('/', async (req, res) => {
    const { name, coords } = req.body;
    try {
        const location = await Location.create({ name, coords });
        console.log(location);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
});

module.exports = router;