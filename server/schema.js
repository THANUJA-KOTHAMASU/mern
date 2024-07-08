const {gql} =require('apollo-server-express');
const typeDefs = gql `
type User{
    _id:ID!,
    name:String!,
    email:String!,
    password:String!
}
input createUserInput{
    _id:ID!,
    name:String!,
    email:String!,
    password:String!
}
type Query{
    getUsers(_id:ID!):[User]
}
type Mutation{
    createUser (input:createUserInput!):User
    changePass(_id:ID!,password:String!):User
}
`;
module.exports = typeDefs;//export out