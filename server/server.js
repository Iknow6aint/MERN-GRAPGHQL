const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'developement'
}))


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})