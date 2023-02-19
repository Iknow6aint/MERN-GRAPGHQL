const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express()


connectDB();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'developement'
}))


app.listen(PORT, () => {

    console.log(`listening on ${PORT}`);
})