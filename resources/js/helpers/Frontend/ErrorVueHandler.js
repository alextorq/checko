import axios from 'axios';
import Bowser from "bowser";

function errorHandler(err, vm, info) {
    let system = Bowser.getParser(window.navigator.userAgent);
    let page = window.location.href;
    let browser = system.parsedResult.browser.name;

    axios
        .post('/frontend/errors', {uri: page, browser, type: 'vue',  details:
                JSON.stringify(
                    {
                        error: err.stack,
                        type_error: info,
                        component: vm.$options._componentTag ? vm.$options._componentTag : 'undefined'
                    }
                )
            })
        .then(response => {
        }).catch((err) => {
            console.log(err);
        })

}

export default errorHandler;