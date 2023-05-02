// window.onbeforeunload = null;

// Source shellinabox https://github.com/shellinabox/shellinabox/blob/master/misc/embedded.html
var url = "http://127.0.0.1:4200";
var iframe = document.getElementById('mon-iframe');
var path_rel_repo = "./addons/TechnoLibre_odoo-code-generator-template"
var path_repo = "~/git/ERPLibre2/addons/TechnoLibre_odoo-code-generator-template"
var path_root = "~/git/ERPLibre2/"
var bd_name = "demo"

// var iframe_view = document.getElementById('iframe_view');

function send_terminal(str) {
    let message = JSON.stringify({
        type: 'input',
        data: `${str}\n`
    });
    iframe.contentWindow.postMessage(message, url);
}

document.getElementById("demo_1_btn_login").addEventListener("click", function () {
    console.debug("login");
    // login
    send_terminal("mathben");

    // password
    send_terminal("testtest");

    // clear
    send_terminal("clear");
});

document.getElementById("demo_1_btn_run").addEventListener("click", function () {
    console.debug("run");

    // cd
    send_terminal(`cd ${path_root}`);

    // run
    send_terminal("./run.sh");
});

document.getElementById("demo_1_btn_stop").addEventListener("click", function () {
    console.debug("Kill all");
    // force kill all
    send_terminal("pkill -f odoo-bin");
});

document.getElementById("demo_1_btn_status").addEventListener("click", function () {
    console.debug("status");

    // cd
    send_terminal(`cd ${path_repo}`);

    // status
    send_terminal("git status");
});

document.getElementById("demo_1_btn_diff").addEventListener("click", function () {
    console.debug("diff");

    // cd
    send_terminal(`cd ${path_repo}`);

    // diff
    send_terminal("git diff");
});

document.getElementById("demo_1_btn_commit").addEventListener("click", function () {
    console.debug("commit");

    // cd
    send_terminal(`cd ${path_repo}`);

    // add
    send_terminal("git add .");

    // commit
    send_terminal('git commit -m "test"');
});

document.getElementById("demo_1_btn_clean").addEventListener("click", function () {
    console.debug("clean");

    let input_module = document.getElementById("demo_1_input_module");
    let all_good = true;

    if (!input_module.value) {
        all_good = false;
    }

    // cd
    send_terminal(`cd ${path_repo}`);

    // clean
    send_terminal("git clean -fd");

    if (!all_good) {
        return;
    }

    // force clean if exist (or good ;-))
    send_terminal(`rm -rf "${input_module.value}"`);
    send_terminal(`rm -rf "code_generator_template_${input_module.value}"`);
    send_terminal(`rm -rf "code_generator_${input_module.value}"`);
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
    send_terminal(`cd ${path_root}`);

    // stat
    send_terminal(`./script/statistic/code_count.sh ${path_rel_repo}/${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // stat
    send_terminal(`./script/statistic/code_count.sh ${path_rel_repo}/code_generator_template_${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // stat
    send_terminal(`./script/statistic/code_count.sh ${path_rel_repo}/code_generator_${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // restore
    send_terminal(`./script/database/db_restore.py --database ${bd_name}`);

    // install
    send_terminal(`./script/addons/install_addons.sh ${bd_name} ${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // update
    send_terminal(`./script/addons/install_addons.sh ${bd_name} ${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // restore
    send_terminal(`./script/database/db_restore.py --database cg_uca_${bd_name}`);

    // install
    send_terminal(`./script/addons/install_addons_dev.sh cg_uca_${bd_name} ${input_module.value},code_generator_template_${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // restore
    send_terminal(`./script/database/db_restore.py --database cg_ucb_${bd_name}`);

    // install
    send_terminal(`./script/addons/install_addons_dev.sh cg_ucb_${bd_name} code_generator_${input_module.value}`);
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
    send_terminal(`cd ${path_root}`);

    // new project
    send_terminal(`./script/code_generator/new_project.py --keep_bd_alive -m ${input_module.value} -d ${path_rel_repo} --config "${config}"`);
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
    // $scope.modeles = [{
    //     name: '',
    //     champs: [{name: '', type: 'char'}]
    // }];
    $scope.modeles = [];

    $scope.ajouterModele = function () {
        $scope.modeles.push({
            name: '',
            champs: [{name: '', type: 'char'}]
        });
    };

    $scope.supprimerModele = function (index) {
        $scope.modeles.splice(index, 1);
    };

    $scope.ajouterChamp = function (modele) {
        modele.champs.push({name: '', type: 'char'});
    };

    $scope.supprimerChamp = function (modele, index) {
        modele.champs.splice(index, 1);
    };

    $scope.genererJSON = function () {
        if (!$scope.modeles.length) {
            $scope.json = "";
            return;
        }
        let lst_model = [];
        let data = {"model": lst_model};
        $scope.modeles.forEach(function (modele) {
            let modeleData = {};
            modeleData.name = modele.name;
            modeleData.field = [];
            modele.champs.forEach(function (champ) {
                modeleData.field.push({"name": champ.name, "type": champ.type});
            });
            lst_model.push(modeleData);
        });
        $scope.json = JSON.stringify(data, null, 2);
        $scope.json_inline = JSON.stringify(data).replaceAll('"', '\\"');
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