const inp = document.querySelector("#favchap");
const addButt = document.querySelector("button");
const list = document.querySelector("#list");

addButt.addEventListener("click", function() {
    if (inp.value.trim() == "") {
        inp.focus();
    } else {
        const chap = document.createElement("li");
        const delButt = document.createElement("button");

        chap.textContent = inp.value;
        delButt.textContent = "❌";

        chap.appendChild(delButt);
        list.appendChild(chap);
        inp.focus();

        delButt.addEventListener("click", function() {
            list.removeChild(chap);
            input.focus();
        });

        inp.value = "";
    }
});

