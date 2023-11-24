const typeDefs = `#graphql
  type Category {
    title: String
  }

  type Query {
    Category: [Category]
  }
`;

export default typeDefs;
