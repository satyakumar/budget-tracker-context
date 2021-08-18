import IExpenseItem from '../interfaces/ExpenseItem'
import {TiDelete, TiEdit} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { ActionType } from '../Actions';
import { useContext } from 'react';

const ExpenseItem: React.FC<IExpenseItem> = ({id, name, cost}) => {
    //const [isEditable, setIsEditable] = useState(false)
    const {dispatch} = useContext(AppContext)
    const deleteHanlder = () => {
        if (dispatch) {
            dispatch({
                type: ActionType.DELETE_EXPENSE,
                payload: id
            })
        }
    }
  
    return (
        <li className="list-group-item d-flex justify-content-between align-center">
            {name}
            <div>
                {/* <span className="badge badge-primary badge-pill mr-3"> */}
                    ${cost} 
                    {/* <TiEdit size="1.5em" onClick={editHanlder}></TiEdit> */}
                    <TiDelete size="1.5em" onClick={deleteHanlder}></TiDelete>
                {/* </span> */}
            </div>
        </li>
    )
}

export default ExpenseItem
