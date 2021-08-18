import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget: React.FC = () => {
    const {budget} = useContext(AppContext)
    return (
        <div className="alert alert-danger">
            <span>Budget {budget}</span>
        </div>
    )
}

export default Budget
