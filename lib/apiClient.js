import { useQuery, gql } from '@apollo/client';

export function useUsername(){
  const { loading, error, data } = useQuery(GetUsername);
  if(loading||error){
    return {loading,error};
  }
  const userName = data.users[0].name;
  return {userName};
}

const GetUsername = gql`
  query GetUsername {
    users { name }
  }
`;
