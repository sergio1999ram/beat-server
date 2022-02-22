const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.ikjjp.mongodb.net/beat-assessment?retryWrites=true&w=majority')
        console.log('Database connected successfully!');
    } catch (error) {
        console.log(error);
    }
})();
