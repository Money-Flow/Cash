import {
    ApolloClient,
    ApolloLink,
    concat,
    HttpLink,
    InMemoryCache,
} from '@apollo/client'

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = process.env.REACT_APP_API_TOKEN

    operation.setContext({
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    })

    return forward(operation)
})

export const client = new ApolloClient({
    link: concat(
        authMiddleware,
        new HttpLink({ uri: process.env.REACT_APP_API })
    ),
    cache: new InMemoryCache(),
})
