var term = document.getElementById("term");
var price = document.getElementById("price");
var btn = document.getElementById("btn");
var list = document.getElementById("mainList");

var cnt = 1;

// document.getElementById("term").focus();

btn.addEventListener("click", function(){
    list.innerHTML =  list.innerHTML + `
    <div class="article">
        <h2>${term.value}</h2>
        <p>${price.value}</p>
    </div>
    `; // 模板語法，方便我們在js寫html


    term.value = ""; // 清空輸入
    content.value = "";
})