/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

console.log("API_URL: ", process.env.API_URL);
const config = {
  link: new HttpLink({
    // uri: process.env.API_URL || "http://localhost:1337/graphql" // Server URL (must be absolute)
    uri: "https://jsnspr-fd-be.herokuapp.com/graphql" // Server URL (must be absolute)
  })
};

console.log("config: ", config);
console.log("config.link: ", config.link);
console.log("config.link.uri: ", config.link.uri);
export default withData(config);