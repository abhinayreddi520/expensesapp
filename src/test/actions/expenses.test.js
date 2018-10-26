import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('remove expense works or not',()=>{
    const action = removeExpense({id:123});
    expect(action).toEqual({
        id:123,
        type: 'REMOVE_EXPENSE'
    });
});

test('editing file',()=>{
    const act = editExpense('12',{note:'notes can be erased'});
    expect(act).toEqual({
        type:'EDIT_EXPENSE',
        id:'12',
        updates:{
            note:'notes can be erased'
        }
    });
});

test('adding the expen',()=>{
    const expenseData = {
      description: 'what',
      note: 'is',
      amount: 10005,
      createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});
test('expensify',()=>{
    const action = addExpense({description:'lady gaga'});
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'lady gaga',
            amount:0,
            id:expect.any(String),
            note:'',
            createdAt:0
        }
    });
});
