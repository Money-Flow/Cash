import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, ApolloLink, concat, HttpLink } from '@apollo/client';

import "./index.css";

const EXPENSE_REQUEST = gql`
  query {
    expense( id: 1){
      data {
        attributes {
          title
          amount
        }
      }
    }
  }
`

const authMiddleware = new ApolloLink((operation, forward) => {
const token = process.env.REACT_APP_API_TOKEN

  operation.setContext({
    headers: {
      "Authorization": token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});


const client = new ApolloClient({
  link: concat(authMiddleware, new HttpLink({ uri: process.env.REACT_APP_API})),
  cache: new InMemoryCache(),
});

const App: FC = () => {
  const { loading, error, data } = useQuery(EXPENSE_REQUEST);


  if(loading){
    return <span>loading</span>
  }

  if(error){
    return <h1>Error, Нюхай бебру</h1>
  }

  return  <h1>Expense: {data.expense.data?.attributes.title} - {data.expense.data.attributes.amount}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>
)
