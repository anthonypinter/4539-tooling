var userName = 'John'
var userAge = 25
var userEmail = 'john@email.com'

function getUserInfo() {
var fullInfo = userName + ' is ' + userAge + ' years old'
return fullInfo
}

function validateEmail(emailAddress) {
if(emailAddress.includes('@')) {
return true
} else {
return false
}
}

var isValidEmail = validateEmail(userEmail)

function displayUserData(){
var userInfo = getUserInfo()
console.log(userInfo)
if(isValidEmail) {
console.log('Email is valid: ' + userEmail)
} else {
console.log('Email is invalid')
}
}

function calculateAge(birthYear) {
var currentYear = 2024
var age = currentYear - birthYear
return age
}

var newUserAge = calculateAge(1999)
console.log('Calculated age: ' + newUserAge)

displayUserData()