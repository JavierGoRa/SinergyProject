function deleteButtonsAttributes(){
    document.getElementById("csButton").removeAttribute("class");
    document.getElementById("hsButton").removeAttribute("class");
    document.getElementById("lolButton").removeAttribute("class");
    document.getElementById("owButton").removeAttribute("class");
    document.getElementById("rlButton").removeAttribute("class");
}

function clickCsButton(){
    
    deleteButtonsAttributes();

    document.getElementById("csButton").setAttribute("class", "nav-item nav-link active");
    document.getElementById("hsButton").setAttribute("class", "nav-item nav-link");    
    document.getElementById("lolButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("owButton").setAttribute("class", "nav-item nav-link ");
    document.getElementById("rlButton").setAttribute("class", "nav-item nav-link");
}

function clickHsButton(){
    
    deleteButtonsAttributes();

    document.getElementById("csButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("hsButton").setAttribute("class", "nav-item nav-link active");    
    document.getElementById("lolButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("owButton").setAttribute("class", "nav-item nav-link ");
    document.getElementById("rlButton").setAttribute("class", "nav-item nav-link");
}

function clickLolButton(){
    
    deleteButtonsAttributes();

    document.getElementById("csButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("hsButton").setAttribute("class", "nav-item nav-link");    
    document.getElementById("lolButton").setAttribute("class", "nav-item nav-link active");
    document.getElementById("owButton").setAttribute("class", "nav-item nav-link ");
    document.getElementById("rlButton").setAttribute("class", "nav-item nav-link");
}

function clickOwButton(){
    
    deleteButtonsAttributes();

    document.getElementById("csButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("hsButton").setAttribute("class", "nav-item nav-link");    
    document.getElementById("lolButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("owButton").setAttribute("class", "nav-item nav-link active");
    document.getElementById("rlButton").setAttribute("class", "nav-item nav-link");
}

function clickRlButton(){
    
    deleteButtonsAttributes();

    document.getElementById("csButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("hsButton").setAttribute("class", "nav-item nav-link");    
    document.getElementById("lolButton").setAttribute("class", "nav-item nav-link");
    document.getElementById("owButton").setAttribute("class", "nav-item nav-link ");
    document.getElementById("rlButton").setAttribute("class", "nav-item nav-link active");
}