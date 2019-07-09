import Bowser from "bowser";
import axios from 'axios';

function errorHandler(error) {
    // check for errorHandle config
    if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
        return Promise.reject(error);
    }

    let onlyStatus = [500];
    // if has response show the error
    if (error.response && onlyStatus.includes(error.response.status)) {
        reportError(error);
    }
    return Promise.reject(error.response);
}


function reportError(error) {
    let system = Bowser.getParser(window.navigator.userAgent);
    let page = window.location.href;
    let browser = system.parsedResult.browser.name;

    axios
        .post('/frontend/errors', {uri: page, browser, type: 'REST',  details:
                JSON.stringify(
                    {
                        error: error,
                        type_error: 'REST'
                    }
                )
        })
        .then(response => {
        }).catch((err) => {
          console.log(err);
    })
}


export default errorHandler;