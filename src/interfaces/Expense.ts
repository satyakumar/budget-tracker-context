import ExpenseItem from "./ExpenseItem";

export default interface Expense {
    budget: number,
    expenses: ExpenseItem[],
}