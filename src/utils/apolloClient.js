import { ApolloLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "apollo-boost";

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.1.139:4000/graphql',
        cache: new InMemoryCache(),
        link: new ApolloLink()
    })
}

export default createApolloClient