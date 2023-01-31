
const regexName = /^([a-zA-Z]{2,50})$/;

const validateName = (name: string) => {
    if(name.match(regexName)){
        $('.emsg1').addClass('form__description--hidden');
        return true;
    }else{
        $('.emsg1').removeClass('form__description--hidden');
        return false;
    }
}

export default validateName