import validateName from './assets/utils/formValidation/validateName';
import validateEmail from './assets/utils/formValidation/validateEmail';
import validatePassword from './assets/utils/formValidation/validatePassword';

const $ = require('jquery');


$(document).ready(() => {
    
    $('.jq-submit').click((e:any) => {
        e.preventDefault();
        const name = $('input[name = name]').val();
        const email = $('input[name = email]').val();
        const password = $('input[name = password]').val();

        if (typeof name === 'string' && typeof email === 'string' && typeof password === 'string'){
            validateName(name);
            validateEmail(email);
            validatePassword(password);
            if (validateName(name) === true && validateEmail(email) === true && validatePassword(password) === true){
                $('.successMsg').removeClass('form__description--hidden');
            }
        }
    });
});
