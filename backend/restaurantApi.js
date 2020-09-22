import { RESTDataSource } from 'apollo-datasource-rest';

const RESTAURAUNT_SERVICE_BASE_URL = process.env.RESTAURAUNT_SERVICE_BASE_URL;

export default class RestaurantAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = RESTAURAUNT_SERVICE_BASE_URL;
  }

  async getRestaurantMenu(slug) {
    const data = await this.get(`restaurants/${slug}/menu`);
    
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
