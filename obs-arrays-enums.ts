// const person: {
//     name: string;
//     age: number;
// } = {
// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name : 'John',
//     age: 30,
//     hobbies : ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name : 'John',
    age: 30,
    hobbies : ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role[1] = 10;
// person.role.push('admin');

let favoriteActivites: any[];
favoriteActivites = ['sports', 2, 'hello'];

console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('This user is an Admin.');
}