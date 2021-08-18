import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpensesTotal from './components/ExpensesTotal';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';

function App() { //Todo: Edit buget and edit expense inline pending
  return (
    <AppProvider>
      <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="col-sm">
          <Remaining/>
        </div>
        <div className="col-sm">
          <ExpensesTotal/>
        </div>
      <h1 className="mt-3">Expenses</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpensesList/>
        </div>
      </div>
      <h1 className='mt-3'>Add Expense</h1>
      <div className='mt-3'>
        <div className='col-sm'>
        <AddExpenseForm/>
        </div>
      </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
