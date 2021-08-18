import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';
import { ActionType } from '../Actions';
const AddExpenseForm: React.FC = () => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState<string>('');
    const [cost, setCost] = useState<string>('')
    const clickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const expenses = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
        }
        if (dispatch) {
            dispatch({
                type: ActionType.ADD_EXPENSE,
                payload: expenses,
            })
        }
        setName('');
        setCost('');

    }
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor="name">Name</label>
                    <input
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor="name">Cost</label>
                    <input
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary' onClick={clickHandler}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm

