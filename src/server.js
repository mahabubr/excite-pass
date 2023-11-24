import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import config from "./config/index.js";
import mongoose from "mongoose";
import typeDefs from "./schema.js";
import resolvers from "./resolver/index.js";

async function bootstrap() {
  try {
    mongoose.connect(config.database.url);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: config.port },
    });

    console.log("🔥  Database Connected");
    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.log("Database Connection Failed");
  }
}

bootstrap();
