const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URL).then(() => { console.log('connection to db sucessful') }).catch((error) => console.log(`${error} did not connect`));

}

module.exports = connectDB;