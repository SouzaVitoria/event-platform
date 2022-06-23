import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qxh3n20a0v01wg1ndx1pmi/master",
  cache: new InMemoryCache()
})