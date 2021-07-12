// const person: {
//     name: string;
//     age: number;
// } = {
const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name : 'John',
    age: 30,
    hobbies : ['Sports', 'Cooking'],
    role: [2, 'author']
}

// person.role[1] = 10;
// person.role.push('admin');

let favoriteActivites: string[];
favoriteActivites = ['sports'];

console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}