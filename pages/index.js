import {ApolloClient,InMemoryCache} from '@apollo/client'

import App from '../components/App';

const apollo = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
});

export default function Page() {
  return <App apollo={apollo}/>;
}
