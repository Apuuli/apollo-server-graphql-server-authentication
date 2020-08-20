const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers');
const { MONGO_URI } = require('./config');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    console.log('Mongo Db connected')
    return server.listen({ port : 5000})
}).then(res => {
    console.log(`Server running at ${res.url}`)
})
