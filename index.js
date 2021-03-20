 
 let {ApolloServer} = require("apollo-server");

 let typeDefs= require('./schema/schema')

 let resolvers = require('./resolvers')

 let my_apolloserver = new ApolloServer({typeDefs,resolvers})

  my_apolloserver.listen().then(({url})=>{
      console.log(`server is running on the port ${url }`)
  })