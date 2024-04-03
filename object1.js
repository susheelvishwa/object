let person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
