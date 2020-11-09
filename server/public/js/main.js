/*------------index.html------------------------------------------------------------------*/
//Tab home forum stock market

let tabs_header = document.getElementsByClassName("tabs_header")[0];
let tab_content = document.getElementsByClassName("tab-content")[0];

let tabs_Pane = tabs_header.getElementsByTagName("li");



for (let i = 0; i < tabs_Pane.length; i++) {
    tabs_Pane[i].addEventListener("click", function() {
        tabs_header.getElementsByClassName("active")[0].classList.remove("active");
        tabs_Pane[i].classList.add("active");
        tab_content.getElementsByClassName("active")[0].classList.remove("active");
        tab_content.getElementsByTagName("tab")[i].classList.add("active");


    });
}
/*----------------SOURCE CODE-------------------------------------------------------------*/
//     //--Tab menu load các chủ đề lên dữ liệu riêng---//
// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];

// let tabsPane = tabHeader.getElementsByTagName("li");


// for (let i = 0; i < tabsPane.length; i++) {
//     tabsPane[i].addEventListener("click", function() {
//         tabHeader.getElementsByClassName("activeTwo")[0].classList.remove("activeTwo");
//         tabsPane[i].classList.add("activeTwo");
//         tabBody.getElementsByClassName("activeTwo")[0].classList.remove("activeTwo");
//         tabBody.getElementsByTagName("tab")[i].classList.add("activeTwo");


//     });
// }

//pagination for các chủ dề source code
//itemPerPage: 3, currentPage = 1
//start =0, end = itemPerPage;
//start =(currentPage -1) * itemPerPage;
//end = currentPage * itemPerPage;
//1: CurrentPage = 1, start = (1-1) * 3 = 0,end =1*3=3,start=0,end=3
//2: CurrentPage = 2, start = (2-1) * 3 = 3,end =2*3=6,start=3,end=6
//3: CurrentPage = 3, start = (3-1) * 3 = 6,end =3*3=9,start=6,end=9



/*----- Application message----------------------------*/


let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("a");

function closeWindow() {
    tabBody.style.display = "none";
}

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("activeTwo")[0].classList.remove("activeTwo");
        tabsPane[i].classList.add("activeTwo");
        tabBody.getElementsByClassName("activeTwo")[0].classList.remove("activeTwo");
        tabBody.getElementsByTagName("tab")[i].classList.add("activeTwo");


    });
}








// +

/*-------------------End Application message------------------*/