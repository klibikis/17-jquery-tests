const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const regexName = /^([a-zA-Z ]{2,50})$/;

const validateName = (name: string) => {
    if(name.trim().match(regexName)){
        $('.emsg1').addClass('form__description--hidden');
        return true;
    }else{
        $('.emsg1').removeClass('form__description--hidden');
        return false;
    }
}

export default validateName