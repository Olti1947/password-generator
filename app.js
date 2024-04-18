const characterAmountRange = document.getElementById('number-of-characters')
const characterAmountNumber = document.getElementById('number-input')
const uppercase = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const form = document.getElementById('password-generator')
const passwordDisplay = document.getElementById('generated-password')

const LOWERCASE_CHAR_CODES = fromLowtoHigh(97,122)
const UPPERCASE_CHAR_CODES = fromLowtoHigh(65,90)
const SYMBOLS_CHAR_CODES = fromLowtoHigh(33,47).concat(fromLowtoHigh(58,64)).concat(fromLowtoHigh(91,96)).concat(fromLowtoHigh(123,126))
const NUMBERS_CHAR_CODES = fromLowtoHigh(48,57)

characterAmountNumber.addEventListener('input',syncCharacterAmount)
characterAmountRange.addEventListener('input',syncCharacterAmount)
form.addEventListener('submit', e=>{
    e.preventDefault()
const characterAmount = characterAmountNumber.value
const includeUppercase = uppercase.checked
const includeNumbers = numbers.checked
const includeSymbols = symbols.checked
    const password = generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols)
    console.log(password)
passwordDisplay.innerText = password
})
function syncCharacterAmount(e){
const value = e.target.value
characterAmountNumber.value = value
characterAmountRange.value = value
}

function generatePassword(characterAmount, includeUppercase,includeNumbers,includeSymbols){
let charCodes = LOWERCASE_CHAR_CODES;
if(includeUppercase)charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
if(includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
if(includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
let passwordCharacters = []
for(let i = 0; i<characterAmount; i++){
const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
}
console.log(passwordCharacters)
return passwordCharacters.join('')
}



function fromLowtoHigh(low,high){
const array = []
for(let i =low; i<=high; i++){
    array.push(i)
}
return array
}

