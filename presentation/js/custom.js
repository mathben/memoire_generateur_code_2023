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
});

document.getElementById("demo_1_btn_diff").addEventListener("click", function () {
    console.debug("diff");

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2/addons/TechnoLibre_odoo-code-generator-template\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // status
    message = JSON.stringify({
        type: 'input',
        data: 'git diff\n'
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_commit").addEventListener("click", function () {
    console.debug("commit");

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2/addons/TechnoLibre_odoo-code-generator-template\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // add
    message = JSON.stringify({
        type: 'input',
        data: 'git add .\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // commit
    message = JSON.stringify({
        type: 'input',
        data: 'git commit -m "test"\n'
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_clean").addEventListener("click", function () {
    console.debug("clean");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        all_good = false;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2/addons/TechnoLibre_odoo-code-generator-template\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // clean
    message = JSON.stringify({
        type: 'input',
        data: 'git clean -fd\n'
    });
    iframe.contentWindow.postMessage(message, url);

    if (!all_good) {
        return;
    }

    // force clean if exist (or good ;-))
    message = JSON.stringify({
        type: 'input',
        data: `rm -rf "${input_module.value}"\n`
    });
    iframe.contentWindow.postMessage(message, url);
    message = JSON.stringify({
        type: 'input',
        data: `rm -rf "code_generator_template_${input_module.value}"\n`
    });
    iframe.contentWindow.postMessage(message, url);
    message = JSON.stringify({
        type: 'input',
        data: `rm -rf "code_generator_${input_module.value}"\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_stat_c").addEventListener("click", function () {
    console.debug("stat c");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // stat
    message = JSON.stringify({
        type: 'input',
        data: `./script/statistic/code_count.sh ./addons/TechnoLibre_odoo-code-generator-template/${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_stat_uca").addEventListener("click", function () {
    console.debug("stat uca");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // stat
    message = JSON.stringify({
        type: 'input',
        data: `./script/statistic/code_count.sh ./addons/TechnoLibre_odoo-code-generator-template/code_generator_template_${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_stat_ucb").addEventListener("click", function () {
    console.debug("stat ucb");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // stat
    message = JSON.stringify({
        type: 'input',
        data: `./script/statistic/code_count.sh ./addons/TechnoLibre_odoo-code-generator-template/code_generator_${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_install").addEventListener("click", function () {
    console.debug("install");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // restore
    message = JSON.stringify({
        type: 'input',
        data: './script/database/db_restore.py --database demo\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // install
    message = JSON.stringify({
        type: 'input',
        data: `./script/addons/install_addons.sh demo ${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_update").addEventListener("click", function () {
    console.debug("update");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // update
    message = JSON.stringify({
        type: 'input',
        data: `./script/addons/install_addons.sh demo ${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_up_uca").addEventListener("click", function () {
    console.debug("up uca");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // restore
    message = JSON.stringify({
        type: 'input',
        data: './script/database/db_restore.py --database cg_uca_demo\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // install
    message = JSON.stringify({
        type: 'input',
        data: `./script/addons/install_addons_dev.sh cg_uca_demo ${input_module.value},code_generator_template_${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_up_ucb").addEventListener("click", function () {
    console.debug("up ucb");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        input_module.classList.add("invalid");
        all_good = false;
    } else {
        input_module.classList.remove("invalid");
    }
    if (!all_good) {
        return;
    }

    // cd
    let message = JSON.stringify({
        type: 'input',
        data: 'cd ~/git/ERPLibre2\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // restore
    message = JSON.stringify({
        type: 'input',
        data: './script/database/db_restore.py --database cg_ucb_demo\n'
    });
    iframe.contentWindow.postMessage(message, url);

    // install
    message = JSON.stringify({
        type: 'input',
        data: `./script/addons/install_addons_dev.sh cg_ucb_demo code_generator_${input_module.value}\n`
    });
    iframe.contentWindow.postMessage(message, url);
});

document.getElementById("demo_1_btn_new_project").addEventListener("click", function () {
    console.debug("Générer");
    let button = document.getElementById("demo_1_btn_new_project");
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

    // button.style.color = "orange";
    // new project
    message = JSON.stringify({
        type: 'input',
        data: `./script/code_generator/new_project.py --keep_bd_alive -m ${input_module.value} -d ./addons/TechnoLibre_odoo-code-generator-template --config "${config}"\n`
    });
    iframe.contentWindow.postMessage(message, url);
    // button.style.color = "black";
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

// Gestion du formulaire
let monApp = angular.module('monApp', []);
monApp.controller('FormulaireController', function ($scope) {
    $scope.modeles = [{
        nom: '',
        champs: [{nom: '', type: 'char'}]
    }];

    $scope.ajouterModele = function () {
        $scope.modeles.push({
            nom: '',
            champs: [{nom: '', type: 'char'}]
        });
    };

    $scope.supprimerModele = function (index) {
        $scope.modeles.splice(index, 1);
    };

    $scope.ajouterChamp = function (modele) {
        modele.champs.push({nom: '', type: 'char'});
    };

    $scope.supprimerChamp = function (modele, index) {
        modele.champs.splice(index, 1);
    };

    $scope.genererJSON = function () {
        let data = [];
        $scope.modeles.forEach(function (modele) {
            let modeleData = {};
            modeleData.modele = modele.nom;
            modeleData.champs = {};
            modele.champs.forEach(function (champ) {
                modeleData.champs[champ.nom] = champ.type;
            });
            data.push(modeleData);
        });
        $scope.json = JSON.stringify(data, null, 2);
    };
});

// Gestion du scroll bar, dépend de .scrollable-slide
function resetSlideScrolling(slide) {
    $(slide).removeClass('scrollable-slide');
}

function handleSlideScrolling(slide) {
    if ($(slide).height() >= 800) {
        $(slide).addClass('scrollable-slide');
    }
}

Reveal.addEventListener('ready', function (event) {
    handleSlideScrolling(event.currentSlide);
});

Reveal.addEventListener('slidechanged', function (event) {
    resetSlideScrolling(event.previousSlide)
    handleSlideScrolling(event.currentSlide);
});