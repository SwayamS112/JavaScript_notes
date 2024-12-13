// Stack (Primitive)   Heap(Non-Primitive)
let name = "swayam"
let anothername = name
anothername = "sood"

console.log(name);
console.log(anothername);

let user1 = {
    email: "soodswayam@gamil.com",
    pass : "1234",
}

let user2 = user1

user2.email = "swayam123@gmail.com"

console.log(user1.email);
console.log(user2.email);

