import { Events } from "../model/eventSchema.js";

const eventQuery = {
  Events: async (parent, args, context) => {
    const result = await Events.find({});
    return result;
  },
};

export default eventQuery;
