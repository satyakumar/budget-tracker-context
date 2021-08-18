import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining: React.FC = () => {
    const {budget, expenses} = useContext(AppContext)
    const totalExpenses = expenses.reduce((acc, item) => { 
                            return acc = acc + item.cost 
                        },0);
    const aletType =  totalExpenses > budget ? 'alert-danger' : 'alert-success';                 
    return (
        <div className={`alert ${aletType}`}>
            <span>Remaining: ${budget-totalExpenses}</span>
        </div>
    )
}

export default Remaining
