//Task Div hərəkət etdirmək
let box = document.getElementById("box");
let marginleft = 0;
let margintop = 0;

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            box.style.color = "red";
            marginleft = marginleft - 100;
            box.style.marginLeft = `${marginleft}px`;
            break;
        case 38:
            box.style.color = "blue";            
            margintop = margintop - 100;
            box.style.marginTop = `${margintop}px`;
            break;
        case 39:
            box.style.color = "green";
            marginleft = marginleft + 100;
            box.style.marginLeft = `${marginleft}px`;
            break;
        case 40:
            box.style.color = "yellow";
            margintop = margintop + 100;
            box.style.marginTop = `${margintop}px`;
            break;
    }
});