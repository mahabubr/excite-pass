const typeDefs = `#graphql
  type Category {
    _id: ID!
    title: String
    img: String
  }

  type Query {
    Category: [Category]
  }
`;

export default typeDefs;
