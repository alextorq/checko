import axios from 'axios';
import Bowser from "bowser";

function errorHandler(err) {

    let system = Bowser.getParser(window.navigator.userAgent);
    let page = window.location.href;
    let browser = system.parsedResult.browser.name;

    axios
        .post('/frontend/errors', {uri: page, browser, type: 'global',  details:
                JSON.stringify(
                    {
                        error: err.stack,
                        type_error: 'global'
                    }
                )
        })
        .then(response => {
        }).catch((err) => {
        console.log(err);
    })

}

export default errorHandler;