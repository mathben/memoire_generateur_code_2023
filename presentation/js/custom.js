// window.onbeforeunload = null;

// Source shellinabox https://github.com/shellinabox/shellinabox/blob/master/misc/embedded.html
var url = "http://127.0.0.1:4200";
var iframe = document.getElementById('mon-iframe');
// var iframe_view = document.getElementById('iframe_view');
document.getElementById("demo_1_btn_login").addEventListener("click", function () {
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

document.getElementById("demo_1_btn_run").addEventListener("click", function () {
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

document.getElementById("demo_1_btn_stop").addEventListener("click", function () {
    console.debug("Kill all");
    // force kill all
    let message = JSON.stringify({
        type: 'input',
        data: 'pkill -f odoo-bin\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // iframe_view.src = ""
});

document.getElementById("demo_1_btn_status").addEventListener("click", function () {
    console.debug("status");

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2/addons/TechnoLibre_odoo-code-generator-template\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // status
    message = JSON.stringify({
        type: 'input',
        data: 'git status\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // iframe_view.src = ""
});

document.getElementById("demo_1_btn_new_project").addEventListener("click", function () {
    console.debug("Générer");
    let input_module = document.getElementById("demo_1_input_module");
    let input_model = document.getElementById("demo_1_input_model");
    let input_champs = document.getElementById("demo_1_input_champs");
    let input_type = document.getElementById("demo_1_input_type");

    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }

    if (!input_model.value) {
        input_model.classList.add("invalid");
        all_good = false;
    } else {
        input_model.classList.remove("invalid");
    }

    if (!input_champs.value) {
        input_champs.classList.add("invalid");
        all_good = false;
    } else {
        input_champs.classList.remove("invalid");
    }

    if (!input_type.value) {
        input_type.classList.add("invalid");
        all_good = false;
    } else {
        input_type.classList.remove("invalid");
    }

    if (!all_good) {
        return;
    }
    // let config = '{\\"model\\":[{\\"name\\":\\"b\\",\\"fields\\":[{\\"name\\":\\"b\\",\\"type\\":\\"integer\\"},{\\"name\\":\\"c\\",\\"type\\":\\"datetime\\"}]},{\\"name\\":\\"a\\",\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"char\\"}]}]}'
    let config = `{\\"model\\":[{\\"name\\":\\"${input_model.value}\\",\\"fields\\":[{\\"name\\":\\"${input_champs.value}\\",\\"type\\":\\"${input_type.value}\\"}]}]}`

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2/\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // new project
    message = JSON.stringify({
        type: 'input',
        data: `./script/code_generator/new_project.py -m ${input_module.value} -d ./addons/TechnoLibre_odoo-code-generator-template --config "${config}"\n`
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