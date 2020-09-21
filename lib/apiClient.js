import { useQuery, gql } from '@apollo/client';

export function useCurrentUser(){
  const { loading, error, data } = useQuery(CURRENT_USER);
  if(loading||error){
    return {loading,error};
  }
  const currentUser = data.currentUser;
  return {currentUser};
}

export function useMenuForRestaurant(restaurantSlug){
  const { loading, error, data } = useQuery(MENU_FOR_RESTAURANT,{variables:{slug:restaurantSlug}});
  if(loading||error){
    return {loading,error};
  }
  const menu = data.menuForRestaurant;
  return {menu};
}

const CURRENT_USER = gql`
  query {
    currentUser { name }
  }
`;

const MENU_FOR_RESTAURANT = gql`
query ($slug: RestaurantSlug!) {
  menuForRestaurant(slug:$slug) {
    items {
      id
      name
      description
      price { dollars cents }
    }
  }
}
`;
