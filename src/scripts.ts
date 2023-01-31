import validateName from "./utils/formValidation/validateName"
import validateEmail from "./utils/formValidation/validateEmail"
import validatePassword from "./utils/formValidation/validatePassword"


$(document).ready(() => {
    
    $('form').submit((e) => {
        e.preventDefault()
        let name = $('input[name = name]').val()
        let email = $('input[name = email]').val()
        let password = $('input[name = password]').val()

        if(typeof name === "string" && typeof email === "string" && typeof password === "string"){
            validateName(name);
            validateEmail(email);
            validatePassword(password);
            if(validateName(name) === true && validateEmail(email) === true && validatePassword(password) === true){
                $('.successMsg').removeClass('form__description--hidden');
            }
        }
    })
});