import { useQuery, gql } from '@apollo/client';

const GetUsername = gql`
  query GetUsername {
    users { name }
  }
`;

export default function Header(){
  const { loading, error, data } = useQuery(GetUsername);

  if (loading || error ){
    return <header>welcome!</header>
  }
  return <header>welcome, {data.users[0].name}</header>
}
