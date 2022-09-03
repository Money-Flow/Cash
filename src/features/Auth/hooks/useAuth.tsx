import { useEffect, useState } from 'react'

export const useAuth = (): { isAuth: boolean } => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        setIsAuth(!!localStorage.getItem('token'))
    }, [])

    return {
        isAuth,
    }
}
