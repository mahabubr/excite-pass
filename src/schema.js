const typeDefs = `#graphql
  type Category {
    _id: ID!
    title: String
    img: String
  }

  type Events {
    _id: ID!
    image: String
    name: String
    time: String
    time_from: String
    location: String
    price: Float
    seat_no: String
    hall_no: Int
    description: String
    category: String
  }

  type Query {
    Category: [Category]
    Events: [Events]
  }
`;

export default typeDefs;
