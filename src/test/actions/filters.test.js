import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';
test('start',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});
test('end',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('text',()=>{
    const action = setTextFilter('something');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'something'
    });
});
test('date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});
test('date',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});