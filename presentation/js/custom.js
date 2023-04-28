// Source shellinabox https://github.com/shellinabox/shellinabox/blob/master/misc/embedded.html
var url = "http://127.0.0.1:4200";
var iframe = document.getElementById('mon-iframe');
// var iframe_view = document.getElementById('iframe_view');
document.getElementById("demo_btn_login").addEventListener("click", function () {
    console.debug("login");
    // login
    let message = JSON.stringify({
        type: 'input',
        data: 'mathben\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // password
    message = JSON.stringify({
        type: 'input',
        data: 'testtest\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // clear
    message = JSON.stringify({
        type: 'input',
        data: 'clear\n'
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_btn_run").addEventListener("click", function () {
    console.debug("run");

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2/\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // run
    message = JSON.stringify({
        type: 'input',
        data: './run.sh\n'
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_btn_stop").addEventListener("click", function () {
    console.debug("Kill all");
    // force kill all
    message = JSON.stringify({
        type: 'input',
        data: 'pkill -f odoo-bin\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // iframe_view.src = ""
});

// document.getElementById("demo_btn_view").addEventListener("click", function() {
//     console.debug("visualize");
//
//     // iframe_view.src = ""
//     iframe_view.src = "http://google.ca"
// });

// Reveal.on('slidechanged', event => {
//     // event.previousSlide, event.currentSlide, event.indexh, event.indexv
//     console.debug(event);
//     if (event.currentSlide.id === "demonstration") {
//         console.debug("pouettt");
//
//     }
// });

// Add url to our iframe after the event listener is installed.
iframe.src = url;