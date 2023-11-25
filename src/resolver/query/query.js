import categoryQuery from "../../view/categoryServices.js";
import eventQuery from "../../view/eventServices.js";

const query = {
  ...categoryQuery,
  ...eventQuery,
};

export default query;
