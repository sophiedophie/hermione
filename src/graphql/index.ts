import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const queryBooks = client.query({
  query: gql`
    {
      getBooks {
        title
        author
      }
    }
  `
}).then(result => console.log(result));

export default client;
