import { Category } from "../model/categorySchema.js";

const categoryQuery = {
  Category: async (parent, args, context) => {
    const result = await Category.find({});
    console.log(result);
    return result;
  },
};

export default categoryQuery;
