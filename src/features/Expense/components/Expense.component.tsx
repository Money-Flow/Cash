import React from 'react'

import { useExpenseQuery } from 'features/Expense/graphql/queries'

export const Expense = () => {
    const { data, loading, error } = useExpenseQuery(1)

    if (loading) {
        return <span>loading</span>
    }

    if (error) {
        return <h1 data-hook="title">Error, Нюхай бебру</h1>
    }

    if (!data) {
        return <h1 data-hook="title">Not found expense</h1>
    }

    return (
        <h1 data-hook="title">
            Expense: {data.attributes.title} - {data.attributes.amount}
        </h1>
    )
}
