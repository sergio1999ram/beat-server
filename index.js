const express = require('express');
const cors = require('cors');
const moment = require('moment');

const {
    pricePerKm,
    dayOfWeekMultiplier,
    timeOfDayMultiplier
} = require('./utils/constants');

const {
    calculateDistance
} = require('./utils/utils');

const locationsRoutes = require('./routes/locations.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/locations', locationsRoutes);

app.post('/api/price', (req, res) => {
    const { pickupLocation, dropoffLocation } = req.body;

    const dayOfWeek = moment().utc(true).day();
    const hourOfDay = moment().utc(true).format('H');

    const distance = calculateDistance(pickupLocation.coords, dropoffLocation.coords);
    const baseFare = distance * pricePerKm;
    const dayMultiplier = dayOfWeekMultiplier(dayOfWeek)
    const timeMultiplier = timeOfDayMultiplier(hourOfDay);

    console.log('timeMultiplier', timeMultiplier)
    const totalFare = baseFare * dayMultiplier * timeMultiplier;

    console.log('Base fare', baseFare);
    res.status(200).json({ fare: totalFare, baseFare, dayMultiplier, timeMultiplier, distance })
})
app.listen(3001, () => {
    console.log('Server listening on port 3001');
})
