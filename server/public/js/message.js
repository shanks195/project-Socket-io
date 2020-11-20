let body_message__header = document.getElementsByClassName("body_message__header")[0];
let body_message_content = document.getElementsByClassName("body_message_content")[0];

let tabBody1 = body_message__header.getElementsByTagName("li1");



for (let i = 0; i < tabBody1.length; i++) {
    tabBody1[i].addEventListener("click", function() {
        body_message__header.getElementsByClassName("activeThree")[0].classList.remove("activeThree");
        tabBody1[i].classList.add("activeThree");
        body_message_content.getElementsByClassName("activeThree")[0].classList.remove("activeThree");
        body_message_content.getElementsByTagName("tab1")[i].classList.add("activeThree");


    });
}
socket.on("server-send-dki-thatbai", function () {
    alert("Sai username, co1 nguoi da dang ky roi!!");
});
socket.on("server-send-dki-thanhcong", function (data) {
    alert("Co nguoi da dang ky thanh cong");
    $("#currentUser").html(data);

    $("#loginForm").hide(2000);
    $("#Home_Content").show(1000);
});


$(document).ready(function () {
    $("#loginForm").show();
    $("#Home_Content").hide();
    $("#btnLogin").click(function () {
        socket.emit("client-send-username", $("#txtUserName").val());

    });
});

