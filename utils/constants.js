module.exports.earthRadiusKm = 6379;

module.exports.pricePerKm = 0.479;

module.exports.dayOfWeekMultiplier = (day) => {
    switch (day) {
        case 0: return 1.5;
        case 2:
        case 4:
            return 0.95;
        case 1: return 1.0;
        case 3: return 0.9;
        case 5: return 1.2;
        case 6: return 1.3;
    }
}

module.exports.timeOfDayMultiplier = (hour) => {
    if (hour >= 0 && hour < 10) return 1.2;
    else if (hour >= 10 && hour < 16) return 1.0;
    else if (hour >= 16 && hour < 20) return 1.5;
    else if (hour >= 20) return 1.3;
}