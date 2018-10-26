// const person = {
//     name:'abhinay',
//     age: 29,
//     location :{
//       city:'Nizamabad',
//       temp: 33
//     }
// };

// const {name,age} = person;
// console.log(`my name is ${name},and my age is ${age}.`);
// const {city,temp} = person.location;
// if(temp&&city){
//     console.log(`it's ${temp} in city ${city}`);
// }
// const book = {
//     title: 'book',
//     author: 'abhi',
//     publisher:{
//         name: 'abhi publications'
//     }
// };

// const {name: publisherName='unknown'} = book.publisher;
// console.log(`${publisherName}`);

const address = ['1','2','3','4'];
const [,,,city]= address;
console.log(`my address is ${city}`);
const item = ['medium coffee','23','45'];
const [cup,,,money='22']=item;
console.log(`a ${cup} is ${money}`);




