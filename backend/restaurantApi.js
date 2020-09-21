import { RESTDataSource } from 'apollo-datasource-rest';

export default class RestaurantAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  async getRestaurantMenu(slug) {
    const data = await this.get(`restaurants/${slug}/menu`);
    console.log('getRestaurantMenu: ',JSON.stringify(data,2,null));
    
    const menu = {
      items: data.menuItems.map(transformMenuItem)
    };

    return menu;
  }
}


function transformMenuItem({id,name,description,price}){
  const dollars = Math.floor(price);
  const cents = Math.round(price*100%100);

  return {
    id,
    name,
    description,
    price: {dollars,cents}
  };
}
