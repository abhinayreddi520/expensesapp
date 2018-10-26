const add = (a,b)=>{
    return a+b;
};

const greet = (name) => {
     return `hi my name is ${name}`
};
test('add two numbers',()=>{
    const result = add(1,3);
    expect(result).toBe(4);
});
test('greetings',()=>{
    const result = greet('son');
    expect(result).toBe('hi my name is son');
});



