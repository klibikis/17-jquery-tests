const $ = require('jquery');

const regexPassword = /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const validatePassword = (password: string) => {
    if (password.match(regexPassword)){
        $('.emsg3').addClass('form__description--hidden');
        return true;
    } else {
        $('.emsg3').removeClass('form__description--hidden');
        return false;
    }
};

export default validatePassword;
