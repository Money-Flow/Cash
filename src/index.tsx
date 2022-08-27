import React from 'react'

import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'

import { client } from 'apollo'
import { App } from 'app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
)
