const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.ikjjp.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
        console.log('Database connected successfully!');
    } catch (error) {
        console.log(error);
    }
})();
