// Deleting object properties


let person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

delete person.email;
console.log(person.email);

// Output: undefined
