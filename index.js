const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Grabbing where the passwords will appear
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")

// length of the passwords
let lengthPassword1 = 12
let lengthPassword2 = 12

// function to create random password
function getRandomChar() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// function to return the randomly generated password
function generatePassword() {
    let randomPassword = ""
    
    for (let i = 0; i < lengthPassword1; i++) {
        randomPassword += getRandomChar()
    }
     return randomPassword
     
    for (let i = 0; i < lengthPassword2; i++) {
        randomPassword += getRandomChar()
    }
    return randomPassword
    
    
}
// Function to show the pasword onclick
function showPassword() {

const generatedPassword1 = generatePassword()
password1El.textContent = generatedPassword1

const generatedPassword2 = generatePassword()
password2El.textContent = generatedPassword2

}

