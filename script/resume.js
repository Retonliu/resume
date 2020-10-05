var tab = document.getElementsByClassName("tab")[0];
var edu = document.getElementsByClassName("education")[0];
var work = document.getElementsByClassName("work")[0];
var content = document.getElementById("content");
var btn = document.getElementsByTagName("button")[0];
var userText = document.getElementById("userText");
var userName = document.getElementById("userName");
var index = 1;
tab.addEventListener("click", function(event) {
    let target = event.target;
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
btn.addEventListener("click", function(){
    let text = userText.value;
    let name = userName.value;
    let container = document.createElement("div");
    let picture = document.createElement("img");
    let nameP = document.createElement("p");
    let textP = document.createElement("p");

    nameP.innerText = name;
    textP.innerText = text;
    nameP.classList.add("name");
    textP.classList.add("text");
    if (index % 2 === 0) { //偶数
        container.classList.add("evenComment");
    } else {
        container.classList.add("oddComment");
    }
    picture.src = "style/img/smile.jpg";
    picture.alt = "simon";
    container.appendChild(picture);
    container.appendChild(nameP);
    container.appendChild(textP);
    content.insertBefore(container, content.firstChild); //作为第一个节点插入
    index += 1;
}, false);