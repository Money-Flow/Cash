import { gql, useQuery } from '@apollo/client'

import { Nullable } from 'types'

type ExpenseType = {
    expense: {
        data: {
            attributes: {
                amount: number
                title: string
            }
        }
    }
}

type ExpenseVarsType = {
    id: number
}

export type ExpenseQueryType = {
    error: Nullable<Error>
    loading: boolean
    data?: ExpenseType
}

const EXPENSE_QUERY = gql`
    query {
        expense(id: 1) {
            data {
                attributes {
                    title
                    amount
                }
            }
        }
    }
`

export const useExpenseQuery = (id: number) => {
    const { data, loading, error } = useQuery<ExpenseType, ExpenseVarsType>(
        EXPENSE_QUERY,
        {
            variables: { id },
        }
    )

    return {
        data: data?.expense.data ?? null,
        loading,
        error,
    }
}
