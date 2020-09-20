import { useUsername } from '../lib/apiClient';


export default function Header(){
  const { loading, error, userName } = useUsername();

  if (loading || error ){
    return <header>welcome!</header>
  }
  return <header>welcome, {userName}</header>
}
