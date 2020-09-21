import { ApolloServer, gql } from 'apollo-server-micro';

import RestaurantAPI  from '../../backend/restaurantApi';

const typeDefs = gql`
  scalar RestaurantSlug

  type Query {
    users: [User!]!
    currentUser: User
    menuForRestaurant(slug:RestaurantSlug!): Menu
  }

  type User {
    name: String
  }

  type Menu {
    items: [MenuItem]
  }

  type MenuItem {
    id: ID!,
    name: String,
    description: String,
    price: Money
  }

  type Money {
    dollars: Int,
    cents: Int
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Pete' }]
    },
    currentUser(parent, args, context) {
      return { name: 'Pete' }
    },
    async menuForRestaurant(parent,args,{dataSources}) {
      return dataSources.restaurantApi.getRestaurantMenu(args.slug);
    }
  },
}

function dataSources(){
  return {
    restaurantApi: new RestaurantAPI()
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers, dataSources })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
