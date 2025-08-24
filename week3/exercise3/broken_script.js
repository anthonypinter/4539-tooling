// This script has various errors and style issues

let users = []
const MAX_USERS = 100

function addUser(name,email) {
if(name === '' || email === '') {
console.log("Name and email are required")
return false
}

const newUser = {
name: name,
email: email,
id: users.length + 1,
createdAt: new Date()
}

users.push(newUser)
console.log('User added successfully')
return true
}

function findUser(id) {
for(let i = 0; i < users.length; i++) {
if(users[i].id == id) {
return users[i]
}
}
return null
}

function validateEmailFormat(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
return emailRegex.test(email)
}

function displayAllUsers() {
console.log("=== All Users ===")
users.forEach(function(user) {
console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`)
})
}

// Test the functions
addUser("John Doe", "john@example.com")
addUser("Jane Smith", "jane.smith@email.com")
addUser("", "invalid@email.com") // This should fail

const user = findUser(1)
if(user) {
console.log("Found user:", user.name)
} else {
console.log("User not found")
}

displayAllUsers()

// Form submission handler (has issues)
document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
e.preventDefault()
const nameInput = document.querySelector('input[type="text"]')
const emailInput = document.querySelector('input[type="email"]')
const name = nameInput.value
const email = emailInput.value

if(!validateEmailFormat(email)) {
alert("Please enter a valid email address")
return
}

if(addUser(name, email)) {
alert("User added successfully!")
nameInput.value = ""
emailInput.value = ""
} else {
alert("Error adding user")
}
})
})