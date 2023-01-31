
const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const validateEmail = (email: string) => {
    if(email.match(regexEmail)){
        $('.emsg2').addClass('form__description--hidden');
        return true;
    }else{
        $('.emsg2').removeClass('form__description--hidden');
        return false;
    }
}

export default validateEmail