import { ActionType } from "../Actions";
import Expense from "./Expense";

export default interface IReducer  {
    type: ActionType
    payload: any // need to work
}

export interface IExpenseReducer extends Expense {
    dispatch?: React.Dispatch<IReducer>;
}