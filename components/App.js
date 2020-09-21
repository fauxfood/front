import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import Header from './Header';
import Menu from './Menu';

export default function App({apollo}) {
  return (
      <ApolloProvider client={apollo}>
        <Header/>
        <Menu/>
      </ApolloProvider>
  );
}
