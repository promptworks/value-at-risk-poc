import React from 'react'
import { render } from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import App from './components/app'

const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={ client }>
    <App/>
  </ApolloProvider>,
  document.getElementById("app")
)
