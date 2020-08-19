const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const gql = require('graphql-tag')

const Post = require('./models/post')
const User = require('./models/user')

const typeDefs = gql`
    type Post{
        id:ID!
        body:String!
        created:String!
        username:String!
    }
    type Query {
       getPosts:[Post]! 
    }
`;
const resolvers = { 
    Query: {
        async getPosts() {
            try {
                const posts= await Post.find( )
                return posts;
            }catch (err) {
                throw new Error(err);
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect('mongodb://127.0.0.1:27017/merng', { useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=> {
    console.log('Connected to database') 
    return server.listen({port:5000})
})
.then ((res) =>
console.log(`Server runing at ${res.url}`)
);