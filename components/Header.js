import { useCurrentUser } from '../lib/apiClient';


export default function Header(){
  const { loading, error, currentUser } = useCurrentUser();

  if (loading || error ){
    return <header>welcome!</header>
  }
  return <header>welcome, {currentUser.name}</header>
}
