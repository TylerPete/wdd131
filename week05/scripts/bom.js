const inp = document.querySelector("#favchap");
const addButt = document.querySelector("button");
const list = document.querySelector("#list");

addButt.addEventListener("click", function () {
    if (inp.value.trim() != "") {
        displayList(inp.value);
        chaptersArray.push(inp.value);
        setChapterList();
        inp.value = "";
        inp.focus();

        // const chap = document.createElement("li");
        // const delButt = document.createElement("button");

        // chap.textContent = inp.value;
        // delButt.textContent = "❌";

        // chap.appendChild(delButt);
        // list.appendChild(chap);
        // inp.focus();

        // delButt.addEventListener("click", function () {
        //     list.removeChild(chap);
        //     input.focus();
        // });

        // inp.value = "";
    }
});

// Compound OR condition assigns the empty array value if the
//   localStorage item is missing (the function is falsy if it
//    does not return anything)
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

function displayList(item) {
    const chap = document.createElement("li");
    const delButt = document.createElement("button");
    chap.textContent = item;
    delButt.textContent = "❌";
    delButt.classList.add("delete");

    chap.appendChild(delButt);
    list.appendChild(chap);

    delButt.addEventListener("click", function () {
        list.removeChild(chap);
        deleteChapter(chap.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMChaptersList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMChaptersList"));
}

function deleteChapter(chapter) {
    //slice off the last character, in this case "❌"
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}