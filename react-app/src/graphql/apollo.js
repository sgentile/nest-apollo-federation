import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

// const wsLink = new WebSocketLink({
//   url: "/ws", // process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
//   connectionParams: () => {
//     // simulate an auth token sent from the client over the WS connection
//     const token = "some-token";
//     return { ...(token && { token }) };
//   },
// });

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SUBSCRIPTIONS_API_URL,
  // NODE_ENV === "production"
  //   ? `wss://${window.location.host}/graphql`
  //   : REACT_APP_SUBSCRIPTIONS_API_URL || "",
  options: {
    reconnect: true,
    lazy: true,
    timeout: 60000,
    minTimeout: 30000,
    connectionParams() {
      // simulate an auth token sent from the client over the WS connection
      const token = "some-token";
      return {
        authorization: token ? `Bearer ${token}` : "",
        // appId: TECHSUITE_ID,
      };
    },
  },
});

const httpLink = new HttpLink({
  uri: "/api", // process.env.REACT_APP_GATEWAY_API_URL,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
