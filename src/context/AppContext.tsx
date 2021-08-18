import { createContext, useReducer } from "react";
import IExpense from "../interfaces/Expense";
import IReducer, { IExpenseReducer } from "../interfaces/ExpenseReducer";
import { ActionType } from "../Actions";

const initialState: IExpense = {
    budget: 2000,
    expenses: [
        {id: 1, name: 'shopp', cost: 200},
        {id: 2, name: 'Groc', cost: 300},
        {id: 3, name: 'Veg & Fruits', cost: 400}
    ]
}

interface ProviderProps  { 
    children: React.ReactNode
}

const AppReducer = (state: IExpense, action: IReducer) => { //React.Reducer<IExpense, IReducer>
    switch(action.type) {
        case ActionType.ADD_EXPENSE: 
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case ActionType.EDIT_EXPENSES:
            const findIndex = state.expenses.findIndex(expense => expense.id === action.payload.id);
            state.expenses[findIndex] = action.payload;
            return {
                ...state
            }    
        case ActionType.DELETE_EXPENSE: 
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }    
        default: 
            return state;
    }
}

export const AppContext  = createContext<IExpenseReducer>(initialState);


export const AppProvider = (props: ProviderProps) => {
    const [state, dispatch] = useReducer<React.Reducer<IExpense, IReducer>>(AppReducer, initialState);
    
    return (
        <>
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
        </>
    )
}