//Task Div hərəkət etdirmək
let box = document.getElementById("icon");
let marginleft = 0;
let margintop = 0;

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            box.style.color = "red";
            marginleft = marginleft - 100;
            box.style.transform = "rotateZ(-180deg)";
            box.style.marginLeft = `${marginleft}px`;

            break;
        case 38:
            box.style.color = "blue";
            margintop = margintop - 100;
            box.style.transform = "rotate(270deg)";
            box.style.marginTop = `${margintop}px`;
            break;
        case 39:
            box.style.color = "green";
            marginleft = marginleft + 100;
            box.style.transform = "rotate(0deg)";
            box.style.marginLeft = `${marginleft}px`;
            break;
        case 40:
            box.style.color = "pink";
            margintop = margintop + 100;
            box.style.transform = "rotate(90deg)";
            box.style.marginTop = `${margintop}px`;
            break;
    }
});
//Side bar start
let sidebar=document.getElementById("sidebar");
let closebtn=document.getElementById("closebtn");
let openbtn=document.getElementById("openbtn");

openbtn.addEventListener("click", function(){
    sidebar.classList.remove("close");
})
closebtn.addEventListener("click", function(){
    sidebar.classList.add("close");
})