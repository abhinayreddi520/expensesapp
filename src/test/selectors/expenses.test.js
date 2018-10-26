import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'bubble',
        amount : 500,
        note : '',
        createdAt : moment(0).add(7,'days').valueOf()
    },
    {
        id: 2,
        description: 'bike',
        amount : 800,
        note : '',
        createdAt : moment(0).subtract(4,'days').valueOf()
    },
    {
        id: 3,
        description: 'coke',
        amount : 70,
        note : '',
        createdAt : moment(0).add(4,'days').valueOf()
    }
];

test('should filter expenses array',()=>{
    const filters = {
        sortBy : 'date',
        text : 'k',
        startDate : undefined,
        endDate : undefined
    };   
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]); 
});
test('should ',()=>{
    const filters = {
        sortBy : 'date',
        text : '',
        startDate : moment(0),
        endDate : undefined
    };   
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[2]]); 
});
test('s3 ',()=>{
    const filters = {
        sortBy : 'date',
        text : '',
        startDate : undefined,
        endDate : moment(0).add(10,'days')
    };   
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]); 
});
test('sort by date',()=>{
    const filters = {
        sortBy : 'date',
        text : '',
        startDate : undefined,
        endDate : undefined
    };   
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]); 
});
test('sort by amount',()=>{
    const filters = {
        sortBy : 'amount',
        text : '',
        startDate : undefined,
        endDate : undefined
    };   
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[0],expenses[2]]); 
});