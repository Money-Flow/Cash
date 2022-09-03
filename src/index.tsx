import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Navigate,
} from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { client } from 'apollo'

import { App } from 'app/App'
import { useAuth } from 'hooks/useAuth'
import { LoginPage } from 'pages/login.page'

const RequireAuth = ({ children }: { children: React.ReactElement }) => {
    const { isAuth } = useAuth()
    const location = useLocation()

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <App />
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
)
