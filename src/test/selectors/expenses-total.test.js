import selectExpensesTotal from '../../selectors/expenses-total';
import {expenses} from '../fixtures/expenses';
test('should be zero',()=>{
const res=selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should be 10',()=>{
    const res=selectExpensesTotal(expenses);
        expect(res).toBe(10);
    });