import React, { FC } from 'react'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
    useQuery,
    ApolloLink,
    concat,
    HttpLink,
} from '@apollo/client'
import ReactDOM from 'react-dom/client'

import './index.css'

type ExpenseType = {
    expense: {
        data: {
            attributes: {
                title: string
                amount: number
            }
        }
    }
}

type ExpenseVarsType = {
    id: number
}

export type ExpenseQueryType = {
    loading: boolean
    data?: ExpenseType
    error: Nullable<Error>
}

const EXPENSE_QUERY = gql`
    query ExpenseQuery() {
        expense(id: !ID) {
            data {
                query
                attributes {
                    title
                    amount
                }
            }
        }
    }
`

const useExpenseQuery = (id: number) => {
    const { data, loading, error } = useQuery<ExpenseType, ExpenseVarsType>(
        EXPENSE_QUERY,
        {
            variables: { id },
        }
    )

    return {
        data,
        loading,
        error,
    }
}

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = process.env.REACT_APP_API_TOKEN

    operation.setContext({
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    })

    return forward(operation)
})

const client = new ApolloClient({
    link: concat(
        authMiddleware,
        new HttpLink({ uri: process.env.REACT_APP_API })
    ),
    cache: new InMemoryCache(),
})

const App: FC = () => {
    const { data, loading, error } = useExpenseQuery(1)

    if (loading) {
        return <span>loading</span>
    }

    if (error) {
        return <h1 data-hook="title">Error, Нюхай бебру</h1>
    }

    return (
        <h1 data-hook="title">
            Expense: {data?.expense.data.attributes.title}-
            {data?.expense.data.attributes.amount}
        </h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
)
