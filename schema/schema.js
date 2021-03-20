const {gql}=require('apollo-server');

const typeDef=gql `

 type messageType{
     message: String
     id:ID
 }

 type Query{
     getMessage:messageType
     getName:String
     getAllMessages:[messageType]
 }

 input messageInput{
     message:String
 }
 type Mutation{
     createMessage(messageIS:messageInput):messageType
 }

`
module.exports = typeDef