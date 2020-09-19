// import useSWR from 'swr'
import {ApolloClient,InMemoryCache} from '@apollo/client'

import App from '../components/App';

const apollo = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
});

// const fetcher = (query) =>
//   fetch('/api/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((res) => res.json())
//     .then((json) => json.data)


export default function Page() {
  return <App apollo={apollo}/>;
  // const { data, error } = useSWR('{ users { name } }', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  // const { users } = data

  // return (
  //   <div>
  //     {users.map((user, i) => (
  //       <div key={i}>{user.name}</div>
  //     ))}
  //   </div>
  // )
}
