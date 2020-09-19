import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import Header from './Header';

export default function App({apollo}) {
  return (
      <ApolloProvider client={apollo}>
        <Header/>
      </ApolloProvider>
  );
}
