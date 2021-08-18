import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpensesTotal: React.FC = () => {
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((acc, item) => {
                            return acc = acc + item.cost
                        },0)
    return (
        <div className="alert alert-primary">
            <span>Spent so far $:{totalExpenses}</span>
        </div>
    )
}

export default ExpensesTotal
