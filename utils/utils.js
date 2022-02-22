const { earthRadiusKm } = require('./constants');

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

module.exports.calculateDistance = (coords1, coords2) => {
    const dLat = degreesToRadians(coords2.lat - coords1.lat);
    const dLng = degreesToRadians(coords2.lng - coords1.lng);

    const lat1 = degreesToRadians(coords1.lat);
    const lat2 = degreesToRadians(coords2.lat);

    const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLng / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
}