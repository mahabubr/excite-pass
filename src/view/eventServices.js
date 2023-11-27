import { Events } from "../model/eventSchema.js";

const eventQuery = {
  Events: async (parent, args, context) => {
    const result = await Events.find({});
    return result;
  },
  SingleEvent: async (parent, args, context) => {
    const { id } = args;
    const result = await Events.findById(id);
    return result;
  },
  CategoryEvents: async (parent, args, context) => {
    const { id } = args;
    const result = await Events.find({ category: id });
    return result;
  },
};

export default eventQuery;
