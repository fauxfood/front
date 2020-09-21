import { useMenuForRestaurant } from '../lib/apiClient';


export default function Menu(){
  const { loading, error, menu } = useMenuForRestaurant('taqdelsol');
  if (loading || error ){
    return <div>loading...</div>;
  }

  return (
      <main>{
        menu.items.map( mi => <MenuItem {...mi}/> )
      }</main>
  );
}

function MenuItem({name,description,price}){
  return (
      <ul>
      {name} (<Money {...price}/>)
      </ul>
  );
}

const formatDollars = new Intl.NumberFormat().format;
function formatCents(cents){
  return leftPad(cents,"00")
}
function leftPad(str,pad){
  str = str.toString();
  return pad.substring(0, pad.length - str.length) + str;
}

function Money({dollars,cents}){
  return (
      <span>${formatDollars(dollars)}.{formatCents(cents)}</span>
  );
}
