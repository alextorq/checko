function runLoader(context) {
    let status = context.rootGetters.isLoad;
    if (!status) {
        context.commit('updateLoadStatus', true);
    }
    window.countLoad = window.countLoad + 1;
}

function stopLoader(context) {
    window.countLoad = window.countLoad - 1;
    if (window.countLoad < 1) {
        context.commit('updateLoadStatus', false);
    }
}


export {runLoader, stopLoader}