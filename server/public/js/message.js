let body_message__header = document.getElementsByClassName("body_message__header")[0];
let body_message_content = document.getElementsByClassName("body_message_content")[0];

let tabBody = body_message__header.getElementsByTagName("li");



for (let i = 0; i < tabBody.length; i++) {
    tabBody[i].addEventListener("click", function() {
        body_message__header.getElementsByClassName("activeThree")[0].classList.remove("activeThree");
        tabBody[i].classList.add("activeThree");
        body_message_content.getElementsByClassName("activeThree")[0].classList.remove("activeThree");
        body_message_content.getElementsByTagName("tab")[i].classList.add("activeThree");


    });
}