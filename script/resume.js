var tab = document.getElementsByClassName("tab")[0];
var edu = document.getElementsByClassName("education")[0];
var work = document.getElementsByClassName("work")[0];
tab.addEventListener("click", function(event) {
    let target = event.target;
    console.log(target);
    if (target.innerText === "教育经历") { //点击“教育经历”
        let workP = tab.children[1].children[0];
        if (!target.matches(".choose")) {
            target.classList.add("choose");
        }
        if (workP.matches(".choose")) {
            workP.classList.remove("choose");
        }
        if (edu.matches(".hide")) {
            edu.classList.remove("hide");
        }
        if (!work.matches(".hide")) {
            work.classList.add("hide");
        }
    } else if (target.innerText === "工作经历") { //点击“工作经历”
        let eduP = tab.children[0].children[0];
        if (!target.matches(".choose")) {
            target.classList.add("choose");
        }
        if (eduP.matches(".choose")) {
            eduP.classList.remove("choose");
        }
        if (work.matches(".hide")) {
            work.classList.remove("hide");
        }
        if (!edu.matches(".hide")) {
            edu.classList.add("hide");
        }
    }
}, false);
//console.log(tab.children.indexOf("li"));