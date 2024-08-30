// let user = {
//     name: "Amit",
//     age: 25,
//     message: "Hello World"
// }
// let secUser = user
// console.log(secUser)

// let user = {
//     name: "Amit",
//     age: 25,
//     message: "Hello World",
//     func: function () {
//         console.log(this.name)
//     }
// }
// user.func()

// let parent = {
//     name: "sumit",
//     age: 45,
//     child: function () {
//         console.log(this.name)
//     }
// }
// parent.child()

// let user = {
//     name: "Amit",
//     age: 25,
// }
// console.log(user)
// console.log(user.name)

// let user = {
//     name: "amir",
//     lastname: "singh",
//     course: "Full stack",
//     enroll: function () {
//         console.log("user seccessfully enrolled")
//     }
// }
// console.log(user)
// console.log(user.lastname)
// user.enroll()

// let user = {
//     name: "amir",
//     lastname: "singh",
//     course: "Full stack",
//     enroll: function () {
//         console.log("user seccessfully enrolled")
//     }
// }
// for (let data in user) {
//     console.log(user[data])
// }

// let obj = {
//     user: "Amit",
//     code: 1252,
//     enroll: function () {
//         console.log("Hello World")
//     }
// }
// console.log(obj.user)




// let user = {
//     name: "Hello World",
//     lastName: "Singh",
//     func: function () {
//         console.log(this.name)
//     }
// }
// user.func()


// function user(name, lastName, college) {
//     this.name = name;
//     this.lastName = lastName;
//     this.college = college;
// }
// let firstUser = new user("Amit", "Singh", "BSA")
// let secUser = new user("Sumit", "sharma", "Js")
// let thirdUser = new user("Lalit", "Sharma", "Kuch")
// console.log(thirdUser.name)

// function Valueret() {
//     this.name = "Amit";
//     return {
//         name: this.name
//     }
// }
// let obj = new Valueret()
// console.log(obj.name)

// function hello() {
//     return {
//         name: "Mmit",
//         func: function () {
//             console.log("this is my inner function")
//         }
//     }
// }
// let newData = hello()
// console.log(newData)
// newData.func()

// let user = new Object()
// user.name = 'Amit';
// console.log(user)
